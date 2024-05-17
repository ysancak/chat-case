import express from 'express';
import chatRoutes from './routes/chat';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/chat", chatRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
