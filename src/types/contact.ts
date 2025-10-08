export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
}
