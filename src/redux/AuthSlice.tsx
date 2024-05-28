import { PayloadAction, createSlice} from '@reduxjs/toolkit'
import { Cart} from '../redux/CartSlice'
import { act, useEffect, useState } from 'react'
import axios from 'axios'
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
  export interface UserData{
    User : User
    Data : Cart
  }
  // Define the initial state using that type
  const initialState: AuthState = {
    users : [],
    user : {login : "",password: ""},
    isLogin : false,
    aToken : {isPresent:false,token:""},
    rToken : {isPresent:false,token:""}
  }
export const authSlice = createSlice(
  {
    name: 'auth',
    initialState,
    reducers: {
      tryRegister: (state, action:PayloadAction<User>) => {
        let regUser = action.payload;
        const login = regUser.login;
        const password = regUser.password;
        axios.post('http://localhost:5172/register', {login,password})
        .then(res => console.log("result : "+ (res.data)))
        .catch (err => console.log("catched error:"+(err.data)))
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
      },
      login: (state,action:PayloadAction<User>) => {
        let currentUser= action.payload;
        console.log("login user: "+ (currentUser.login))
        const login = currentUser.login;
        const password = currentUser.password;
        axios.post('http://localhost:5172/login', {login,password})
        .then(res =>{
          console.log("result : "+ (res.status));
          if(res.status==200){
            console.log("pre state");
              state.user = {login: currentUser.login,password: currentUser.password};
            
            console.log("after state");
            }
            else {
            console.log("islogin is  NOT true");}
          
        })
        // .then(res => ()=>{
        //   console.log('ssdfsdfsdf')
        //   // if(res.status==200)
        //   {state.isLogin=true;
        //   console.log("U have logined with "+ (login) +" : " + (password) )
        // }
        // })
        .catch (err => console.log("error : "+(err.text)))
        // console.log((results.status))
        
        // let logined : boolean  = false;
        // const [users,setUsers] = useState([])
        // if(logined) state.isLogin=true;
      },
     
      setUser: (state, action:PayloadAction<User>) => {
        state.user  = action.payload
      } 
  }})
  export const { login, tryRegister,setUser} = authSlice.actions
 

 