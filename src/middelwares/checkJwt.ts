// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import config from '../config/config';

// export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
//   //Get the jwt token from the head
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     req.userData = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: 'Auth failed'
//     });
//   }
// };
