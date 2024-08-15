import {
    DeviconLinkedin,
    GrommetIconsMapLocation,
    SkillIconsDiscord,
    SkillIconsGithubDark,
    SkillIconsInstagram, SkillIconsLinkedin
} from "@/app/components/icons/iconsDB";
import {useEffect, useState} from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

export function ToolsOnTopWindow({setWindow}) {
    const [data, setData] = useState('');
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') {
                setWindow(null)
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [])
    useEffect(() => {
        const fetchTextFile = async () => {
            try {
                const response = await fetch('/launchpad/launchpad.json');
                if (response.ok) {
                    const text = await response.json();
                    setData(text);
                } else {
                    setData('Error: Unable to load the text file.');
                }
            } catch (error) {
                setData('Error: Unable to fetch the text file.');
            }
        };

        fetchTextFile();
    }, []);
    let html = [];
    for(const tool of data) {
        html.push(
            <a target="_blank" href={tool.url} className="p-3 hover:bg-gray-50/10 flex-none rounded-3xl select-none cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                    <img src={tool.icon} className="h-[96px] w-[96px] object-cover rounded-3xl"/>
                    <p className="mt-1 text-gray-100">{tool.name}</p>
                </div>
            </a>
        )
    }
    return (
        <div onClick={() => setWindow(null)} className="h-screen bg-background/80 fixed overflow-auto">
            <div className="w-screen grid xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:p-20 p-5 pt-20 text-white justify-around">
                {html}
            </div>
            <p className="text-gray-400/40 bottom-2 absolute w-full text-center">Press <span className="font-montserrat text-sm font-extrabold">ESC</span> or <span className="font-montserrat text-sm font-extrabold">CLICK</span> anywhere to close launchpad</p>
        </div>
    )
}