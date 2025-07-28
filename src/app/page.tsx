import { Navbar, Hero, Feedbacks } from "@/components/layout";
import { About, Experience, Tech, Works } from "@/components/sections";
import { BackgroundVideo } from "@/components/ui";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <BackgroundVideo
          src="/video/background.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
    </>
  );
}
