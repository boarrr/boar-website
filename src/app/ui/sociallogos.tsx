export default function SocialLogos() {
    return (
        <div className="flex flex-row justify-center xl:justify-start xl:ml-10 space-x-4 md:space-x-8">
            <a href="https://github.com/boarrr" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 focus:text-red-400">
                <i 
                    className="devicon-github-original text-4xl md:text-5xl lg:text-7xl xl:text-6xl" 
                    role="img" aria-label="Link to Ryan's GitHub Profile">
                </i>
            </a>

            <a href="https://www.linkedin.com/in/ryan-pitman/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 focus:text-red-400">
                <i 
                    className="devicon-linkedin-plain text-4xl md:text-5xl lg:text-7xl xl:text-6xl"
                    role="img" aria-label="Link to Ryan's LinkedIn Profile">
                </i>
            </a>
        </div>
    );
}
