import { Company } from "../../interfaces";
export default async function addCompany({data}:{data : Company}){
    const response = await fetch('https://backenddev-project.onrender.com/api/v1/companies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },     
        body: JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error('Failed to add Company');
    }
    return response.json();
}