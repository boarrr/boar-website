import IntroText from "@/app/ui/introtext";
import ProfilePhoto from "@/app/ui/profilephoto";
import Logos from "@/app/ui/logos";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-start ml-40">
        <IntroText /> 
        <Logos />
      </div>

      <ProfilePhoto />
    </main>
  );
}
