import React from 'react';
import AddContactForm from './AddContactForm';
import SearchBar from './SearchBar';
import ContactsTable from './ContactsTable';
import { useContacts } from '../hooks/useContacts';

const AddressBookApp: React.FC = () => {
    const {
        contacts,
        searchTerm,
        setSearchTerm,
        addContact,
        updateContact,
        deleteContact,
    } = useContacts();

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Address Book
                </h1>

                <AddContactForm onAddContact={addContact} />

                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                <ContactsTable
                    contacts={contacts}
                    onUpdate={updateContact}
                    onDelete={deleteContact}
                />
            </div>
        </div>
    );
};

export default AddressBookApp;
