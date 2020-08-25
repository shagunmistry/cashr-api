import express, { Request, Response } from 'express';

const homepageRouter = express.Router();

homepageRouter.get('/', (req: Request, res: Response) => {
    res.send('Ping Homepage');
})

homepageRouter.get('/homepageContent', (req: Request, res: Response) => {
    res.send('Hi from Homepage!');
});

export default homepageRouter;