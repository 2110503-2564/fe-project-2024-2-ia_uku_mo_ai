import BookingTable from "@/components/BookingTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption";
import getBooking from "@/libs/getBooking";

export default async function BookingList() {
  const session = await getServerSession(authOptions);
  const token = session?.user?.token || "";
  const response = await getBooking(token);
  return (
    <main className="pt-24 flex flex-col items-center">
      <h1 className="text-lg font-bold">
        {session?.user.data.name} Interview Booking
      </h1>
      <h2 className="text-md text-gray-600">Reserved Interview Session</h2>
      <BookingTable response={response} />
    </main>
  );
}
