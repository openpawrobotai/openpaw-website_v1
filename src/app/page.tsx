import Scene1Silence from "@/components/sections/Scene1Silence";
import Scene2Timeline from "@/components/sections/Scene2Timeline";
import Scene3Reveal from "@/components/sections/Scene3Reveal";
import Scene4Vision from "@/components/sections/Scene4Vision";
import Scene5Experience from "@/components/sections/Scene5Experience";
import Scene6Technology from "@/components/sections/Scene6Technology";
import Scene7BallBot from "@/components/sections/Scene7BallBot";
import Scene8Ecosystem from "@/components/sections/Scene8Ecosystem";
import Scene9BuildInPublic from "@/components/sections/Scene9BuildInPublic";
import Scene10Movement from "@/components/sections/Scene10Movement";
import Scene11Founder from "@/components/sections/Scene11Founder";
import Scene12Roadmap from "@/components/sections/Scene12Roadmap";
import Scene13Ending from "@/components/sections/Scene13Ending";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <main className="bg-black">
        <Scene1Silence />
        <Scene2Timeline />
        <Scene3Reveal />
        <Scene4Vision />
        <Scene5Experience />
        <Scene6Technology />
        <Scene7BallBot />
        <Scene8Ecosystem />
        <Scene9BuildInPublic />
        <Scene10Movement />
        <Scene11Founder />
        <Scene12Roadmap />
        <Scene13Ending />
      </main>
      <Footer />
    </>
  );
}
