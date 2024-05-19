import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);

    for (let i = 0; i < number; i += 1) {
      const contact = createFakeContact();
      contacts.push(contact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

await generateContacts(5);
