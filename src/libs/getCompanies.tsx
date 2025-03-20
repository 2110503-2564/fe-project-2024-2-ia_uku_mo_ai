export default async function getCompanies() {
    const response = await fetch('https://backenddev-project.onrender.com/api/v1/companies', {
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