import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    let contacts = await getAllContacts();
    contacts = contacts.filter(() => Math.random() > 0.5);
    return await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};

await thanos();
