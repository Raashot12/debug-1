import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import styled from '@emotion/styled';
import appTheme from '../appTheme';

type AnimatedTextInputProps = {
  type?: string;
  value?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
  accept?: string;
  id?: string;
  min?: string;
  list?: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  width?: string;
  disable?: boolean | any;
};
const CustomInputOnboarding = ({
  type,
  name,
  required,
  placeholder,
  defaultValue,
  value,
  autoComplete,
  id,
  list,
  min,
  onChange,
  onBlur,
  width,
  disable,
}: AnimatedTextInputProps) => {
  return (
    <>
      <Input
        style={{
          width: `${type === 'textarea' && '100%'}`,
          height: `${type === 'textarea' && '100px'}`,
        }}
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        id={id}
        min={min}
        list={list}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disable}
      />
    </>
  );
};

export default CustomInputOnboarding;

const Input = styled.input`
  width: 100%;
  color: #595f6e;
  padding: 0.8rem 0.25rem 0.8rem 1rem;
  border: none;
  outline: none;
  border: 1px solid #dfe2e9;
  font-family: General Sans, sans-serif;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  font-size: ${appTheme.SIZES.smalltext};
  &::placeholder {
    color: ${appTheme.COLORS.grey5};
    opacity: 1;
    font-size: ${appTheme.SIZES.smalltext};
    font-weight: ${appTheme.WEIGHT.small2};
  }
  &:disabled {
    background-color: white;
    &::placeholder {
      color: ${appTheme.COLORS.grey5};
    }
  }
  &:focus {
    box-shadow: none;
    border: 1px solid ${appTheme.COLORS.primary};
  }
`;
