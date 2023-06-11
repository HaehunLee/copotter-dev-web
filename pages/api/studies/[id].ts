import * as fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const queryId = _req.query?.id || null;

    const markdownFile = path.join(
      process.cwd(),
      `/server/studies/typescript/${queryId}.md`,
    );

    if (!markdownFile) {
      throw new Error('Cannot find data');
    }

    // Markdown 파일을 읽고 JSON으로 변환
    const markdownText = fs.readFileSync(markdownFile, 'utf-8');
    const jsonData = { content: markdownText };

    // JSON 데이터를 API 응답으로 전송
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(jsonData);
  } catch (err: { message: string }) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
