import Image from 'next/image';
import Link from 'next/link';

export default function DetailSection() {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-4 flex flex-row justify-center w-full h-[50vh] items-center">
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col w-[35vw] mr-6">
                <h1 className="text-3xl font-extrabold text-left text-gray-800">Join Us</h1>
                <p className="text-gray-600 mt-2">Be part of the biggest online job fair and connect with top companies.</p>
                <Link href='api/auth/signin' className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all text-center">
                    Register Now
                </Link>
            </div>
            <Image
                src="/img/meeting.jpg"
                alt="Online Job Fair"
                width={600}
                height={150}
                className="mt-5 m-2 object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}
