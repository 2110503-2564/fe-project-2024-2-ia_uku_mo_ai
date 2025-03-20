import getCompanies from "@/libs/getCompanies"
import { Company } from '../../../../interfaces'
import Link from "next/link";

export default async function CompaniesPage(){
    const companies = await getCompanies();
    return(
        <div className="w-[100vw] h-[100vh] flex flex-col items-center"> 
            <h1 className="text-center text-xl font-bold mt-[100px]">Company Info</h1>
            <div className=" flex flex-wrap justify-center w-full h-[50vh] items-center">
                {   
                    companies ?
                    companies.data.map((company: Company) => (
                        <div key={company.id} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col w-[35vw] mr-6 hover:scale-105 hover:bg-gray-100 transition-transform duration-100">
                            <Link href={`/company/${company.id}`}>
                                <h1 className="font-semibold">{company.name}</h1>
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