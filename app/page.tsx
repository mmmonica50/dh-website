import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-content-center bg-white">
      <div className="size-full object-center absolute inset-0 bg-pink overflow-hidden">
        <img src="/background.png" alt="background image" className="object-fill h-full w-full" />
        <h1 className="box-decoration-slice text-white px-2 text-2xl font-mono font-bold absolute top-20 left-20">
          {"You should know why you are here"}
          <br />
          {"otherwise"}
          <br />
          {"you shouldn't be..."}
        </h1>
        <div className="block fixed top-0 right-0 z-index-1">
          <Link href="https://service.digitalhosting.sbs:8443" className="">?</Link>  
        </div>  
      </div>
    </main>
  );
}