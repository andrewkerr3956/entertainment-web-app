/**
 * 
 * @param formData 
 * @returns true if successful, false if unsuccessful
 */
export default async function handleRegisterData(formData: HTMLFormElement) {
    const data: any = Object.fromEntries(new FormData(formData));    
    console.log({ ...data });
    const insertData = await fetch(`${process.env.DOMAIN}/api/auth/user`, {
        method: "POST",
        headers: {
            "Content-Type": "form-data"
        },
        body: JSON.stringify(data)
    });
    const parseData = await insertData.json();
    if(parseData.success) {
        return true;
    } else {
        return false;
    }   
}
