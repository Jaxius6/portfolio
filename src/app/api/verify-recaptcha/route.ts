import { NextResponse } from 'next/server';

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { token } = body;

    if (!token) {
      console.error('No token provided');
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 400 }
      );
    }

    console.log('Token length:', token.length);
    console.log('Token preview:', token.substring(0, 20) + '...');

    // Test the verification URL directly
    const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
    const formData = new URLSearchParams();
    formData.append('secret', '6LePiI0qAAAAAEsMq20Y_1-qkbDIIQrHABpbRCl6');
    formData.append('response', token);

    console.log('Sending verification request to Google...');
    const verifyResponse = await fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!verifyResponse.ok) {
      console.error('Google API response not OK:', {
        status: verifyResponse.status,
        statusText: verifyResponse.statusText
      });
      return NextResponse.json(
        { error: 'Failed to verify with Google' },
        { status: 500 }
      );
    }

    const rawText = await verifyResponse.text();
    console.log('Raw response from Google:', rawText);

    let verifyResult: RecaptchaResponse;
    try {
      verifyResult = JSON.parse(rawText);
    } catch (e) {
      console.error('Failed to parse Google response:', e);
      return NextResponse.json(
        { error: 'Invalid response format from Google' },
        { status: 500 }
      );
    }

    console.log('Parsed verification result:', verifyResult);

    if (!verifyResult.success) {
      console.error('Verification failed:', {
        success: verifyResult.success,
        errorCodes: verifyResult.error_codes,
        hostname: verifyResult.hostname
      });
      return NextResponse.json(
        { error: verifyResult.error_codes ? 
          `Failed security check: ${verifyResult.error_codes.join(', ')}` :
          'Failed security check: unknown error' },
        { status: 400 }
      );
    }

    if (typeof verifyResult.score === 'number' && verifyResult.score < 0.5) {
      console.error('Score too low:', verifyResult.score);
      return NextResponse.json(
        { error: 'Security check failed. Score too low.' },
        { status: 400 }
      );
    }

    if (verifyResult.action && verifyResult.action !== 'submit') {
      console.error('Invalid action:', verifyResult.action);
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }

    console.log('Verification successful:', {
      score: verifyResult.score,
      action: verifyResult.action,
      hostname: verifyResult.hostname
    });

    return NextResponse.json({ 
      success: true,
      score: verifyResult.score 
    });
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
