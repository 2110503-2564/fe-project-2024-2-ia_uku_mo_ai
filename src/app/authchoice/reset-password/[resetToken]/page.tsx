'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import resetPassword from "@/libs/resetPassword";

export default function ResetPasswordPage({
    params,
}: {
    params: { resetToken: string };
}) {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            resetPassword(params.resetToken, newPassword);
            alert("Password reset successfully:" + newPassword);
            router.push("/api/auth/signin"); // Redirect to sign-in page
        } else {
            console.error("Passwords do not match");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f9f9f9" }}>
            <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Reset Password</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <label htmlFor="newPassword" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#555" }}>New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#555" }}>Confirm New Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                    <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}