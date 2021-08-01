import emailjs from "emailjs-com";
import React from 'react';
import Card from "../../components/UI/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Form,Modal} from 'react-bootstrap';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_766po4a', 'template_19p77pb', e.target, 'user_ea9X8Xhsr0E2gsKbNk1Ns')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div >
            <Card>
            <div className="container">
            {/* <form onSubmit={sendEmail}>
                    <div className="contact">
                        <div className="div">
                            <input type="text" className="form" placeholder="Name" name="name"/>
                           
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <br/>
                        <div className="submit">
                           
                            <Button  type="submit"variant="success">Success</Button>{' '}
                        </div>
                    </div>
                </form>
                 */}
                 <Modal.Dialog>
                 <Modal.Header >
    <Modal.Title>Contact Us</Modal.Title>
  </Modal.Header>
  <Modal.Body>
                 <Form  onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"   placeholder="Enter your email" />
    <br/>
    <Form.Label>Message</Form.Label>
    <div className="message">
     <textarea className="form-control" id="" cols="50" rows="4" placeholder="Enter your message" name="message"/>
     </div>
 
    <Form.Text className="text-muted">
      We'll never share your information with anyone else.
    </Form.Text>
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Are you sure you want submit?" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Modal.Body>

</Modal.Dialog>
            </div>
            </Card>
        </div>
    )
}