import { createSlice,PayloadAction } from '@reduxjs/toolkit'
 import { counterSlice } from './CounterSlice'
import { defaultSerializeQueryArgs } from '@reduxjs/toolkit/query'
export interface Raiting{
  rate: number
  count : number
}
export interface Data{
  id: number
  title: string
  price: string 
  description : string
  category : Category
  // image?: HTMLImageElement
  // rating : Raiting
}
export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing"
}
export interface CartData {
  data: Data
  count : number
}
export interface Cart {
  Data : CartData[]
}
  // Define the initial state using that type
  const initialState: Cart = {
    Data : []
  }
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToKart: (state, action:PayloadAction<Data>)=> {
      if(state.Data==undefined)
      {
        state.Data=[];
        state.Data.push({data: action.payload,count:1})
      }
      else if(state.Data[0]==undefined)
      {
        state.Data[0]={data: action.payload,count:1};
      }
      else if(state.Data[0].count==0)
      {

        state.Data.push({data: action.payload,count:1})
      }
      else{
        state.Data[0].count++
      }
     
      console.log("addedToKart")
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { addToKart } = cartSlice.actions

export default cartSlice.reducer