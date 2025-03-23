'use client'
import { useState } from 'react';
import dayjs from 'dayjs';
import { Booking } from '../../interfaces';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import updateBooking from '@/libs/updateBooking';
import { useSession } from 'next-auth/react';

interface EditPopupProps {
    booking: Booking;
    onClose: () => void;
}

export default function EditPopup({ booking, onClose }: EditPopupProps) {

    const [formData, setFormData] = useState({
        bookingDate: dayjs(booking.bookingDate),
        company: booking.company.map((comp: { name: string }) => comp.name).join(', ')
    });

    const { data: session } = useSession();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await updateBooking({ token: session?.user.token as string, bookingID: booking._id, bookingDate: formData.bookingDate.format('YYYY-MM-DD')});
            window.location.reload();
            onClose();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
                <h2 className="text-xl font-semibold mb-4">Edit booking</h2>
                <form onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Booking Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker 
                            value={formData.bookingDate} 
                            onChange={(date) => setFormData({ ...formData, bookingDate:dayjs(date) })} 
                            shouldDisableDate={(date) => {
                                const formattedDate = date.format('YYYY-MM-DD');
                                return !["2022-05-10", "2022-05-11", "2022-05-12", "2022-05-13"].includes(formattedDate);
                            }}
                          />
                        </LocalizationProvider>
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}