import { RequestHandler } from 'express';

const validateUUID = (uuid: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    .test(uuid);

export const uuidParamValidation = (): RequestHandler => (
  req, res, next
) => {
  const { id } = req.params;
  if (id && validateUUID(id)) {
    return next();
  }
  return res.status(400).json({
    message: 'Please provide a valid id'
  });
};
