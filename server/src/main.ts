import express, { Express, Request, Response } from 'express';
import { Server } from 'http';
const app: Express = express();
const port = 8080;
app.use(express.json());
const server: Server = app.listen(port);

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Server');
});

app.post('/', (req: Request, res: Response) => {
	console.log(req.body);
	res.send(req.body);
});
