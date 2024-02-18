export interface address{
    street:string
    city:string
    zipcode:number
    country:string
}

export interface newStudent {
    id:string
    firstName:string
    lastName:string
    age:number
    address:address
    alias:string[]
}