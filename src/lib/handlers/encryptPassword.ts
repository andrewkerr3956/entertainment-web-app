import bcrypt from 'bcrypt';

export default function encryptPassword(password: string) {
    if(password.length > 0) {
        const salts = bcrypt.genSaltSync(10);
        const encrypted = bcrypt.hashSync(password, salts);
        return encrypted;
    } else {
        return null;
    }
}
