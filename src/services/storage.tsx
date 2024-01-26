interface IDIoBank {
    login: boolean;
}

interface ILogin {
    email: string,
    name: string,
    balance: number,
    id: string
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

//LOGIN

export const getLoginLocalStorage = (): string | null  => {
    return localStorage.getItem('login diobank')
}

export const createLoginLocalStorage = (info: ILogin): void => {
    localStorage.setItem('login diobank', JSON.stringify(info))
}

export const clearLoginLocalStorage = (): void  => {
    localStorage.removeItem('login diobank')
}