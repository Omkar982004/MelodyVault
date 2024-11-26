import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const songsDirectory = path.join(process.cwd(), 'public/songs');
  const files = fs.readdirSync(songsDirectory).map((file) => ({
    name: path.basename(file, path.extname(file)),
    path: `/songs/${file}`,
  }));

  res.status(200).json(files);
}
