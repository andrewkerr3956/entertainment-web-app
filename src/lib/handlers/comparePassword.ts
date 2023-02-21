import bcrypt from 'bcrypt';

export default function comparePassword(password: string, passwordToCompare: string) {
    return bcrypt.compareSync(password, passwordToCompare);
}