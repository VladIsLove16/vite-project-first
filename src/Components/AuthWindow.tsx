import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { SimpleButton } from './SimpleButton';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../redux/Hooks';
import { login } from '../redux/AuthSlice';

function FormFloatingBasicExample() {
   const dispath = useAppDispatch();
  return (
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

      <Button variant="primary" onClick={()=>dispath(login())}>
login
       </Button>
    </>
  );
}

export default FormFloatingBasicExample;