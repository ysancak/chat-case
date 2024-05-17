import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req: Request, res: Response) => {
  const {messages} = req.body
  const lastMessages = messages.slice(-10);

  const stream = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: lastMessages,
    stream: true,
  });

  for await (const chunk of stream) {
    res.write(chunk.choices[0]?.delta?.content || '');
  }

  res.end();
})

export default router