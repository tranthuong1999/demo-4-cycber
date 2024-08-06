import create from 'zustand';


const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBDeWJlclNvZnQiLCJIZXRIYW5TdHJpbmciOiIwNC8xMC8yMDM0IiwiSGV0SGFuVGltZSI6IjIwNDM1MzI4MDAwMDAiLCJuYmYiOjE5NTY1MDI4MDAsImV4cCI6MjA0MzY4MDQwMH0.z_jMW7ae1X1gIgL_ePE8et6ts5HNKNoWcpBd8jj-b_A"

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
