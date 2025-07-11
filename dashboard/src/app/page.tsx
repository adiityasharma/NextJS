import Link from "next/link";


export default function Home() {
  return (
    <div  className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-400 mb-6" >Welcome to the Dashboard App</h1>
        <p className="text-lg text-gray-500 mb-8">
          Manage your tasks, track analytics, and stay organized with our powerful dashboard
        </p>
        <Link className="px-5 py-3 font-semibold bg-blue-500 rounded hover:bg-blue-600" href={"/dashboard"}>Go To the Dashboard</Link>
      </div>
    </div>
  );
}
