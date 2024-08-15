import {
    DeviconLinkedin, F7LocationFill, FluentArrowGrowth20Filled,
    GrommetIconsMapLocation, IconamoonLocation, NimbusUniversity, NotoCalendar, NotoInformation,
    SkillIconsDiscord,
    SkillIconsGithubDark,
    SkillIconsInstagram, SkillIconsLinkedin, TwemojiBriefcase, TwemojiToolbox
} from "@/app/components/icons/iconsDB";

export function AboutOnTopWindow({setWindow}) {
    return (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-background/40">
            <div className="z-10 inverse-toggle lg:w-[50%] w-full lg:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-3 flex items-center cursor-pointer">
                    <div className="flex items-center" onClick={() => setWindow(null)}>
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className="w-full min-h-[500px]">
                    <div className="flex flex-col w-full px-10 py-2">
                        <div className="flex justify-center select-none">
                            <img src="https://avatars.githubusercontent.com/u/67166376?v=4" className="rounded-3xl h-28 w-28"/>
                            <div className="p-2 h-full items-center">
                                <h1 className="text-xl font-extrabold title-font underline decoration-blue-400">MaikyDev</h1>
                                <p className="flex items-center gap-1"><F7LocationFill/> From Walachia, Romania</p>
                                <p className="flex items-center gap-1"><NimbusUniversity/> Student at Politehnica Bucuresti</p>
                                <p className="flex items-center gap-1"><TwemojiToolbox/> Developer, SysAdmin, Hardware </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="flex items-center gap-2 font-extrabold text-lg select-none"><NotoInformation className="text-xl"/>ABOUT</p>
                            <p>My name is Maiky (Mihai) and I do stuff, like</p>
                            <p><span className="text-yellow-300">[1]</span> I have experience in <span className="text-orange-300">Java</span>, <span className="text-blue-400">C++</span>, <span className="text-yellow-300">JavaScript</span>, HTML, CSS and PHP</p>
                            <p><span className="text-yellow-300">[2]</span> As a webdeveloper I used only those frameworks React, NextJS, Express and Laravel</p>
                            <p><span className="text-yellow-300">[3]</span> Also I am a minecraft developer with some plugins to my name! (See my SpigotMC)</p>

                            <p className="flex items-center gap-2 font-extrabold text-lg select-none mt-3"><NotoCalendar className="text-xl text-red-400"/>TIMELINE</p>
                            <p><span className="text-yellow-300">[2019]</span> In 2019, I started liking programing, exactly Java, working with SpigotAPI to create minecraft plugins!</p>
                            <p><span className="text-yellow-300">[2022]</span> Started discovering and learning about networking and Linux systems.</p>
                            <p><span className="text-yellow-300">[2023]</span> Web Development: Began developing both frontend and backend for websites</p>
                            <p><span className="text-yellow-300">[2024]</span> My first company, FlareHosting</p>

                            <p className="flex items-center gap-2 font-extrabold text-lg select-none mt-3"><TwemojiBriefcase className="text-xl text-red-400"/>WORKING LIFE</p>
                            <p><span className="text-yellow-300">[2024]</span> FreeLancing</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}