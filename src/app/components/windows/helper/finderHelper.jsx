import {
    FluentShare24Filled, FxemojiCardfilebox,
    FxemojiFolder, LoadingDots,
    SkillIconsJavaDark, TwemojiCardIndexDividers,
    TwemojiSpiralNotepad
} from "@/app/components/icons/iconsDB";
import useSWR from "swr";
import {useEffect, useState} from "react";

const fetcher = url => fetch(url).then(r => r.json())

export function BuildFinder({lookup, render, setPath, setOpen}) {
    if(render.includes("default")) {
        return (
            <div className="flex flex-wrap mx-3 gap-3">
                {lookup.files.web.map((item, index) => (
                    <div key={index} onClick={() => setPath(`Home/${item}`)} className="hover:bg-gray-700/50 transition duration-300 py-3 px-4 flex flex-col rounded-2xl cursor-pointer select-none justify-center items-center">
                        <FxemojiFolder className="h-16"/>
                        <p>{item}</p>
                    </div>
                ))}
                {lookup.files.java.map((item, index) => (
                    <div key={index} onClick={() => setPath(`Home/${item}`)} className="hover:bg-gray-700/50 transition duration-300 py-3 px-4 flex flex-col rounded-2xl cursor-pointer select-none justify-center items-center">
                        <SkillIconsJavaDark className="h-16"/>
                        <p>{item}</p>
                    </div>
                ))}
                {lookup.files.other.map((item, index) => (
                    <div key={index} onClick={() => setPath(`Home/${item}`)} className="hover:bg-gray-700/50 transition duration-300 py-3 px-4 flex flex-col rounded-2xl cursor-pointer select-none justify-center items-center">
                        <FxemojiCardfilebox className="h-16"/>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        )
    } else {
        return (<Content render={render} setPath={setPath} setOpen={setOpen}/>)
    }
}

function Content({render, setPath, setOpen}) {
    const { data: files, isLoading, error } = useSWR(`/api/v1/internal/read_path?url=work/Websites/${render}`, fetcher)
    if(isLoading) return <LoadingDots className="h-16 w-16 mx-10 my-5"/>
    let html = [];
    if(error) return <div className="h-full w-full flex flex-col opacity-10 justify-center items-center">
        <TwemojiCardIndexDividers className="h-32 w-32"/>
        <p className="text-lg">File not found!</p>
    </div>
    for(const file of files.files) {
        if(file.includes("readme.txt")) continue;
        html.push(
            <div onClick={() => setOpen(`/work/Websites/${render}/${file}`)} className="hover:bg-gray-700/50 transition duration-300 py-3 px-4 flex flex-col rounded-2xl cursor-pointer select-none justify-center items-center">
                <img src={`/work/Websites/${render}/${file}`} className="h-16 w-16 object-cover rounded-xl"/>
                <p>{file}</p>
            </div>
        )
    }
    return (
        <div className="flex flex-wrap mx-3 gap-3">
            <div onClick={() => setOpen(`/work/Websites/${render}/readme.txt`)} className="hover:bg-gray-700/50 transition duration-300 py-3 px-4 flex flex-col rounded-2xl cursor-pointer select-none justify-center items-center">
                <TwemojiSpiralNotepad className="h-16"/>
                <p>About This</p>
            </div>
            {html}
        </div>
    )
}

export function TextViewer({open, setOpen}) {
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        const fetchTextFile = async () => {
            try {
                const response = await fetch(open);
                if (response.ok) {
                    const text = await response.text();
                    setTextContent(text);
                } else {
                    setTextContent('Error: Unable to load the text file.');
                }
            } catch (error) {
                setTextContent('Error: Unable to fetch the text file.');
            }
        };

        fetchTextFile();
    }, []);
    return (
        <div className="fixed z-[100] h-screen w-screen flex justify-center items-center bg-background/90">
            <div className="z-10 inverse-toggle md:w-[60%] md:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-2 flex items-center cursor-pointer">
                    <div className="flex items-center" onClick={() => setOpen(null)}>
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex">
                        <div className="p-1 px-2 bg-gray-500/40 rounded-xl ml-5 flex items-center cursor-pointer" onClick={() => setPath("Home")}>
                            <TwemojiSpiralNotepad className="h-6 text-gray-100"/>
                            <span className="pl-2">You are viewing {open.split("/").pop()}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900/40 p-5 px-10 text-lg  min-h-[200px]">{textContent}</div>
            </div>
        </div>
    )
}

export function ImageViewer({open, setOpen}) {
    return (
        <div className="fixed z-[100] h-screen w-screen flex justify-center items-center bg-background/90">
            <div className="z-10 inverse-toggle md:w-[60%] md:m-0 m-2 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
              bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="px-5 top mb-2 flex items-center cursor-pointer">
                    <div className="flex items-center" onClick={() => setOpen(null)}>
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex">
                        <div className="p-1 px-2 bg-gray-500/40 rounded-xl ml-5 flex items-center cursor-pointer" onClick={() => setPath("Home")}>
                            <TwemojiSpiralNotepad className="h-6 text-gray-100"/>
                            <span className="pl-2">You are previewing {open.split("/").pop()}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900/40 p-5 px-10 text-md min-h-[200px]">
                    <img src={open} className="rounded-xl"/>
                    <div className="w-full flex justify-end gap-2 mt-4">
                        <button className="rounded-lg bg-gray-500 py-1 px-4 text-center text-gray-900 font-extrabold hover:bg-gray-300 transition duration-300">Download</button>
                        <button className="py-1 px-2 text-center text-gray-400 font-extrabold hover:text-white transition duration-150"><FluentShare24Filled className="w-5"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
