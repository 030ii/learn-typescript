// interface PhoneNumberDictionary {
//   [phone: string]: {
//     num: number;
//   };
// }

// interface Contact {
//   name: string;
//   address: string;
//   phones: PhoneNumberDictionary;
// }

// enum PhoneType {
//   Home = 'home',
//   Office = 'office',
//   Studio = 'studio',
// }

import { Contact, PhoneType } from "./types";
// api
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    // constructor는 반환 타입을 지정하지 않아도 됨
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name); // contact.name으로 구성된 배열이 return 되므로 
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address); // contact.address으로 구성된 배열이 return 되므로 
  }
  /* ------------------------------------------------ */
}

let heroes = [
  { name: 'Tony', age: 30 },
  { name: 'Banner', age: 100 },
];
// heroes.map((hero) => hero.name);
heroes.map(function(hero){
  return hero.name;
}); // ['Tony', 'Banner']

new AddressBook();
