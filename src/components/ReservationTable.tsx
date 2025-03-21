'use client'
import { Reservation } from '../../interfaces';

export default function ReservationTable({ response }: { response: any }) {
    return (
        <div className="mt-6 w-full flex flex-row justify-center items-around">
            <table className='table'>
                <thead>
                    <tr className="row">
                        <th className="cell">Session Date</th>
                        <th className="cell">Company</th>
                        <th className="cell">User</th>
                        <th className="cell">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {response.data && response.data.length > 0 ? (
                        response.data.map((reservation: Reservation) => {
                           
                            const bookingDate = new Date(reservation.bookingDate).toLocaleDateString();
                            const createdAt = new Date(reservation.createdAt).toLocaleDateString();
                            
                            return (
                                <tr key={reservation._id}>
                                    <td className="cell font-normal">{bookingDate}</td>
                                    <td className="cell font-normal">{reservation.company.map((comp: { name: string }) => comp.name)}</td>
                                    <td className="cell font-normal">{reservation._id}</td>
                                    <td className="cell font-normal flex flex-row justify-around">
                                        <button className="rounded-lg bg-blue-500 text-white hover:bg-blue-700 p-2">Edit</button>
                                        <button className="rounded-lg bg-red-500 text-white hover:bg-red-700 p-2">Cancel</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <th className="cell font-normal" colSpan={4}>No reservations found</th>
                        </tr>
                    )}
                </tbody>
            </table>

            <button className="absolute top-20 right-10 rounded-lg bg-blue-500 text-white hover:bg-blue-700 p-2 mt-4" onClick={() => console.log(response)}>
                Log Response
            </button>
        </div>
    );
}
