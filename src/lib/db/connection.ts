import { DestroyOptions } from 'mongodb';
import mongoose, { Connection } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("Invalid MONGO_URI specified. Check the .env file.");
}

async function dbConnHandler() {
    /* @ts-ignore */
    const conn = mongoose.connect(MONGO_URI).then((conn) => {
        return conn;
    })

    return conn;
}

export default dbConnHandler;

// export default class DBConnHandler {
//     private connString: string | undefined;
//     private conn: Connection | null;

//     constructor() {
//         this.connString = MONGO_URI;
//         this.conn = null;
//     }

//     public async connect() {
//         try {
//             /* @ts-ignore */
//             this.conn = await mongoose.connect(this.connString).then((conn: Connection) => this.conn = conn);
//         } catch(e: any) {
//             throw new Error(e);
//         }
//     }

//     public async disconnect() {
//         try {
//             /* @ts-ignore */
//             this.conn = await mongoose.disconnect();
//         } catch(e: any) {
//             throw new Error(e);
//         }
//     }
// }