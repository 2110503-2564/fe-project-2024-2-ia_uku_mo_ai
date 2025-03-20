export default async function getCompany({cid}:{cid:string}){
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/companies/${cid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(!response.ok){
        throw new Error('Failed to get Company');
    }
    return response.json();
}