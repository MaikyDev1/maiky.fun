import {retry} from "next/dist/compiled/@next/font/dist/google/retry";

export function TaggedAlert({color, background, tag, text}) {
    return (
        <div className="p-2">
            <div className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">{tag}</span>
                <span className="inline-flex px-2">{text}</span>
            </div>
        </div>
    )
}

export function LogoButton({ children }) {
    return (
        <button className="p-3">
            {children}
        </button>
    )
}