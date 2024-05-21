import { Button } from "react-bootstrap";
import { useAppDispatch } from "../redux/Hooks";
import { decrement,incrementByAmount } from "../redux/CounterSlice";
export function ReduxTest()
{
    console.log("redux test")
    const dispatch = useAppDispatch();
    return (
        <h1> <Button variant="primary" color="red" onClick={()=>{console.log("increment by 2")
        dispatch(incrementByAmount(2))}}>
                increment by 2
        </Button>
        <Button variant="primary" color="blue" onClick={()=>{console.log("decrement")
        dispatch( decrement())
        console.log("new value:")
        }}>
                decrement
        </Button></h1>
       
    );
}

