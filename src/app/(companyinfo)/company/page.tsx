import getCompanies from "@/libs/getCompanies"
import { Company } from '../../../../interfaces'
import Link from "next/link";
import Image from 'next/image';

export default async function CompaniesPage(){
    const companies = await getCompanies();
    return(
        <div className="w-[100vw] h-[100vh] flex flex-col items-center"> 
            <h1 className="text-center text-xl font-bold mt-[100px]">Company Info</h1>
            <div className=" flex flex-wrap justify-center w-full items-center">
                {   
                    companies ?
                    companies.data.map((company: Company) => (
                        <div key={company.id} className="bg-white bg-opacity-80 rounded-lg p-4 m-4
                        shadow-lg hover:bg-gray-100 hover:shadow-3xl">
                            <Link href={`/company/${company.id}`} >
                                <div className="relative w-full h-48 p-2">
                                    <Image src="/img/company.jpg" 
                                        alt={company.name} 
                                        layout="fill"
                                        objectFit="cover"
                                        className=" object-bottom rounded-md"
                                    />
                                </div>
                                <h1 className="font-semibold mt-2">{company.name}</h1>
                                <p>{company.description}</p>
                            </Link>
                        </div>
                    )) :
                    <p>No companies</p>
                }
            </div>
        </div>
    )
}