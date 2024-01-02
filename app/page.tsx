import Home from "@/app/home/page";
import Link from "next/link";

export default function Root() {
  return (
    <>
      <Link href={'/login'}>Login</Link>
      <Link href={'/panel'}>Panel</Link>
    </>
  )
}
