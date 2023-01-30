import HeroBanner from "@/components/HeroBanner";
import Speciality from "@/components/Speciality";

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <div className="space-bar bg-white"/>
      <Speciality/>
      <div className="space-bar bg-white"/>
    </main>
  )
}
