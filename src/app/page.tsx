import AboutMe from "@/components/AboutMe";
import DesignTogether from "@/components/DesignTogether";
import MyProjects from "@/components/MyProjects";
import Services from "@/components/Servises";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <AboutMe />
      <Skills />
      <Services />
      <MyProjects />
      <Testimonials />
      <DesignTogether />
    </main>
  );
}
