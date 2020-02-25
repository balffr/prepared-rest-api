import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
  console.log('======= in ======');
  res.status(200).json({
    message: 'Home'
  });
};
