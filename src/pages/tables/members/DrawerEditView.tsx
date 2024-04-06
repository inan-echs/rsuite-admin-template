import React from 'react';
import { useState } from 'react';
import { Drawer, DrawerProps, Button, Form, Stack, InputNumber, InputGroup } from 'rsuite';

interface FormValues {
  ItemCode: string;
  ItemName: string;
  ItemDesc: string;
  GSTInclusivePrice: boolean;
  Price: number;
}

//basically make this take a FormValues as input and have those values be shown
//once
const DrawerEditView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  const [formValue, setFormValue] = useState<FormValues>({
    ItemCode: '',
    ItemName: '',
    ItemDesc: '',
    GSTInclusivePrice: true,
    Price: 0.0
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //change to edit
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
        onClose;
      })
      .catch(error => {
        console.error('Error', error);
        // Handle error, e.g., show an error message
        //show error via https://rsuitejs.com/components/notification/
      });
  };

  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Edit product</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Save
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

          {/* add checkbox here for GSTInclusivePrice
          https://rsuitejs.com/components/checkbox/ */}

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

export default DrawerEditView;
