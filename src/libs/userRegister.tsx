export default async function userRegister(userName: string, userTel: string, userEmail: string, userPassword: string, userRole: string) {
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            tel: userTel,
            email: userEmail,
            password: userPassword,
            role: userRole,
        }),
    });
    if(response.status === 400) {
        alert('email or name already exists')
        // throw new Error('Register failed');
    }
    if (!response.ok) {
        // throw new Error('Register failed');
    }
    alert("register success")
    return response.json();
}