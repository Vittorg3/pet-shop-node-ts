import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    !query && res.redirect('/');

    res.render('pages/page', {
        menu: createMenuObject(''),
        list: Pet.getFromName(query),
        query
    });
};