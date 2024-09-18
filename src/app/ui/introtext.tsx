
export default function IntroText() {
    return (
        <div className="flex flex-col items-center mb-5 xl:items-start">
            <div className="">
               <p className="text-lg lg:text-3xl xl:text-2xl font-bold xl:ml-10">
                    👋 Hello! My name is
                </p>
            </div>

            <div className="text-center xl:text-start md:text-xl lg:text-2xl xl:text-xl md:mr-10 md:ml-10">
                <p className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-5 lg:mb-7">
                    Ryan Pitman
                    <span className="text-red-400">.</span>
                </p>
                <p className="mb-2 lg:mb-5">
                    I am a student from <a
                        href="https://maps.app.goo.gl/1nQn2zzcDtF6bRadA" 
                        className="text-red-400 font-bold" 
                        target="_blank"
                        rel="noopener noreferrer">
                        Dublin, Ireland
                    </a> with interests in Artificial Intelligence, Cybersecurity and Software Development.
                </p>
                <p className="mb-2 lg:mb-5">  
                    I am currently a second year student, studying <a 
                        href="https://www.tudublin.ie/study/undergraduate/courses/computer-science-infrastructure-tu857/"
                        className="text-red-400 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        Computer Science Infrastructure 
                    </a> at <a
                        href="https://www.tudublin.ie/"
                        className="text-red-400 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        Technological University Dublin
                    </a>.
                </p>
                <p>
                    Here is my <a
                        href="/resume.pdf"
                        className="text-red-400 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        resume
                    </a>.
                </p>
    
            </div>
        </div>
    );
}