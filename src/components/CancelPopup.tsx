'use client'
import { useSession } from 'next-auth/react';
import { Booking } from '../../interfaces';
import deleteBooking from '@/libs/deleteBooking';

interface CancelPopupProps {
    booking: Booking;
    onClose: () => void;
}

export default function CancelPopup({ booking, onClose }:CancelPopupProps) {

    const { data: session } = useSession();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await deleteBooking({token:session?.user.token as string, bookingId:booking._id});
            window.location.reload();
            onClose();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
                <h2 className="text-xl font-semibold mb-4">Cancel Booking</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Are You Sure You Want to Cancel This Booking?
                        </label>
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            No
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Yes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}