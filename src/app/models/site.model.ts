export interface Site {
    id?: string,
    address: Address,
    clientId?: string
    contacts: {
        main: {
            id?: string,
            address: Address,
            email: string,
            firstName: string, 
            jobTitle: string,
            lastName: string
            phoneNumber: string
        }
    }
    createdAt?: string,
    updatedAt?: string,
    images?: string[],
    tags?: string[],
    title: string,
}

interface Address {
    zipCode: string, 
    city: string, 
    street: string, 
    country: string, 
    state: string
}