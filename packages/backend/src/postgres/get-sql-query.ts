import fs from 'promise-fs';

export const getSqlQuery = (
  fileLocation: string
): Promise<string> => fs.readFile(fileLocation, 'utf8');
