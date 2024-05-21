import { PayloadAction, createSlice} from '@reduxjs/toolkit'
export interface UserList {
  users : User[]
}
export interface AuthState {
    users : User[]
    user : User,
    isLogin : boolean
    aToken : Token
    rToken : Token
  }
  export interface Token{
    isPresent : boolean
    token: string
  }
  export interface User{
    login : string
    password : string
  }
  // Define the initial state using that type
  const initialState: AuthState = {
    users : [],
    user : {login : "",password: ""},
    isLogin : false,
    aToken : {isPresent:false,token:""},
    rToken : {isPresent:false,token:""}
  }
  
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state,action:PayloadAction<User>) => {
        const currentUser  = action.payload;
        let logined : boolean  = false;
        state.users.forEach(function(entry) {
          if(entry.login==currentUser.login && entry.password==currentUser.password )
            logined=true;
        });
        if(logined) state.isLogin=true;
      },
      tryRegister: (state, action:PayloadAction<User>) => {
        
        const currentUser  = action.payload;
        let UserExist : boolean  = false;
        state.users.forEach(function(entry) {
          if(entry.login==currentUser.login)
            {UserExist=true;}
        });
        if(UserExist==false)
        {
          state.users.push(currentUser);
        }
      }
    }
  })
  export const { login, tryRegister} = authSlice.actions
 

 