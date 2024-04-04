import React, { useState } from 'react';
import { Form, Button, Panel, IconButton, Stack, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
// import { UserLoginDto } from 'd:/rsuite-admin-template/src/data/MyApi';
// import { Api } from "d:/rsuite-admin-template/src/data/MyApi"

import Brand from '@/components/Brand';
// const api = new Api();
// api.baseUrl = 'https://pos.echesconsultancy.com:10000';

const SignUp = () => {
  // Ummm...bro, your code aint wrong, but your implementation off
  // const [username, SetUsername] = useState('cashier');
  // const [password, SetPassword] = useState('cashier@123');

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await api.auth.loginCreate({
  //     userName: username,
  //     password: password,
  //     tenant: 'ClayCaffeTest'
  //   });
  //   console.log(token);
  // };

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

        <Form fluid onSubmit={handleSubmit}>
          <Form.Group>
            <Form.ControlLabel>Username or email address</Form.ControlLabel>
            <Form.Control
              name="name"
              value={username}
              onChange={e => SetUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <span>Password</span>
              <a style={{ float: 'right' }}>Forgot password?</a>
            </Form.ControlLabel>
            <Form.Control
              name="name"
              type="password"
              value={password}
              onChange={e => SetPassword(e.target.value)}
            />
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
