
export default function IntroText() {
    return (
        <div className="flex-col content-center">
            <div>
                <p className="text-xl font-bold mb-2">
                    👋 Hello! My name is
                </p>
            </div>

            <div className="mr-32 text-lg">
                <p className="text-6xl mb-6 font-bold">
                    Ryan Pitman
                    <span className="text-red-400">.</span>
                </p>
                <p className="mb-2">
                    I am a student from <a
                        href="https://maps.app.goo.gl/1nQn2zzcDtF6bRadA" 
                        className="text-red-400 font-bold" 
                        target="_blank"
                        rel="noopener noreferrer">
                        Dublin, Ireland
                    </a> with interests in Artificial Intelligence, Cybersecurity and Software Development.
                </p>
                <p className="mb-2">  
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