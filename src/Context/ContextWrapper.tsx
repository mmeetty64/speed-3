import React, { FC, useState, createContext } from 'react'
import { IProps, IUser, IValues } from './Context.interface';


export const Context = createContext({} as IValues)

export const ContextWrapper: FC<IProps> = ({children}) => {
    const initialState = {
        login: '',
        balance: 0,
        wallet: '',
        role: 0,
        inWhiteList: false,
        seedToken: 0,
        privToken: 0,
        publToken: 0
    }

    const [user, setUser] = useState(initialState);
    const [phase, setPhase] = useState<number>(1)

    const getUser = (user: IUser) =>{
        setUser(user);
    }

    const getPhase = (phase: number) => {
        setPhase(phase)
    }

    const logout = () =>{
        setUser(initialState)
    }

    const values = {
        user,
        getUser,
        logout,
        phase,
        getPhase
    }

  return (
    <Context.Provider value={values}>{children}</Context.Provider>
  )
}
