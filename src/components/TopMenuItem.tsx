import Link from "next/link";

export default function TopMenuItem ({title,pageRef}:{title:string,pageRef:string}) {
    return (
        <Link className="ml-4 px-3 py-1 h-[50px] flex items-center hover:bg-gray-100" href={pageRef}>
            {title}
        </Link>
    );
}