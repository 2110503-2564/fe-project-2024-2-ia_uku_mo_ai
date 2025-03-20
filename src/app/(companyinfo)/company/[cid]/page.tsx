import Image from "next/image";
import getCompany from "@/libs/getCompany";

export default async function VenuePage({ params }: { params: { cid: string } }) {
  const companyDetail = await getCompany(params);
  return (
    <main className="text-center p-10">
      <h1 className="text-4xl font-bold m-10">{companyDetail.data.name}</h1>
      <div className="flex flex-row justify-center items-around">
        <div className="relative w-1/3 h-64 overflow-hidden rounded-lg">
          <Image
            src="/img/company.jpg"
            alt={companyDetail.data.name}
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="text-md mx-5 my-5 space-y-2 text-left flex flex-col items-start">
          <p>Name: {companyDetail.data.name}</p>
          <p>Address: {companyDetail.data.address}</p>
          <p>Website: {companyDetail.data.website}</p>
          <p>Description: {companyDetail.data.description}</p>
          <p>Tel: {companyDetail.data.tel}</p>
        </div>
      </div>
    </main>
  );
}