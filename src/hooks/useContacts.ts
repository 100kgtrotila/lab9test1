import { useState } from 'react';
import type { Contact } from '../types/contact';

export const useContacts = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addContact = (contact: Omit<Contact, 'id'>) => {
        const newContact: Contact = {
            ...contact,
            id: Date.now(),
        };
        setContacts((prev) => [...prev, newContact]);
    };

    const updateContact = (id: number, updatedContact: Omit<Contact, 'id'>) => {
        setContacts((prev) =>
            prev.map((contact) =>
                contact.id === id ? { ...updatedContact, id } : contact
            )
        );
    };

    const deleteContact = (id: number) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    const filteredContacts = contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName} ${contact.phone}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return {
        contacts: filteredContacts,
        searchTerm,
        setSearchTerm,
        addContact,
        updateContact,
        deleteContact,
    };
};
