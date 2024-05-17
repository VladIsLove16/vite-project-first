import { Button } from "react-bootstrap";
import { useAppDispatch } from "./Hooks";
import { increment,decrement } from "./CounterSlice";
import { login } from "./AuthSlice";
export function ReduxTest()
{
    console.log("redux test")
    const dispatch = useAppDispatch();
    return (
        <h1> <Button variant="primary" color="red" onClick={()=>{console.log("increment")
        dispatch(increment())}}>
                increment
        </Button>
        <Button variant="primary" color="blue" onClick={()=>{console.log("decrement")
        dispatch( decrement())
        console.log("new value:")
        }}>
                decrement
        </Button></h1>
       
    );
}

