import crypto from 'crypto';
// import passport from 'passport';
// import { IVerifyOptions } from 'passport-local';
import { User, UserDocument } from '../models/User';
import { Request, Response, NextFunction } from 'express';
// import '../config/passport';

/**
 * POST /login
 * Sign in using email and password.
 */
export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'postLogin'
  });
  // passport.authenticate('local', (err: Error, user: UserDocument, info: IVerifyOptions) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     req.flash('errors', { msg: info.message });
  //     return res.redirect('/login');
  //   }
  //   req.logIn(user, err => {
  //     if (err) {
  //       return next(err);
  //     }
  //     req.flash('success', { msg: 'Success! You are logged in.' });
  //     res.redirect(req.session.returnTo || '/');
  //   });
  // })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */
export const logout = (req: Request, res: Response) => {};

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      res.status(409).json({
        message: 'Mail exists'
      });
    }
    user.save(err => {
      if (err) {
        return next(err);
      }
      res.status(201).json({
        message: 'User created'
      });
      // req.logIn(user, err => {
      //   if (err) {
      //     return next(err);
      //   }
      //   res.redirect('/');
      // });
    });
  });
};

/**
 * POST /account/delete
 * Delete user account.
 */
export const postDeleteAccount = (req: Request, res: Response, next: NextFunction) => {
  // const user = req.user as UserDocument;
  // User.remove({ _id: user.id }, err => {
  //   if (err) {
  //     return next(err);
  //   }
  // });
};

export const getAccount = (req: Request, res: Response) => {
  res.status(20).json({
    message: 'route protected'
  });
};
