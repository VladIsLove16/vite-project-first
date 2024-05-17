import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Card, NavLinkProps } from 'react-bootstrap';
import { SimpleButton } from './Components/SimpleButton';
import {ReduxTest} from './Components/ValueChanger'
import { useAppSelector } from './redux/Hooks';
import AuthWindow from './Components/AuthWindow';
import CardInCart from './Components/CardInCart';
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
  image?: HTMLImageElement
  rating : Raiting
}
export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing"
}
function App() {
  // type id  = number | string;
  // let myId: id = "adad";

  // let user : [string,number]
  // user = ["tom",18];

  // type userType  = [name:number, age:number,u:number|null];
  // type otherType  = {name:string, age:number,u:number | null};
  // let me : userType = [23,22,23];
  // let Notme : otherType = {name:"Name",age:24,u:23};
  
  // const [number,setNum] = useState<number>(4)

  //  let text = number > 10 ? ">10" : "<= 10"
  
  // return (
  //     <>
  //     <text>"number: " {number}</text>
  //      <Button variant="outline-danger" onClick={()=>setNum(number+2)}>{text}</Button>
  //   </>
  // )
    const [data,setData] = useState<Data[]>();
    const [user, setUser] = useState({name:"None", age: 0});
   function handleNameChange(event: { target: { value: any; }; }) { setUser({ name: event.target.value, age: user.age }); }
   function handleAgeChange(event: { target: { value: any; }; }) {   
      setUser({name: user.name, age: event.target.value});   
   }
   useEffect(() => {    
    document.title = `Привет ${user.name}`;
    console.log("useEffect")  
    fetch('https://fakestoreapi.com/products')
            .then((res)=> res.json())
            .then(json=>{
              console.log(json);
              setData(json)
            })
  },
  [user.age]);
 
  const listItems = data?.map((item: Data ) =>
        <h1>{item.price}</h1>
        );
       const CartItems = useAppSelector((state)=> state.cartSlice.Data)
      
      const CardsList =[];
        if(data!=undefined)
          {
              for (let i = 0; i < data.length; i++) {
                CardsList.push(CardInCart(data[i]));
            }
          }
    return (  
      <html>
        <head>
    <title>METANIT.COM</title>
    </head>
      <div>   
        <div>
        </div>
        {CardsList}
        {CartItems}
        {/* <>{s}</> */}
        {/* <ReduxTest></ReduxTest> */}
        {/* <AuthWindow></AuthWindow> */}
        
      </div>
      </html>
    );
    
  }
export default App
