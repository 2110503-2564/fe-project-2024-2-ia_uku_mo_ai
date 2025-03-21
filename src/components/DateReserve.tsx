'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"
import addBookingDB from "@/libs/addBookingDB"
import { cookies } from "next/headers"

export default function DateReserve({ cid }: { cid: string }) {
    const token = null;
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={bookDate}
                    onChange={(value) => {
                        setBookDate(value);
                    }} />
            </LocalizationProvider>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    addBookingDB(bookDate?.format('YYYY-MM-DD') ?? '', cid, `${token}`);
                    alert(`You have booked on ${bookDate?.format('YYYY-MM-DD')}`);
                }}
            >
                Book
            </button>
        </div>
    );
}
