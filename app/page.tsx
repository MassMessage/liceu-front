import Home from "@/app/home/page";

export default function Root() {
  return (
    <>
      <Link href={'/login'}>Login</Link>
      <Link href={'/panel'}>Panel</Link>
    </>
  )
}
