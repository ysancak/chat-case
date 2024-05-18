import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req: Request, res: Response) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  res.writeHead(200, headers);

  const { messages } = req.body;
  const lastMessages = messages.slice(-10);

  try {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: lastMessages,
      stream: true,
    });

    for await (const chunk of stream) {
      let content = chunk.choices[0]?.delta?.content || ' ';
      content = content.replace(/ /g, '\\s');
      res.write(`data: ${content}\n\n`);
      res.flush();
    }

    res.write(`data: [END]\n\n`);

    res.end();
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

export default router;
