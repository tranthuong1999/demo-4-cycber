import create from 'zustand';
import { BASE_URL, token } from './index';

type type_book_room = {
    maNguoiDung: number;
    maPhong: string;
    ngayDen: string;
    ngayDi: string;
    soLuongKhach: number
}

interface ListRoomStore {
    listRoomByLocation: [];
    apiFetchRoomByCodeLocation: any;
    listCommentByRoom: [];
    apiFetchListCommentbyRoom: any;
    detailRoom: {
        tenPhong?: string;
        hinhAnh?: string;
        banLa?: boolean;
        banUi?: boolean;
        bep?: boolean;
        dieuHoa?: boolean;
        mayGiat?: boolean;
        doXe?: boolean;
        giaTien?: number;
        giuong?: number;
        maViTri?: number;
        khach?: number;
        phongNgu?: number;
        phongTam?: number;
        tivi?: boolean;
        wifi?: boolean;
    };
    apiFetchDetailRoom?: any;
    apiRegisterRoom?: any;
    apiGetRoomByUser?: any;
    apiGetInforUser?: any;
    apiGetDetailRoom?: any;

}


const useListRoomStore = create<ListRoomStore>((set) => ({
    listRoomByLocation: [],
    listCommentByRoom: [],
    detailRoom: {},
    apiFetchRoomByCodeLocation: async (codeLocation: number) => {
        try {
            const response = await fetch(`${BASE_URL}/phong-thue/lay-phong-theo-vi-tri?maViTri=${codeLocation}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            set({ listRoomByLocation: result.content })
            return result;
        }
        catch (error) {
            return error;
        }
    },

    apiFetchListCommentbyRoom: async (codeRoom: number) => {
        try {
            const response = await fetch(`${BASE_URL}/binh-luan/lay-binh-luan-theo-phong/${codeRoom}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            set({ listCommentByRoom: result.content })
            return result;
        }
        catch (error) {
            return error;
        }
    },

    apiFetchDetailRoom: async (codeRoom: number) => {
        try {
            const response = await fetch(`${BASE_URL}/phong-thue/${codeRoom}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            set({ detailRoom: result.content })
            return result;
        }
        catch (error) {
            return error;
        }
    },

    apiRegisterRoom: async (bookRoom: type_book_room) => {
        try {
            const response = await fetch(`${BASE_URL}/dat-phong`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
                body: JSON.stringify(bookRoom)
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },

    apiGetRoomByUser: async (codeUser: number) => {
        try {
            const response = await fetch(`${BASE_URL}/dat-phong/lay-theo-nguoi-dung/${codeUser}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },

    apiGetInforUser: async (codeUser: number) => {
        try {
            const response = await fetch(`${BASE_URL}/users/${codeUser}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },
    apiGetDetailRoom: async (roomNumber: number) => {
        try {
            const response = await fetch(`${BASE_URL}/phong-thue/${roomNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tokencybersoft': `${token}`,
                },
            });
            const result: any = await response.json();
            return result;
        }
        catch (error) {
            return error;
        }
    },

}));

export default useListRoomStore;
