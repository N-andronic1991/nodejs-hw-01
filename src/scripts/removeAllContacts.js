import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    return await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
