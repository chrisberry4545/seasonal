import {
  Router,
  Request,
  Response
} from 'express';

import {
  createUser,
  fetchUserById,
  fetchAllUsers
} from '../../fetch-data';

export const userApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response) => {
    try {
      const results = await fetchAllUsers();
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const results = await fetchUserById(id);
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.post('/', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: 'Username or password missing' });
    }
    try {
      const user = await createUser(username, password);
      return res.json(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  return router;
};
