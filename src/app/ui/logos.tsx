import Image from "next/image";

export default function Logos() {
    return (
        <div className="flex flex-row mt-4">
            <div className="mr-8">
                <a href="https://github.com/boarrr" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/githublogo.png"
                        width={50}
                        height={50}
                        className=""
                        alt="An image showing the GitHub logo"
                    />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/ryan-pitman/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/linkedinlogo.png"
                        width={50}
                        height={50}
                        className=""
                        alt="An image showing the GitHub logo"
                    />
                </a>
            </div>
        </div>
    );
}