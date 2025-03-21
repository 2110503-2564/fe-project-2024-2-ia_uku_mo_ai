export default async function getBooking(token : string){
    const response = await fetch('https://backenddev-project.onrender.com/api/v1/bookings',{
        method: 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    if(!response.ok){
        throw new Error('Failed to get reservation');
    }
    return response.json();

}