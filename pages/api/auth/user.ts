import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch(req.method) {
        case "GET": {

        }
        case "POST": {
             
        }
        default: {
            res.status(500).json({error: "Invalid method supplied"});
        }
    }
}