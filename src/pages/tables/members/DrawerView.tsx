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
  useToaster,
  Message,
  Notification,
  Checkbox
} from 'rsuite';

interface FormValues {
  ItemCode: string;
  ItemName: string;
  ItemDesc: string;
  GSTInclusivePrice: boolean;
  Price: number;
}

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  const [formValue, setFormValue] = useState<FormValues>({
    ItemCode: '',
    ItemName: '',
    ItemDesc: '',
    GSTInclusivePrice: true,
    Price: 0.0
  });

  const toaster = useToaster();

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
        toaster.push(<Notification type="success">Item added successfully</Notification>);
        console.log('success');
        onClose();
      })
      .catch(error => {
        console.error('Error', error);
        toaster.push(
          <Notification type="error">There was an error during the process</Notification>
        );
        console.log('failed');
      });
  };

  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new product</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={handleSubmit} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      {/* onSubmit={handleSubmit} */}

      <Drawer.Body>
        <Form fluid onSubmit={handleSubmit} formValue={formValue} onChange={setFormValue}>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>Item Code</Form.ControlLabel>
              <Form.Control name="ItemCode" style={{ width: 200 }} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Item Name</Form.ControlLabel>
              <Form.Control name="ItemName" style={{ width: 200 }} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>ItemDesc</Form.ControlLabel>
            <Form.Control name="ItemDesc" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>GST Inclusive Price</Form.ControlLabel>
            <Checkbox
              name="GSTInclusivePrice"
              checked={formValue.GSTInclusivePrice}
              onChange={value => setFormValue({ ...formValue, GSTInclusivePrice: value })}
            >
              GST Inclusive
            </Checkbox>
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Price</Form.ControlLabel>
            <InputGroup style={{ width: '100%' }}>
              <InputGroup.Addon>$</InputGroup.Addon>
              <Form.Control name="Price" accepter={InputNumber} style={{ width: '100%' }} />
            </InputGroup>
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
