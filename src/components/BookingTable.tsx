'use client'
import { useSession } from 'next-auth/react';
import { Booking } from '../../interfaces';
import CancelPopup from './CancelPopup';
import EditPopup from './EditPopup';
import { useState } from 'react';

export default function BookingTable({ response }: { response: any }) {

    const {data : session} = useSession();
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showCancelPopup, setCancelPopup] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const handleEditClick = (Booking: Booking) => {
        setSelectedBooking(Booking);
        setShowEditPopup(true);
    };

    const handleCancelClick = (Booking: Booking) => {
        setSelectedBooking(Booking);
        setCancelPopup(true);
    };

    const handleClosePopup = () => {
        setShowEditPopup(false);
        setCancelPopup(false);
        setSelectedBooking(null);
    };

    return (
        <div className="mt-6 w-full flex flex-row justify-center items-around">
            <table className='table'>
                <thead>
                    <tr className="row">
                        <th className="cell">Session Date</th>
                        <th className="cell">Company</th>
                        <th className="cell">User</th>
                        <th className="cell w-[150px]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {response.data && response.data.length > 0 ? (
                        response.data.map((Booking: Booking) => {
                            const bookingDate = new Date(Booking.bookingDate).toLocaleDateString();
                            return (
                                <tr key={Booking._id}>
                                    <td className="cell font-normal">{bookingDate}</td>
                                    <td className="cell font-normal">{Booking.company.map((comp: { name: string }) => comp.name)}</td>
                                    <td className="cell font-normal">{Booking.user}</td>
                                    <td className="cell font-normal flex justify-around">
                                        <button 
                                            className="rounded-lg bg-blue-500 text-white hover:bg-blue-700 p-2" 
                                            onClick={() => handleEditClick(Booking)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="rounded-lg bg-red-500 text-white hover:bg-red-700 p-2"
                                            onClick={() => handleCancelClick(Booking)}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <th className="cell font-normal" colSpan={4}>No Bookings found</th>
                        </tr>
                    )}
                </tbody>
            </table>

            <button className="absolute top-20 right-10 rounded-lg bg-blue-500 text-white hover:bg-blue-700 p-2 mt-4" onClick={() => console.log(response)}>
                Log Response
            </button>
            {showEditPopup && selectedBooking && (
                <EditPopup 
                    booking={selectedBooking} 
                    onClose={handleClosePopup} 
                />
            )}
            {showCancelPopup && selectedBooking && (
                <CancelPopup 
                    booking={selectedBooking} 
                    onClose={handleClosePopup} 
                />
            )}
        </div>
    );
}
