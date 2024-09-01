import { create } from "zustand";

export type User = {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: string;
}


interface UserState {
    user?: User | null
    login: (user: User) => void
    logout: () => void
}

export const useUserStore = create<UserState>()((set) => ({
    user: null,
    login: (user: User) => set((state) => ({ ...state, user: user })),
    logout: () => set((state) => ({ ...state, user: null }))
}))


interface RegisterState {
    name: string
    lastname: string
    email: string
    password: string
    setName: (name: string) => void
    setLastname: (lastname: string) => void
    setEmail: (email: string) => void
    setPassword: (namepassword: string) => void
    reset: () => void
}

export const useRegisterStore = create<RegisterState>()((set) => ({
    name: '',
    lastname: '',
    email: '',
    password: '',
    reset: () => set((state) => ({ ...state, name: '', lastname: '', email: '', password: '' })),
    setName: (name) => set(state => ({ ...state, name: name })),
    setLastname: (lastname) => set(state => ({ ...state, lastname: lastname })),
    setEmail: (email) => set(state => ({ ...state, email: email })),
    setPassword: (password) => set(state => ({ ...state, password: password })),
}))