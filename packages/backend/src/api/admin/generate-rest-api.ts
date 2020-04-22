import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { get404Error, get500Error } from '../utils';
import { getError } from '../utils/get-error';
import { uuidParamValidation } from '../../middleware/uuid-param-validation';

interface IAutoGenOptions<T> {
  getAll?: () => Promise<T[]>;
  getOne?: (id: string) => Promise<T | null>;
  create?: (object: T) => Promise<T>;
  edit?: (object: T) => Promise<T>;
  deleteOne?: (id: string) => Promise<T>;
  idsAreUUIDs?: boolean;
}

export const generateRestApi = <T> (
  {
    getAll,
    getOne,
    create,
    edit,
    deleteOne,
    idsAreUUIDs = true
  }: IAutoGenOptions<T>,
  router = Router()
) => {
  if (getAll) {
    router.get(
      '/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const results = await getAll();
          return res.json(results);
        } catch (err) {
          return next(get500Error(err.message));
        }
      }
    );
  }

  if (getOne) {
    router.get(
      '/:id',
      idsAreUUIDs ? uuidParamValidation() : [],
      async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
          const result = await getOne(id);
          if (!result) {
            return next(get404Error());
          }
          return res.json(result);
        } catch (err) {
          return next(get500Error(err.message));
        }
      }
    );
  }

  if (create) {
    router.post(
      '/',
      async (req: Request, res: Response, next: NextFunction) => {
        const objectToCreate = req.body;
        if (!objectToCreate) {
          return next(getError('Please provide an item to create', 400));
        }
        try {
          const createdObject = await create(objectToCreate);
          return res.json(createdObject);
        } catch (err) {
          return next(get500Error(err.message));
        }
      }
    );
  }

  if (edit) {
    router.patch(
      '/',
      async (req: Request, res: Response, next: NextFunction) => {
        const objectToEdit = req.body;
        try {
          const editedObject = await edit(objectToEdit);
          if (!editedObject) {
            return next(get404Error());
          }
          return res.json(editedObject);
        } catch (err) {
          return next(get500Error(err.message));
        }
      }
    );
  }

  if (deleteOne) {
    router.delete(
      '/:id',
      idsAreUUIDs ? uuidParamValidation() : [],
      async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
          const deletedObject = await deleteOne(id);
          if (!deletedObject) {
            return next(get404Error());
          }
          return res.json(deletedObject);
        } catch (err) {
          return next(get500Error(err.message));
        }
      }
    );
  }

  return router;
};
