import { changeLocalStorage, createLocalStorage, createLoginLocalStorage, getAllLocalStorage, getLoginLocalStorage } from "./storage"

const dioBank = {
    login: false
}

const loginMock = {
    email: 'yuri@email.com',
    name: 'Yuri Bigon',
    balance: 2000,
    id: '1'
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve retornar o objeto no localStorage com a chave login diobank', () => {
        const mockGetLoginItem = jest.spyOn(Storage.prototype, 'getItem')
        getLoginLocalStorage()
        expect(mockGetLoginItem).toHaveBeenCalledWith('login diobank')
    })

    it('Deve criar o objeto de login no localStorage', () => {
        createLoginLocalStorage(loginMock)
        expect(mockSetItem).toHaveBeenCalledWith('login diobank', JSON.stringify(loginMock))
    })
})