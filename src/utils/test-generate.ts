export function generateRandomString(length: number, chars?: string){
    let result = '';
    const characters = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generateRandomEmail(){
    return `${generateRandomString(50)}@test.com`
}

export function generateRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}