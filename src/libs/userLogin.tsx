export default async function userLogIn(userEmail: string, userPassword: string) {
    const response = await fetch('https://backenddev-project.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email: userEmail, 
            password: userPassword,
        }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}