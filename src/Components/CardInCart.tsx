import Button from 'react-bootstrap/Button';
import { useAppDispatch } from "../redux/Hooks";
import Card from 'react-bootstrap/Card';
import { Data } from '../App';
import {addToKart} from '../redux/CartSlice';
// export interface Data{
//   id: number
//   title: string
//   price: string 
//   description : string
//   category : Category
//   // image?: HTMLImageElement
//   // rating : Raiting
// }
// import {  } from '../redux/CartSlice';
function CardInCart(cardInfo : Data | undefined) {
  const dispatch = useAppDispatch();
  if(cardInfo===undefined)return <></>
  else  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardInfo.title}</Card.Title>
        <Card.Text>
          <h1>
            Price: {cardInfo.price}
          </h1>
          <h1>
            Description: {cardInfo.description}
          </h1>

        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(addToKart(cardInfo))}>Добавить в корзину</Button>
      </Card.Body>
    </Card>
  );
}
export default CardInCart;
