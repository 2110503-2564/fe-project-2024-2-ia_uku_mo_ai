export default async function deleteBooking({bookingId, token} : {bookingId: string, token: string}) {
    if (!token) {
        alert('Authentication token not found');
        return;
    }
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        return response.json();
        //throw new Error('Delete failed');
    }
    return response.json();
}