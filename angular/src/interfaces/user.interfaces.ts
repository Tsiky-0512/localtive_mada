export interface Owner {
  firstName: string,
  lastName: string,
  email: string,
  password?: string
}

export interface LoginData {
  email: string,
  password: string
}

export type LoginResult =Omit<Owner, "password"> & {token: string}

export interface LoginResponse {
  data: LoginResult
}
