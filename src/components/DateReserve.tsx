'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"
import addBookingDB from "@/libs/addBookingDB"
import { cookies } from "next/headers"
import { useSession } from "next-auth/react"

const handleBooking = async ({date, cid, token}:{ date: string, cid: string, token: string }) => {
    const response = await addBookingDB(date, cid, token);
    if(response.ok) alert(`You have booked on ${date}`);
}

export default function DateReserve({ cid }: { cid: string }) {
    const { data: session } = useSession();
    const token = session?.user.token as string;
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);
    return (
        <div className="text-md flex flex-row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={bookDate}
                    onChange={(value) => {
                        setBookDate(value);
                    }} />
            </LocalizationProvider>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => {
                    handleBooking({ date: bookDate?.format('YYYY-MM-DD') ?? '', cid, token });
                }}
            >
                Book
            </button>
        </div>
    );
}
