export default function ProgrammingLogos() {
    return (
        <div className="">
            <section className="mb-10">
                <p className="text-xl md:text-3xl lg:text-4xl font-bold text-center">Technologies I Love to Work With</p>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-y-10 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-5xl mx-auto justify-items-center text-center">
                <div className="">
                    <i className="devicon-c-plain text-5xl md:text-6xl"></i>
                    <p>C</p>
                </div>

                <div className="">
                    <i className="devicon-python-plain text-5xl md:text-6xl"></i>
                    <p>Python</p>
                </div>

                <div className="">
                    <i className="devicon-react-plain text-5xl md:text-6xl"></i>
                    <p>React</p>
                </div>
                
                <div className="">
                    <i className="devicon-typescript-plain text-5xl md:text-6xl"></i>
                    <p>TypeScript</p>
                </div>
                
            </section>
        </div>
    );
}
