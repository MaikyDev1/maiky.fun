import {useEffect, useState} from "react";
import { usePathname } from 'next/navigation'
import useSWR from "swr";
import {BuildFinder, ImageViewer, TextViewer} from "@/app/components/windows/helper/finderHelper";
import {
    FluentShare24Filled,
    FxemojiCardfilebox,
    FxemojiFolder, LoadingDots,
    SkillIconsJavaDark,
    TwemojiSpiralNotepad
} from "@/app/components/icons/iconsDB";
import {useSearchParams} from "next/navigation";

function LoadingWindow() {
    return (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-background/40">
            <div className="z-10 inverse-toggle lg:w-[70%] w-full p-4 lg:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden min-h-[500px]">
                <div className="top mb-2 flex cursor-pointer">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-center items-center">
                    <LoadingDots className="h-60 w-60"/>
                </div>
            </div>
        </div>
    )
}

const fetcher = url => fetch(url).then(r => r.json())

export function PhotosOnTopWindow({setWindow}) {
    const searchParams = useSearchParams()
    const pathName = usePathname();
    const [path, setPath] = useState(`Home${searchParams.has("path") ? ("/" + searchParams.get("path")) : ""}`);
    const [open, setOpen] = useState(null);
    const { data, isLoading, error } = useSWR(`/api/v1/internal/get_projects`, fetcher)
    if(isLoading) return <LoadingWindow/>
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
            {open != null ? open.includes(".txt") ? <TextViewer setOpen={setOpen} open={open}/> : <ImageViewer setOpen={setOpen} open={open}/> : <div></div>}
            <div className="z-10 inverse-toggle lg:w-[70%] w-full lg:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-2 flex items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => setWindow(null)}>
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
                    <div className="w-full flex justify-end">
                        <FluentShare24Filled className="h-5 cursor-pointer text-white/50" onClick={() => navigator.clipboard.writeText(`https://maiky.fun?window=work${path.includes("/") ? "&path=" + path.split("/")[1] : ""}`)}/>
                    </div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 p-2 pl-4 bg-gray-900/40 pb-6 min-h-[500px] overflow-y-auto md:flex flex-col hidden select-none">
                        <div className="text-gray-400 font-extrabold">Websites</div>
                        <div className="flex flex-col">
                            {data.files.web.map((item, index) => (
                                <span key={index} onClick={() => setPath(`Home/${item}`)} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                    <FxemojiFolder className="h-6"/>
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="text-gray-400 font-extrabold">Java Projects</div>
                        <div className="flex flex-col">
                            {data.files.java.map((item, index) => (
                                <span key={index} onClick={() => setPath(`Home/${item}`)} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                    <SkillIconsJavaDark className="h-6"/>
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="text-gray-400 font-extrabold">Other Apps</div>
                        <div className="flex flex-col">
                            {data.files.other.map((item, index) => (
                                <span key={index} onClick={() => setPath(`Home/${item}`)} className="flex items-center gap-2 mouse cursor-pointer rounded-xl hover:bg-gray-900/20 p-1">
                                    <FxemojiCardfilebox className="h-6"/>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-full mb-2 min-h-[500px] overflow-auto">
                        <BuildFinder lookup={data} render={path.includes("/") ? path.split("/")[1] : "default"} setPath={setPath} setOpen={setOpen}/>
                    </div>
                </div>
            </div>
        </div>
    )
}