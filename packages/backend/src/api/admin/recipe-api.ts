import {
  Router,
  Request,
  Response
} from 'express';

import {
  fetchAllRecipes, fetchSingleRecipe, createRecipe, deleteRecipe, editRecipe
} from '../../fetch-data';

export const recipeApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response) => {
    try {
      const results = await fetchAllRecipes();
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.get('/:recipeId', async (req: Request, res: Response) => {
    const { recipeId } = req.params;
    try {
      const results = await fetchSingleRecipe(recipeId);
      return res.json(results);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.post('/', async (req: Request, res: Response) => {
    const recipe = req.body;
    if (!recipe) {
      return res.status(400).json({ error: 'Please provide a recipe' });
    }
    try {
      const user = await createRecipe(recipe);
      return res.json(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.patch('/', async (req: Request, res: Response) => {
    const recipe = req.body;
    try {
      const user = await editRecipe(recipe);
      return res.json(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  router.delete('/:recipeId', async (req: Request, res: Response) => {
    const { recipeId } = req.params;
    try {
      const user = await deleteRecipe(recipeId);
      return res.json(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  return router;
};
