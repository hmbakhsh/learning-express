import { Request, Response } from 'express'
import { getLinksDB, postLinksDB } from '../models/linksModel.js';

export const getLinks = async (req: Request, res: Response) => {
  res.status(200);
  res.send(await getLinksDB())
}

export const postLinks = async (req: Request, res: Response) => {
  try {
    await postLinksDB(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}