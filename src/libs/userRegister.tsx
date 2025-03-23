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
        alert('email,name or telephone number already exists')
        return response.json();
    }
    alert("register success")
    return response.json();
}