import IntroText from "@/app/ui/introtext";
import ProfilePhoto from "@/app/ui/profilephoto";
import Logos from "@/app/ui/logos";

export default function Home() {
  return (
    <main className="flex flex-col-reverse xl:flex-row h-screen justify-center items-center">
      <div className="flex flex-col ml-10 mr-10 xl:ml-20 xl:mr-20">
        <IntroText /> 
        <Logos />
      </div>

      <ProfilePhoto />
    </main>
  );
}
