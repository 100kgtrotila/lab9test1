import React from 'react';
import ContactRow from './ContactRow';
import type { Contact } from '../types/contact';

interface ContactsTableProps {
    contacts: Contact[];
    onUpdate: (id: number, contact: Omit<Contact, 'id'>) => void;
    onDelete: (id: number) => void;
}

const ContactsTable: React.FC<ContactsTableProps> = ({ contacts, onUpdate, onDelete }) => {
    if (contacts.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No data to display
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Last Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {contacts.map((contact) => (
                    <ContactRow
                        key={contact.id}
                        contact={contact}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsTable;
