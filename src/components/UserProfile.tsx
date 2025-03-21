'use client'
import { useSession } from 'next-auth/react';

export default function UserProfile() {

    const { data : session } = useSession();
    return (
        <div className="pt-12">
            <h1>User Profile</h1>
            <div>
                {
                    session ? 
                    <div>
                        <h2>Name: {session.user.data.name}</h2>
                        <h2>Email: {session.user.data.email}</h2>
                        <h2>Role: {session.user.data.role}</h2>
                    </div>
                    : <h1>No User Data</h1>
                }
            </div>
        </div>
    );
}