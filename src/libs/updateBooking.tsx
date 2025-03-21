export default async function updateBooking({token, bookingID, bookingDate}:{ token : string, bookingID: string, bookingDate: string }) {
    if (!token) {
        throw new Error('Authentication token not found');
    }
    //console.log(token, bookingID, bookingDate);
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/bookings/${bookingID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            bookingDate: bookingDate,
        }),
    });
    if (!response.ok) {
        throw new Error('Update failed');
    }
    return response.json();
}