import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //faz a conversao do json(que é o corpo -imsomnia- do backend) para js
app.use(routes);


app.listen(3333);