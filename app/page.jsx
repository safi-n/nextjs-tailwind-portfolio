import ExperinceCode from "@/components/ExperinceCode";
import HeroBanner from "@/components/HeroBanner";
import Speciality from "@/components/Speciality";

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <div className="space-bar bg-white"/>
      <Speciality/>
      <div className="space-bar bg-white"/>
      <div className="space-bar bg-black"/>
      <ExperinceCode/>
      <div className="space-bar bg-black"/>
      <div className="space-bar bg-white"/>
    </main>
  )
}
