import express, { Request, Response, NextFunction } from 'express'
import { getLinks, postLinks } from './controllers/linksController.js'

const router = express.Router();

const middleWare = (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date(), '[Request]', req.url);
  next();
}

router.use(middleWare);

router.get('/', (req, res) => {
  res.send('Reached API');
})

router.get('/links', getLinks)
router.post('/links', postLinks);

export default router;