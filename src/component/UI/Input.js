import styled from 'styled-components';
import checkMark from '../../images/icon-checkmark.svg';
import errorMark from '../../images/icon-error.svg';

import useDebounce from '../../Hooks/useDebounce';
import { validator } from '../../utils/validator';

const InputStyle = styled.input`
  width: 100%;
  position: relative;
  padding-left: 2rem;
  border: 2px solid
    ${p => (p.state === 'ERROR' ? 'hsl(0, 100%, 74%)' : p.state === 'SUCCESS' ? 'hsl(154, 59%, 51%)' : '#dedede')};
  color: #2b2a30;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.8rem;
  outline: none;
  transition: all 0.3s;
  height: 7rem;
  &:focus {
    border-color: hsl(248, 32%, 49%);
  }

  &::placeholder {
    font-weight: 500;
  }
  + label {
    opacity: ${p => (p.state === 'ERROR' ? '1' : '0')};
    font-size: 1rem;
    font-weight: 600;
    min-height: 3rem;
    padding: 0 2rem;
    color: hsl(0, 100%, 74%);
    transition: all 0.3s;
  }
`;

const ValidIcon = styled.div`
  position: relative;
  z-index: 1;
  &::before {
    content: url(${errorMark});
    position: absolute;
    right: 3rem;
    top: 1.875rem;
    opacity: ${p => (p.state === 'ERROR' ? '1' : '0')};
    transition: all 0.3s;
  }
  &::after {
    content: url(${checkMark});
    position: absolute;
    right: 3rem;
    top: 1.875rem;
    opacity: ${p => (p.state === 'SUCCESS' ? '1' : '0')};
    transition: all 0.3s;
  }
`;

export const Input = ({ field, setter }) => {
  const result = useDebounce(() => {
    setter(pre => {
      const validResult = validator(field.value, field.examField);
      return { ...pre, errMsg: validResult.errMsg, state: validResult.state };
    });
  }, 500);

  return (
    <>
      <ValidIcon state={field.state} />
      <InputStyle
        id={field.id}
        name={field.id}
        type={field.type}
        value={field.value}
        onChange={e => {
          setter(pre => {
            return { ...pre, value: e.target.value };
          });
          result();
        }}
        placeholder={field.examField}
        state={field.state}
      />{' '}
      <label htmlFor={field.examField}>{field.state === 'ERROR' ? field.errMsg : ''}</label>
    </>
  );
};
