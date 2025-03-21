'use client';

export default async function addBookingDB(date: string, companyId: string, token: string) {
    
    if (!token) {
        throw new Error('Authentication token not found');
    }
    alert(token);

    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/companies/${companyId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            bookingDate: date,
        }),
    });

    if (!response.ok) {
        throw new Error('Booking failed');
    }

    return response.json();
}