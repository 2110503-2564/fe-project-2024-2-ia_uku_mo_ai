export default async function getMe(token : string) {
    const response = await fetch('https://backenddev-project.onrender.com/api/v1/auth/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    if(!response.ok) {
        throw new Error('Failed to get user');
    }
    return response.json();
}