import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const totalContacts = (await getAllContacts()).length;
    return totalContacts;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

console.log(await countContacts());
