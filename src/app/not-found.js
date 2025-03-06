import Link from 'next/link'
 
export default function NotFound() {
  return (
        <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-semibold">Not Found</h2>
                <p className="text-gray-600 mt-2">Could not find requested resource</p>
                <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Return Home
                </Link>
        </div>
  );
}