import Image from "next/image";
import getCompany from "@/libs/getCompany";
import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption";

export default async function CompanyPage({ params }: { params: { cid: string } }) {
  const session = await getServerSession(authOptions);
  const companyDetail = await getCompany(params);
  return (
    <main className="text-center p-10">
      <h1 className="text-4xl font-bold m-10">{companyDetail.data.name}</h1>
      <div className="flex flex-row justify-center items-around">
        <div className="relative w-1/3 h-128 overflow-hidden rounded-lg">
          <Image
            src="/img/company.jpg"
            alt={companyDetail.data.name}
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="text-md mx-5 my-5 space-y-2 text-left flex flex-col items-start">
          {/* <p>Company ID: {companyDetail.data.id}</p> */}
          <p>Name: {companyDetail.data.name}</p>
          <p>Address: {companyDetail.data.address}</p>
          <p>Website: {companyDetail.data.website}</p>
          <p>Description: {companyDetail.data.description}</p>
          <p>Tel: {companyDetail.data.tel}</p><br></br>
          <p className="font-semibold text-lg">Make Your Booking Here!</p>
          {
            session ? (
              <DateReserve cid={companyDetail.data.id}/>
            ) : (
              <p className="text-lg text-gray-500">Please Sign in to Booking Interview Session</p>
            )
          }
          
        </div>
      </div>
    </main>
  );
}