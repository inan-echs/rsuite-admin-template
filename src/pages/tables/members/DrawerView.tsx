import React from 'react';
import { useState } from 'react';
import {
  Drawer,
  DrawerProps,
  Button,
  Form,
  Stack,
  InputNumber,
  InputGroup,
  Slider,
  Rate
} from 'rsuite';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  street: string;
  rating: number;
  skill: number;
  income: number;
}

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  const [formValue, setFormValue] = useState<FormValues>({
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    street: '',
    rating: 0,
    skill: 0,
    income: 0
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://pos.echesconsultancy.com:10000/MasterData/AddItem', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('success', data);
        // Handle success, e.g., close the drawer or show a success message
      })
      .catch(error => {
        console.error('Error', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new product</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid onSubmit={handleSubmit} formValue={formValue} onChange={setFormValue}>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control name="firstname" style={{ width: 200 }} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control name="lastname" style={{ width: 200 }} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>City</Form.ControlLabel>
            <Form.Control name="city" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Street</Form.ControlLabel>
            <Form.Control name="street" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Rating</Form.ControlLabel>
            <Form.Control name="rating" accepter={Rate} />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Skill Proficiency</Form.ControlLabel>
            <Form.Control name="skill" accepter={Slider} progress />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Income</Form.ControlLabel>
            <InputGroup style={{ width: '100%' }}>
              <InputGroup.Addon>$</InputGroup.Addon>
              <Form.Control name="income" accepter={InputNumber} style={{ width: '100%' }} />
            </InputGroup>
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
