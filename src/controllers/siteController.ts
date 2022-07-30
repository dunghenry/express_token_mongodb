/* eslint-disable require-jsdoc */
import {Request, Response} from 'express';
class siteController {
  public static getHomePage(req: Request, res: Response) {
    return res.render('index', {title: 'Home Page'});
  }
}
export default siteController;
