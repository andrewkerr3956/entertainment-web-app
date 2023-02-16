import dbConnHandler from '@lib/db/connection';
import Media from '@lib/db/models/Media';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnHandler();
    switch (req.method) {
        case "GET": {
            if (req.query?.mid) {
                const results = await Media.findOne({ id: req.query.mid, category: "Movie" });
                if (results) {
                    res.status(200).json({ results: results })
                } else {
                    res.status(500).json({ error: "Could not parse supplied mid" });
                }
            } else {
                res.status(500).json({ error: "Could not parse supplied mid" });
            }
            break;
        }
        default: {
            return res.status(500).json({ error: "Invalid method supplied" });
        }
    }
}