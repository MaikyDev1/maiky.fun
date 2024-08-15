import {
    DeviconLinkedin,
    GrommetIconsMapLocation,
    SkillIconsDiscord,
    SkillIconsGithubDark,
    SkillIconsInstagram, SkillIconsLinkedin
} from "@/app/components/icons/iconsDB";

const fetcher = url => fetch(url).then(r => r.json())

export function ContactOnTopWindow({setWindow}) {
    return (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-background/40">
            <div className="z-10 inverse-toggle lg:w-[50%] w-full lg:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-3 flex items-center cursor-pointer">
                    <div className="flex items-center" onClick={() => setWindow(null)}>
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-7 min-h-[500px]">
                    <div className="col-span-2 bg-gray-900/40 flex flex-col items-center pt-10 gap-3">
                        <img src="https://avatars.githubusercontent.com/u/67166376?v=4" className="rounded-full h-28 w-28"/>
                        <p className="flex">MaikyDev | <span className="flex"><GrommetIconsMapLocation className="h-5 mx-2 text-gray-400"/>Romania</span></p>
                        <div className="w-full flex flex-col px-5 gap-1">
                            <button type="button" className="rounded-md flex text-md justify-center items-center gap-2 px-6 py-2.5 font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: "#7289da" }}>
                                <SkillIconsDiscord className="h-6 w-6"/> Discord
                            </button>
                            <button type="button" className="rounded-md flex text-md justify-center items-center gap-2 px-6 py-2.5 font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: "#333" }}>
                                <SkillIconsGithubDark className="h-6 w-6"/> GitHub
                            </button>
                            <button type="button" className="rounded-md flex text-md justify-center items-center gap-2 px-6 py-2.5 font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: "#c13584" }}>
                                <SkillIconsInstagram className="h-6 w-6"/> Instagram
                            </button>
                            <button type="button" className="rounded-md flex text-md justify-center items-center gap-2 px-6 py-2.5 font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: "#0077b5" }}>
                                <DeviconLinkedin className="h-6 w-6"/> LinkedIn
                            </button>
                        </div>
                    </div>
                    <div className="col-span-5 flex flex-col items-center">
                        <p className="text-gradient title-font text-xl uppercase">Contact me</p>
                        <div className="">
                            <div className="block w-full">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-600 w-full">You are looking for</label>
                                <select id="countries" className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none">
                                    <option selected>Choose something</option>
                                    <option value="US">A website</option>
                                    <option value="CA">A minecraft plugin</option>
                                    <option value="">An application</option>
                                    <option value="">Support</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}