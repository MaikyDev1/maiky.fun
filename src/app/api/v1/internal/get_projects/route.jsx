import fs from 'fs';
import path from 'path';
import {NextResponse} from "next/server";

export const GET = async (request) => {
    const directoryPath = path.join(process.cwd(), 'public', 'work');
    return NextResponse.json({files: await searchTwoLayersDeep(directoryPath)}, { status: 200 });
}

async function searchTwoLayersDeep(directoryPath) {
    const files = await new Promise((resolve, reject) => {
        let temp = {};
        fs.readdir(directoryPath + '/Websites', (err, files) => {
            if (err) reject(err);
            else temp.web = files;
            fs.readdir(directoryPath + '/Other', (err, files) => {
                if (err) reject(err);
                else temp.other = files;
                fs.readdir(directoryPath + '/Java', (err, files) => {
                    if (err) reject(err);
                    else temp.java = files;
                    resolve(temp);
                });
            });
        });
    });
    return files;
}
