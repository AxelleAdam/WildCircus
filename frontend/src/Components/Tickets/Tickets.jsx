import React from "react";
import Counter from "./Counter";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button
} from "reactstrap";

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      ticket: ""
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <h2 className="titleTicket">Buying Tickets</h2>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName">First and Last Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder="Write your name here"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Write your email here"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                  placeholder="1234 Main St"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Counter
          onChange={e => this.onInputChange(e)}
          value={this.state.name}
        />

        <Button className="ticketsButton">Send</Button>
      </Container>
    );
  }
}

export default Tickets;
