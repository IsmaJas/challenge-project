import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//  uncontrolled input used to prevent unnecessary rerendering
//  useState is not used because it causes rerendering every time user types a letter
const MessageInput = ({ addMessage }) => {
  const ref = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    addMessage(ref.current.value);
    //clear input value after adding message
    ref.current.value = '';
  };
  return (
    <Form onSubmit={submit} className="d-flex">
      <Form.Group controlId="formBasicEmail" className="w-100">
        <Form.Control
          ref={ref}
          type="text"
          name={'message'}
          placeholder="Enter message"
          required={true}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default MessageInput;
