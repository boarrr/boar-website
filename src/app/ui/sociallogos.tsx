import Image from "next/image";

export default function SocialLogos() {
    return (
        <div className="flex flex-row justify-center xl:justify-start xl:ml-10 space-x-4 md:space-x-8">
            <div>
                <a href="https://github.com/boarrr" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/githublogo.png"
                        width={100}
                        height={100}
                        className="w-12 md:w-14 lg:w-20 xl:w-16"
                        alt="Link to Ryan's GitHub Profile"
                    />

                    <span className="sr-only">GitHub Profile of Ryan Pitman</span>
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/ryan-pitman/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/linkedinlogo.png"
                        width={100}
                        height={100}
                        className="w-12 md:w-14 lg:w-20 xl:w-16"
                        alt="Link to Ryan's LinkedIn Profile"
                    />

                    <span className="sr-only">LinkedIn Profile of Ryan Pitman</span>
                </a>
            </div>
        </div>
    );
}