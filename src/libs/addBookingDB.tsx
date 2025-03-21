export default async function addBookingDB(date: string, companyId: string, token: string) {
    
    if (!token) {
        throw new Error('Authentication token not found');
    }
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

    const data = await response.json(); // Await the JSON response

    if (!response.ok) {
        //console.log(data.message); // Access the error message
        alert(data.message || 'Failed to add booking');
        //return response.json();
    }

    return data;
}