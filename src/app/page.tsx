import IntroText from "@/app/ui/introtext";
import ProfilePhoto from "@/app/ui/profilephoto";
import SocialLogos from "@/app/ui/sociallogos";
import ProgrammingLogos from "@/app/ui/programminglogos";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen mt-10">
      <section className="flex flex-col-reverse xl:flex-row justify-center items-center">
        <div className="flex flex-col ml-10 mr-10 xl:ml-20 xl:mr-20">
          <IntroText /> 
          <SocialLogos />
        </div>
      
        <ProfilePhoto />
      </section>

      <section className="mt-12 lg:mt-16">
        <ProgrammingLogos />
      </section>

      <Footer />
    </main>
  );
}
