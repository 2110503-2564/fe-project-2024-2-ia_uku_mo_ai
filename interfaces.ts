export interface Company {
    id: string;
    name: string;
    address: string;
    website: string;
    description: string;
    tel: string;
}

export interface Reservation {
    _id: string;
    bookingDate: string; 
    user: string; 
    company: Company[];
    createdAt: string;
    __v: number;
  }
  