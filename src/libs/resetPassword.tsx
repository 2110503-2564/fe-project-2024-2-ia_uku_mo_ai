export default async function resetPassword(resetPasswordToken:string ,newUserPassword : string) {
    const response = await fetch(`https://backenddev-project.onrender.com/api/v1/auth/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            resetToken : resetPasswordToken,
            newPassword : newUserPassword,
        }),
    });
    if(!response.ok) {
        throw new Error('Failed to get user');
    }
    return response.json();
}