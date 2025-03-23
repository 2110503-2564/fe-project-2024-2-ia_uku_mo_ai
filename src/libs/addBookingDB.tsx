export default async function addBookingDB(date: string, companyId: string, token: string) {
    
    if (!token) {
        alert('Authentication token not found');
        return;
    }
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/companies/${companyId}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            bookingDate : date,
        }),
    });

    if (response.status === 400) {
        alert("Invalid BookingDate or You have already made 3 bookings");
        return;
    }
    alert(`You have booked on ${date}`);
    return response.json();
}