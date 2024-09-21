import IntroText from "@/app/ui/introtext";
import ProfilePhoto from "@/app/ui/profilephoto";
import SocialLogos from "@/app/ui/sociallogos";

export default function Home() {
  return (
    <main className="flex flex-col-reverse xl:flex-row min-h-screen justify-center items-center">
      <div className="flex flex-col ml-10 mr-10 xl:ml-20 xl:mr-20">
        <IntroText /> 
        <SocialLogos />
      </div>
      
      <ProfilePhoto />
    </main>
  );
}
