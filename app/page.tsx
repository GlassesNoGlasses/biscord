
import Image from "next/image";
import { NavBar } from "./components/nav-bar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col overflow-y-auto">
      <NavBar links={[]} />
      <div className="flex flex-col w-full h-fit bg-gray-900 mt-4">
        <div className="flex flex-col w-full h-fit align-middle justify-center">
          <h1 className="text-center text-7xl font-bold text-sky-100">
            Welcome to Biscord
          </h1>
          <div className="w-full h-4 border-t-4 border-yellow-50"/>
        </div>
        <div className="flex justify-center align-middle">
          <Image
          src={"controller.svg"}
          width={250}
          height={250}
          alt="biscord-logo"
          className="rounded-full bg-slate-200 animate-pulse"
          />
        </div>
        <div className="flex flex-row w-full bg-gray-800">
          <div className="">

          </div>
        </div>
      </div>
    </main>
  );
}
