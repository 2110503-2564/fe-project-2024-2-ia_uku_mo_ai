export default async function getCompanies() {
    const URL = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${URL}/companies`, {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    if(!response.ok){
        throw new Error('Failed to get Companies');
    }
    return response.json();
}