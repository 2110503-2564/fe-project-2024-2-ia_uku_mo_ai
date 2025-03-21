import ReservationTable from "@/components/ReservationTable";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import getReservation from "@/libs/getReservation";

export default async function ReservationPage() {
  const session = await getServerSession(authOptions);
  const token = session?.user?.token || '';
  const response = await getReservation(token);
  return (
    <main className="pt-24 flex flex-col items-center">
      <h1 className='text-lg font-bold'>Your Interview Reservation</h1>
      <h2 className='text-md text-gray-600'>Reserved Interview Session</h2>
      <ReservationTable response={response}/>
    </main>
  );
}
