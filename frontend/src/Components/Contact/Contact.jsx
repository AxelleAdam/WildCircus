import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "./Contact.css";
import Upload from "./UploadFile.jsx";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      file: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  sendMail = () => {
    axios.post(`http://localhost:8088/contact`, {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      file: this.state.file
    });
  };
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="contactButton" onClick={() => this.toggle()}>
          Contact Us
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder="put your name here"
                  onChange={e => this.onInputChange(e)}
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="put your email here"
                  onChange={e => this.onInputChange(e)}
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={e => this.onInputChange(e)}
                  value={this.state.subject}
                >
                  <option>Why do you want to contact us ?</option>
                  <option>I want a payback</option>
                  <option>I had a problem with the Circus</option>
                  <option>I've lost something</option>
                  <option>Else</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="text">You can explain us everything</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="text"
                  placeholder="Explain everything here"
                  onChange={e => this.onInputChange(e)}
                  value={this.state.message}
                />
              </FormGroup>
              <FormGroup>
                <Upload
                  onChange={e => this.onInputChange(e)}
                  value={this.state.file}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => this.sendMail()}>Send</Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Contact;
