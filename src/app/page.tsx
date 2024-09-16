import IntroText from "@/app/ui/introtext";
import ProfilePhoto from "@/app/ui/profilephoto";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen">
      <IntroText /> 
      <ProfilePhoto /> 
    </main>
  );
}
