import fs from 'promise-fs';

export const getSqlQueryV2 = (
  fileLocation: string
): Promise<string> => fs.readFile(fileLocation, 'utf8');
