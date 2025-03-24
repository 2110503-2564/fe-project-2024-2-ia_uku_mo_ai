export default async function requestPasswordReset(userEmail : string) {
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/auth/reset-password-request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email : userEmail,
        }),
    });
    if(!response.ok) {
        throw new Error('Failed to get user');
    }
    return response.json();
}