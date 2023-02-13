import ExperinceCode from "@/components/ExperinceCode";
import HeroBanner from "@/components/HeroBanner";
import MySkills from "@/components/TechSkills";
import Speciality from "@/components/Speciality";
import TechProjects from "@/components/Techprojects";
import ProjectsTabs from "@/components/ProjectsTabs";


export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <div className="space-bar bg-white"/>
      <Speciality/>
      <div className="space-bar bg-white"/>
      <div className="space-bar black"/>
      <ExperinceCode/>
      <div className="space-bar black"/>
      <div className="space-bar bg-white"/>
      <MySkills/>
      <div className="space-bar bg-white"/>
      <TechProjects/>
      <div className="space-bar bg-white"/>
      <ProjectsTabs/>
      <div className="space-bar bg-white"/>
    </main>
  )
}
