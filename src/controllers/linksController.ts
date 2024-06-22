import express, { Request, Response } from 'express'

export const getLinks = (req: Request, res: Response) => {
  res.status(200);
  res.send('/links route hit');
}