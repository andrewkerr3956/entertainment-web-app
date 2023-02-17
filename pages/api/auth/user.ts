import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import bcrypt from 'bcrypt';
import encryptPassword from '@lib/handlers/encryptPassword';
import User from '@lib/db/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET": {
            break;
        }
        case "POST": {
            const data = JSON.parse(req.body);
            console.log(req.body);
            if (data.email && data.password && data.confirmPassword) {
                /* All have to be present in the request body to accept creating the user */
                try {
                    const newPassword = encryptPassword(data.password);
                    if(newPassword) {
                        const results = await User.create({ email: data.email, password: newPassword });
                        results ? res.status(200).json({ success: "Successfully inserted user into db" }) : res.status(500).json({ error: "Could not insert user into db." });
                    } else {
                        res.status(500).json({ error: "Could not handle password encryption" });
                    }
                } catch (e) {
                    res.status(500).json({ error: "Could not create user" });
                }
            } else {
                res.status(500).json({ error: "Invalid or no data supplied." });
            }
            break;
        }
        case "PUT": {
            break;
        }
        default: {
            res.status(500).json({ error: "Invalid method supplied" });
            break;
        }
    }
}