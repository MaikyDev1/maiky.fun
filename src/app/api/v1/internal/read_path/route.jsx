import fs from 'fs';
import path from 'path';
import {NextResponse} from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    if(!searchParams.get("url")) return new NextResponse("No url provided", { status: 400 })
    const directoryPath = path.join(process.cwd(), 'public', searchParams.get("url"));
    const files = await new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) reject(err);
            else resolve(files);
        });
    });
    return NextResponse.json({files: files}, { status: 200 });
}