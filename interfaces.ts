export interface Company {
    id: string;
    name: string;
    address: string;
    website: string;
    description: string;
    tel: string;
}

export interface BookingItem {
    bookingDate: string;
    user: string;//objectID mongo
    company: string;//objectID mongo
  }