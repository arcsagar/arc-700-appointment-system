//const keys 

export const loginKey = 'loginToken';


export const storeLocal = (keyName:string, keyValue:string) => {
    localStorage.setItem(keyName, keyValue)
};

export const getLocal = (keyName:string): string => {
    const token = localStorage.getItem(keyName);

    if(token) {
        return token
    }else {
        return ''
    }
}