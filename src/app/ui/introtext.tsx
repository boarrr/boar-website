
export default function IntroText() {
    return (
        <div className="flex-col content-center ml-10">
            <div>
                <p className="text-xl font-bold mb-2">
                    👋 Hello! My name is
                </p>
            </div>

            <div>
                <p className="text-6xl mb-4 font-bold">
                    Ryan Pitman.
                </p>
                <p>
                    I am a student from <a href="https://maps.app.goo.gl/1nQn2zzcDtF6bRadA" className="text-red-400 font-bold" target="_blank">Dublin, Ireland</a> with interests in Artificial Intelligence, Cybersecurity and Software Development.

                    I am currently a second year student, studying Computer Science Infrastructure at Technological University Dublin

                    Here is my resume.
                </p>
            </div>
        </div>
    );
}