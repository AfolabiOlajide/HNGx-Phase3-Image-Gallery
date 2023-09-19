import Link from "next/link"


// local imports 
import Button from "@/components/Button";


export default function Home() {
  return (
    <main className="">
      <h1>Hello Next</h1>
      <Link href={`/app`}>
        <Button text="Launch App"/>
      </Link>
    </main>
  )
}
