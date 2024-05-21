import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { login,AuthState } from '../redux/AuthSlice';
import { useState } from 'react';

function FormFloatingBasicExample() {
   const dispath = useAppDispatch();
   const select1 = useAppSelector((state)=>state.auth.isLogin);
   const [user, setUser] = useState({name:"None", age: 0});

   function handleNameChange(event: { target: { value: any; }; }) { setUser({ name: event.target.value, age: user.age }); }
   function handleAgeChange(event: { target: { value: any; }; }) {   
      setUser({name: user.name, age: event.target.value});   
   }
   if(select1==false)
  {return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <Button variant="primary" onClick={()=>dispath(login( {login : "a",password : "a"}))}>
      login
       </Button>
    </>
  );
}
else return (
  <h1>
    Login: {}
  </h1>
)
}
export default FormFloatingBasicExample;