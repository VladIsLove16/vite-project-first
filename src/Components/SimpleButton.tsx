import { Button } from "react-bootstrap";
export function SimpleButton()
{
    console.log("TestComponent")
    return (
        <Button variant="primary" onClick={()=>console.log("Clicked")}>

        </Button>
    );
}