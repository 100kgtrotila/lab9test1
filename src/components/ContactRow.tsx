import React, { useState } from 'react';
import { PiPencilSimple, PiTrash, PiCheck, PiX } from 'react-icons/pi';
import type { Contact } from '../types/contact';

interface ContactRowProps {
    contact: Contact;
    onUpdate: (id: number, contact: Omit<Contact, 'id'>) => void;
    onDelete: (id: number) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({ contact, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editFirstName, setEditFirstName] = useState(contact.firstName);
    const [editLastName, setEditLastName] = useState(contact.lastName);
    const [editPhone, setEditPhone] = useState(contact.phone);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSave = () => {
        const newErrors: { [key: string]: string } = {};

        if (!editFirstName.trim()) {
            newErrors.firstName = 'Required';
        }
        if (!editLastName.trim()) {
            newErrors.lastName = 'Required';
        }
        if (!editPhone.trim()) {
            newErrors.phone = 'Required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onUpdate(contact.id, {
            firstName: editFirstName,
            lastName: editLastName,
            phone: editPhone,
        });
        setIsEditing(false);
        setErrors({});
    };

    const handleCancel = () => {
        setEditFirstName(contact.firstName);
        setEditLastName(contact.lastName);
        setEditPhone(contact.phone);
        setIsEditing(false);
        setErrors({});
    };

    if (isEditing) {
        return (
            <tr className="bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contact.id}
                </td>
                <td className="px-6 py-4">
                    <input
                        type="text"
                        value={editFirstName}
                        onChange={(e) => setEditFirstName(e.target.value)}
                        className={`w-full p-1 border rounded ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.firstName && (
                        <span className="text-red-500 text-xs">{errors.firstName}</span>
                    )}
                </td>
                <td className="px-6 py-4">
                    <input
                        type="text"
                        value={editLastName}
                        onChange={(e) => setEditLastName(e.target.value)}
                        className={`w-full p-1 border rounded ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.lastName && (
                        <span className="text-red-500 text-xs">{errors.lastName}</span>
                    )}
                </td>
                <td className="px-6 py-4">
                    <input
                        type="tel"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        className={`w-full p-1 border rounded ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-xs">{errors.phone}</span>
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-800"
                            title="Save"
                        >
                            <PiCheck size={20} />
                        </button>
                        <button
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-800"
                            title="Cancel"
                        >
                            <PiX size={20} />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.firstName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.lastName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.phone}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                    >
                        <PiPencilSimple size={20} />
                    </button>
                    <button
                        onClick={() => onDelete(contact.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                    >
                        <PiTrash size={20} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ContactRow;
