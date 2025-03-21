export default async function deleteBooking({bookingId, token} : {bookingId: string, token: string}) {
    if (!token) {
        throw new Error('Authentication token not found');
    }
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error('Delete failed');
    }
    return response.json();
}