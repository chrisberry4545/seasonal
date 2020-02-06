import {
  Router,
  Request,
  Response
} from 'express';

interface IAutoGenOptions<T> {
  getAll: () => Promise<T[]>;
  getOne: (id: string) => Promise<T | null>;
  create: (object: T) => Promise<T>;
  edit: (object: T) => Promise<T>;
  deleteOne: (id: string) => Promise<T>;
}

export const generateRestApi = <T> (
  {
    getAll,
    getOne,
    create,
    edit,
    deleteOne
  }: IAutoGenOptions<T>,
  router = Router()
) => {
  router.get('/', async (req: Request, res: Response) => {
    try {
      const results = await getAll();
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const results = await getOne(id);
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.post('/', async (req: Request, res: Response) => {
    const objectToCreate = req.body;
    if (!objectToCreate) {
      return res.status(400).json({ error: 'Please provide an item to create' });
    }
    try {
      const createdObject = await create(objectToCreate);
      return res.json(createdObject);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.patch('/', async (req: Request, res: Response) => {
    const objectToEdit = req.body;
    try {
      const editedObject = await edit(objectToEdit);
      return res.json(editedObject);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedObject = await deleteOne(id);
      return res.json(deletedObject);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  return router;
};
