import create from 'zustand';
import { BASE_URL, token } from './index';


interface AuthenticationStore {
    todos: [];
    apiRegister: any;
    apiLogin: any;
    isLogin: boolean;
    setIsLogin: (status: boolean) => void;
    isRegister: boolean;
    setIsRegister: (status: boolean) => void;
}

type type_register = {
    birthday: string,
    email: string,
    gender: boolean,
    name: string,
    password: string,
    phone: string
}

type type_login = {
    email: string,
    password: string
}

const useAuthenticationStore = create<AuthenticationStore>((set) => ({
    todos: [],
    apiRegister: async (data: type_register) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
                body: JSON.stringify(data),
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },
    apiLogin: async (data: type_login) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
                body: JSON.stringify(data),
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },
    isLogin: false,
    setIsLogin: (status: boolean) => set({ isLogin: status }),
    isRegister: false,
    setIsRegister: (status: boolean) => set({ isRegister: status })
}));

export default useAuthenticationStore;
