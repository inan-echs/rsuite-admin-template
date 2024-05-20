import React, { useState } from 'react';
import { Form, Button, Panel, IconButton, Stack, Divider, Notification, useToaster } from 'rsuite';
import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';

interface Login {
  userName: string;
  password: string;
  tenant: string;
}

const SignUp = () => {
  const [details, setDetails] = useState<Login>({
    userName: '',
    password: '',
    tenant: 'posdemo'
  });

  const toaster = useToaster();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://pos.echesconsultancy.com:10000/Auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error');
        }
        return response.json();
      })
      .then(data => {
        console.log('success', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        toaster.push(<Notification type="success">You have been signed in</Notification>);
        console.log('success');
      })
      .catch(error => {
        console.error('Error', error);
        toaster.push(<Notification type="error">Auth fail</Notification>);
        console.log('failed');
      });
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh'
      }}
    >
      <Brand style={{ marginBottom: 10 }} />

      <Panel bordered style={{ background: '#fff', width: 400 }} header={<h3>Sign In</h3>}>
        <p style={{ marginBottom: 10 }}>
          <span className="text-muted">New Here? </span>{' '}
          <Link to="/sign-up"> Create an Account</Link>
        </p>

        <Form fluid onSubmit={handleSubmit} formValue={details} onChange={setDetails}>
          <Form.Group>
            <Form.ControlLabel>Username or email address</Form.ControlLabel>
            <Form.Control name="userName" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <span>Password</span>
              <a style={{ float: 'right' }}>Forgot password?</a>
            </Form.ControlLabel>
            <Form.Control name="password" type="password" />
          </Form.Group>
          <Form.Group>
            <Stack spacing={6} divider={<Divider vertical />}>
              <Button appearance="primary" onClick={handleSubmit}>
                Sign in
              </Button>
              <Stack spacing={6}></Stack>
            </Stack>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
};

export default SignUp;
