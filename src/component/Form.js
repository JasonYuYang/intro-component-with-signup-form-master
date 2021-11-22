import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Input } from './UI/Input';
import { Button } from './UI/Button';

import { validator } from '../utils/validator';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: white;
  border-radius: 10px;
  max-width: 68.75rem;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto 5rem auto;
  p {
    color: hsl(246, 25%, 77%);
    font-size: 1.375rem;
    text-align: center;
    a {
      color: hsl(0, 100%, 74%);
      font-weight: 700;
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 800px) {
    width: 100%;
    margin: 0 0 5rem 0;
  }
`;

export const Form = () => {
  const [firstName, setFirstName] = useState({
    id: 'first-name',
    examField: 'First Name',
    type: 'text',
    state: 'PENDING',
    value: '',
  });
  const [lastName, setLastName] = useState({
    id: 'last-name',
    examField: 'Last Name',
    type: 'text',
    state: 'PENDING',
    value: '',
  });
  const [email, setEmail] = useState({
    id: 'email-address',
    examField: 'Email Address',
    type: 'text',
    state: 'PENDING',
    value: '',
  });
  const [password, setPassword] = useState({
    id: 'password',
    examField: 'Password',
    type: 'password',
    state: 'PENDING',
    value: '',
  });

  const fields = [
    [firstName, setFirstName],
    [lastName, setLastName],
    [email, setEmail],
    [password, setPassword],
  ];

  const onSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    fields.map(field => {
      const result = validator(data[field[0].id], field[0].examField);
      field[1](pre => {
        return { ...pre, ...result };
      });
    });
  };

  return (
    <Fragment>
      <FormWrapper onSubmit={onSubmit}>
        <Input field={firstName} setter={setFirstName} />
        <Input field={lastName} setter={setLastName} />
        <Input field={email} setter={setEmail} />
        <Input field={password} setter={setPassword} />

        <Button isFormButton>Claim your free trial</Button>
        <p>
          By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a>
        </p>
      </FormWrapper>
    </Fragment>
  );
};
