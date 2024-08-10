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
            <div className="z-10 inverse-toggle w-[70%] px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="top mb-2 flex items-center cursor-pointer">
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
            </div>
            <div>

            </div>
        </div>
    )
}