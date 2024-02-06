export type Orders = {
    id: string,
    device: string,
    owner: {
        name: string,
        id: string
    },
    faulty:  string,
    parts: string,
    price: number,
    statusOrder:  string,
    creationDate?: Date,
    estimatedDate?: Date,
    completionDate?: Date, 
    guarantee: string,

}