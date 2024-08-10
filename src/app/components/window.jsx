import {useState} from "react";

export function MacOnTopWindow({setWindow, children}) {
    return (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-background/40">
            <div className="z-10 inverse-toggle w-[70%] px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="top mb-2 flex cursor-pointer" onClick={() => setWindow("none")}>
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
            </div>
            {children}
        </div>
    )
}

export function PhotosOnTopWindow({setWindow}) {
    const [path, setPath] = useState("Home/test");
    let pathHtml = [];
    if(path.split("/").length > 1)
        for(const item of path.split("/")) {
            if(item.includes("home") || item.includes("Home")) continue;
            pathHtml.push(
                <div className="p-1 px-2 bg-gray-500/40 rounded-xl ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" className="h-6"><path fill="currentColor" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path></svg>
                    <span className="pl-2">{item}</span>
                </div>
            )
        }
    return (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-background/40">
            <div className="z-10 inverse-toggle w-[70%] shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-2 flex items-center cursor-pointer">
                    <div className="flex items-center" onClick={() => setWindow("none")}>
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex">
                        <div className="p-1 px-2 bg-gray-500/40 rounded-xl ml-5 flex items-center cursor-pointer" onClick={() => setPath("Home")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 text-gray-100"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"></path></svg>
                            <span className="pl-2">Home</span>
                        </div>
                        {pathHtml}
                    </div>
                </div>
                <div className="grid grid-cols-5 max-h-[600px]">
                    <div className="col-span-1 p-2 pl-4 h-full bg-gray-900/40 pb-6 max-h-[600px] overflow-y-auto select-none">
                        <div className="text-gray-400 font-extrabold">Websites</div>
                        <div className="flex flex-col">
                            <span onClick={() => setPath("Home/FlareHost")} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <FxemojiFolder className="h-6"/>
                                FlareHost
                            </span>
                            <span onClick={() => setPath("Home/MaikyFun")} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <FxemojiFolder className="h-6"/>
                                MaikyFun
                            </span>
                            <span onClick={() => setPath("Home/ReMind")} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <FxemojiFolder className="h-6"/>
                                ReMind
                            </span>
                        </div>
                        <div className="text-gray-400 font-extrabold">Java Projects</div>
                        <div className="flex flex-col">
                            <span className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <SkillIconsJavaDark className="h-6"/>
                                Minecraft Plugins
                            </span>
                        </div>
                        <div className="text-gray-400 font-extrabold">Other Apps</div>
                        <div className="flex flex-col">
                            <span className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <FxemojiCardfilebox className="h-6"/>
                                DuckyDocs
                            </span>
                            <span className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                <FxemojiCardfilebox className="h-6"/>
                                StorageMonster
                            </span>
                        </div>
                    </div>
                    <div className="col-span-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

function BuildFinder({}) {
    return (

    )
}

function FxemojiFolder(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}><path fill="#0074a8" d="M491 326V92.143C491 79.021 480.259 68 467.137 68H341.13c-9.287 0-17.723 5.603-21.596 14.044l-12.709 27.903C302.952 118.388 294.516 124 285.229 124H67.538C54.416 124 44 134.426 44 147.549v216.363C44 377.034 54.416 388 67.538 388h399.599c.628 0 1.248-.36 1.863-.408V433h.342c0 6 4.877 10.636 10.829 10.636S491 438.669 491 432.717z"></path><path fill="#59cafc" d="M480.171 443.636c-5.952 0-10.829-4.636-10.829-10.636H469V210.181C469 197.058 458.661 186 445.539 186H45.94C32.818 186 22 197.058 22 210.181V449.37C22 462.492 32.818 473 45.94 473h399.599c1.385 0 2.741-.06 4.061-.288c1.639.227 3.31.385 5.012.385c20.04 0 36.136-16.229 36.136-36.269c0-.534-.036-1.058-.058-1.586c-1.147 4.766-5.435 8.394-10.519 8.394"></path></svg>);
}
function SkillIconsJavaDark(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#fff" d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"></path><path fill="#f58219" d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.46 17.028-35.731 54.766z"></path></g></svg>);
}
function FxemojiCardfilebox(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}><path fill="#c6965c" d="M485.516 321.303H81.787a7.733 7.733 0 0 1-7.733-7.733V152.612a7.733 7.733 0 0 1 7.733-7.733h403.729a7.733 7.733 0 0 1 7.733 7.733V313.57a7.733 7.733 0 0 1-7.733 7.733"></path><path fill="#eac083" d="M457.864 321.303H54.136a7.733 7.733 0 0 1-7.733-7.733V152.612a7.733 7.733 0 0 1 7.733-7.733h403.729a7.733 7.733 0 0 1 7.733 7.733V313.57a7.734 7.734 0 0 1-7.734 7.733"></path><path fill="#8e6049" d="M501.054 212.651h-93.177v220.458h93.177c5.965 0 10.8-4.835 10.8-10.8V223.451c0-5.965-4.835-10.8-10.8-10.8"></path><path fill="#f9e7c0" d="M430.213 321.303H26.484a7.733 7.733 0 0 1-7.733-7.733V152.612a7.733 7.733 0 0 1 7.733-7.733h403.729a7.733 7.733 0 0 1 7.733 7.733V313.57a7.733 7.733 0 0 1-7.733 7.733"></path><path fill="#597b91" d="M401.872 188.5H55a5.5 5.5 0 1 1 0-11h346.872a5.5 5.5 0 0 1 0 11m-117.326 34.583a5.5 5.5 0 0 0-5.5-5.5H55a5.5 5.5 0 1 0 0 11h224.046a5.5 5.5 0 0 0 5.5-5.5m99.954 40.083a5.5 5.5 0 0 0-5.5-5.5H252.998a5.5 5.5 0 0 0 0 11H379a5.5 5.5 0 0 0 5.5-5.5m-165.511 0a5.5 5.5 0 0 0-5.5-5.5H55a5.5 5.5 0 0 0 0 11h158.489a5.5 5.5 0 0 0 5.5-5.5"></path><path fill="#af773f" d="m320.962 217.97l-41.461 57.267a10.8 10.8 0 0 1-8.748 4.467h-82.211a10.8 10.8 0 0 1-8.748-4.467l-41.461-57.267a12.86 12.86 0 0 0-10.418-5.319l-115.053.054C5.758 212.705 0 218.463 0 225.567v196.742c0 5.965 4.835 10.8 10.8 10.8h435.574c5.965 0 10.8-4.835 10.8-10.8V225.567c0-7.103-5.758-12.862-12.862-12.862l-112.933-.054a12.86 12.86 0 0 0-10.417 5.319"></path></svg>);
}