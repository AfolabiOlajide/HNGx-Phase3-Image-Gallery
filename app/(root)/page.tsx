import Link from "next/link"


// local imports 
import Button from "@/components/Button";


export default function Home() {
  return (
    <main className=" w-[90%] md:w-[80%] mx-auto">
      <h1 className="text-[2rem] w-[90%] md:w-[50%] mb-[1rem] text-gradient">Image Gallery with Drag and drop functionalities.</h1>
      <p className="mb-[2rem]">Click the link below to lauch the application.</p>
      <Link href={`/app`}>
        <Button text="Launch App"/>
      </Link>
    </main>
  )
}
