export interface section {
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string,
    size: string
}

export interface dir {
    section: Array<section>
}

export interface item {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export interface collection {
    id: number,
    title: string,
    routeName: string,
    items: Array<item>
}


export interface signIn {
    email: string,
    password: string
}

export interface UserData {
    currentUser: {}
}

export interface SignUpData {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface IAction {
    type: string,
    payload: any
}