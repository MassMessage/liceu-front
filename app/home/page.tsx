import MenuComponent from "@/app/home/components/MenuComponent";
import HomeHero from "@/app/home/components/HomeHero";
import HomeFeatures from "@/app/home/components/HomeFeatures";
import HomeContent from "@/app/home/components/HomeContent";
import HomeStats from "@/app/home/components/HomeStats";
import HomeVideo from "@/app/home/components/HomeVideo";

export default function Home() {
  return (
    <>
      <MenuComponent/>
      <HomeHero/>
      <HomeFeatures/>
      <HomeContent/>
      <HomeStats/>
      <HomeVideo/>
    </>
  )
}
