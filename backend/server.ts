import express from 'express';
import cors from 'cors';
import compression from 'compression';

import chatRoutes from './routes/chat';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(compression());

app.use("/chat", chatRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
