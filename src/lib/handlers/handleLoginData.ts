/**
 * 
 * @param formData 
 * @returns true if successful, false if unsuccessful
 */
export default async function handleLoginData(formData: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(formData));

    const checkLogin = await fetch(`${process.env.DOMAIN}/api/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "form-data",
        },
        body: JSON.stringify(data)
    });
    const parseData = await checkLogin.json();
    if(parseData.success) {
        return true;
    } else {
        return false;
    }
}