import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Get system information that might affect text direction
  const headers = [
    'accept-language',
    'user-agent',
    'accept-charset',
    'accept-encoding'
  ];

  const debugInfo = {
    timestamp: new Date().toISOString(),
    systemInfo: {
      nodeVersion: process.version,
      platform: process.platform,
      locale: process.env.LANG || process.env.LC_ALL || 'not-set'
    },
    testContent: {
      sampleText: 'Hello World',
      expectedResult: 'Hello World',
      testCases: [
        { input: 'Hello World', expected: 'Hello World', description: 'English phrase' },
        { input: 'Simple text', expected: 'Simple text', description: 'Basic English text' },
        { input: '123456', expected: '123456', description: 'Numbers' },
        { input: 'Test@email.com', expected: 'Test@email.com', description: 'Email format' }
      ]
    }
  };

  return NextResponse.json(debugInfo, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testText, userAgent, language } = body;

    const result = {
      receivedText: testText,
      textLength: testText?.length || 0,
      charCodes: testText ? testText.split('').map((char: string) => ({
        char,
        code: char.charCodeAt(0),
        isEnglish: char.charCodeAt(0) >= 0x0000 && char.charCodeAt(0) <= 0x007F
      })) : [],
      detectedLanguage: detectLanguage(testText),
      userAgent,
      language,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

function detectLanguage(text: string): string {
  if (!text) return 'unknown';
  
  let englishChars = 0;
  
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    
    // Latin: 0x0000–0x007F, 0x0080–0x00FF
    // Latin Extended: 0x0100–0x017F, 0x0180–0x024F
    if ((code >= 0x0000 && code <= 0x007F) ||
        (code >= 0x0080 && code <= 0x00FF) ||
        (code >= 0x0100 && code <= 0x017F) ||
        (code >= 0x0180 && code <= 0x024F)) {
      englishChars++;
    }
  }
  
  if (englishChars > 0) return 'english';
  return 'unknown';
}