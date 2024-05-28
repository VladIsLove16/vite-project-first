import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { login,AuthState, tryRegister } from '../redux/AuthSlice';
import { useState } from 'react';
import {User} from '../redux/AuthSlice'
import axios from 'axios'
function FormFloatingBasicExample() {
   const dispath = useAppDispatch();
   const logined = useAppSelector((state)=>state.auth.isLogin);
   const [user, setUser] = useState<User>({login : "",password: ""});
    const a= user.login;
   function handleLoginChange(event: { target: { value: any; }; }) { setUser({ login: event.target.value, password: user.password }); }
   function handlePasswordChange(event: { target: { value: any; }; }) {   
      setUser({login: user.login, password: event.target.value});   
   }
   if(logined==false)
  {return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" onChange={handleLoginChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
      </FloatingLabel>
      <Button variant="primary" onClick={()=>{
        console.log("clicked register with " + ( user.login) + ( user.password) )
        dispath(tryRegister(user))
        }}>
      register
       </Button>
      <Button variant="primary" onClick={()=>{
         console.log("clicked login with " + ( user.login) + ( user.password) )

        dispath(login(user))
      }
    }>
      login
       </Button>
       
    </>
  );
}
else return (
  <h1>
  <h2>
    Login: {user.login}
  </h2>
  <h2>
    Pass: {user.password}
  </h2>
  </h1>
)
}
export default FormFloatingBasicExample;