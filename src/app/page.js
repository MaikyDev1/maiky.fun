'use client'

import {TypeAnimation} from "react-type-animation";
import {useState} from "react";
import {MacOnTopWindow, PhotosOnTopWindow} from "@/app/components/window";

export default function Home() {
    const [typingStatus, setTypingStatus] = useState(false);

    return (
    <main className="bg-background h-screen">
        <PhotosOnTopWindow/>
        <nav className="flex justify-end w-full p-4">
            <div className="flex gap-8 indent-[1px] text-gray-50">
                <a><span className="text-yellow-200">[1]</span> About</a>
                <a><span className="text-yellow-200">[2]</span> My Work</a>
                <a><span className="text-yellow-200">[3]</span> Tools</a>
                <a><span className="text-yellow-200">[4]</span> Contact Me</a>
            </div>
        </nav>
        <section className="w-full flex justify-center py-32">
          <div className="lg:w-[50%] w-full p-2">
              <div className="coding inverse-toggle h-[450px] px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div className="top mb-2 flex">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex flex-col">
                      <pre>█▀▄▀█ ▄▀█ █ █▄▀ █▄█ █▀▄ █▀▀ █ █<br/>
                          █ ▀ █ █▀█ █ █ █  █  █▄▀ ██▄ ▀▄▀</pre>
                      <div className="flex">
                          <span className="text-green-400 pointer-events-none select-none">maiky-vm:~$</span>
                          <p className="typing items-center pl-2">
                              <TypeAnimation sequence={[1000, "cat maiky.conf", () => setTypingStatus(true)]}/>
                          </p>
                      </div>
                      {typingStatus ?
                        <div>
                            <p>My name is MaikyDev and here are some of my qualities</p>
                            <div className="pl-3 flex flex-col">
                                <a><span className="text-yellow-300">[1]</span> I am a software developer, mainly I do backend and frontend (Click me for my work)</a>
                                <a><span className="text-yellow-300">[2]</span> I have experience in <span className="text-orange-300">Java</span>, <span className="text-blue-400">C++</span>, <span className="text-yellow-300">JavaScript</span>, HTML, CSS and PHP</a>
                                <a><span className="text-yellow-300">[3]</span> As a webdeveloper I used only those frameworks React, NextJS, Express and Laravel</a>
                                <a><span className="text-yellow-300">[4]</span> Also I am a minecraft developer with some plugins to my name! (See my SpigotMC)</a>
                            </div>
                            <p>About me:</p>
                            <p>I am 18, from <span className="underline decoration-rose-700">Romania</span> and currently pursuing a degree in Computer Science at <span className="underline decoration-yellow-400">Politehnica</span> University of Bucharest. I began my studies in 2024.</p>
                            <div className="pl-3 flex flex-col">
                                <a><span className="text-yellow-300">[2019]</span> In 2019, I started liking programing, exactly Java, working with SpigotAPI to create minecraft plugins!</a>
                                <a><span className="text-yellow-300">[2022]</span> Started discovering and learning about networking and Linux systems.</a>
                                <a><span className="text-yellow-300">[2023]</span> Web Development: Began developing both frontend and backend for websites</a>
                                <a><span className="text-yellow-300">[2024]</span> My first company, FlareHosting</a>
                            </div>
                        </div> : <p></p>
                      }
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}