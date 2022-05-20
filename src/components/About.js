import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, Dalienst here.       
                        <br className="hidden lg:inline-block" />
                        <br/>
                            I am a software developer and a podcaster.
                    </h1>
                    <p className="mb-8 leading-relaxed text-yellow-300 ">
                        I love building softwares and finding solutions to problems. Enthusiastic about Machine Learning and Artificial Intelligence.
                        Focused on revolutionizing technology in Africa.
                        I am the host and creator of The Claphouse Podcast.
                    </p>
                    <br/>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Work with me</a>
                        <a href="#projects" className="ml-4 inline-flex text-yellow-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">See my projects gallery</a>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-md" alt="hero" src="./me.jpeg"/>
                </div>
            </div>
        </section>
    );
}