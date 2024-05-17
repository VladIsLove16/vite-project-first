import { createSlice,PayloadAction } from '@reduxjs/toolkit'
export interface AuthState {
    isLogin : boolean
    aToken : Token
    rToken : Token
  }
  
  // Define the initial state using that type
  const initialState: AuthState = {
    isLogin : false,
    aToken : {isPresent:false,token:""},
    rToken : {isPresent:false,token:""}
  }
  export interface Token{
    isPresent : boolean
    token: string
  }
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state) => {
        state.isLogin = true;
        console.log("u have logined");
        
      }
    }
  })
  export const { login} = authSlice.actions
