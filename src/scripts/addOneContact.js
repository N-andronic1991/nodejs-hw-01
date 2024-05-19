import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);
    const contact = createFakeContact();
    contacts.push(contact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

await addOneContact();
