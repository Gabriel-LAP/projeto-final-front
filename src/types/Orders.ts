export type Orders = {
    _id?: string
    device: string,
    owner: {
        _id: string,
        name: string
    },
    ownerName?: string,
    faulty:  string,
    parts?: string,
    price: number,
    statusOrder:  string,
    creationDate?: Date,
    estimatedDate?: Date,
    completionDate?: Date, 
    guarantee: string,
    brand: string,

}

export type NewOrder = {
    _id?: string
    device: string,
    owner: string,
    parts?: string,
    price: number,
    statusOrder:  string,
    creationDate?: Date,
    estimatedDate?: Date,
    completionDate?: Date,
    guarantee: string,
    brand: string,
    faulty:  string,


}
