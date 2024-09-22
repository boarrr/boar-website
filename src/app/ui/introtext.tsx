export default function IntroText() {
    return (
        <div className="flex flex-col items-center xl:items-start text-center xl:text-start mb-5 md:mx-10">

            <section>
                <p className="text-lg lg:text-3xl xl:text-2xl font-bold">
                    👋 Hello! My name is
                </p>

                <p className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-5 lg:mb-7">
                        Ryan Pitman
                        <span className="text-red-400">.</span>
                </p>
            </section>

            <section className="md:text-xl lg:text-2xl xl:text-xl">
                <p className="mb-5">
                    I am a student from <a
                        href="https://maps.app.goo.gl/1nQn2zzcDtF6bRadA" 
                        className="text-red-400 font-bold" 
                        target="_blank"
                        rel="noopener noreferrer">
                        Dublin, Ireland
                    </a> with interests in Artificial Intelligence, Cybersecurity, and Software Development.
                </p>
                <p className="mb-5">  
                    I am currently a second-year student, studying <a 
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
            </section>
        </div>
    );
}
