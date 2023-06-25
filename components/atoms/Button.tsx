import styled from '@emotion/styled';
import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default';
}

const Button = (props: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { children, ...buttonProps } = props;
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    const buttonRefValue = buttonRef.current;

    if (buttonRefValue) {
      buttonRefValue.addEventListener('focus', handleFocus);
      buttonRefValue.addEventListener('blur', handleBlur);
    }

    return () => {
      if (buttonRefValue) {
        buttonRefValue.removeEventListener('focus', handleFocus);
        buttonRefValue.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return (
    <Wrapper ref={buttonRef} {...buttonProps}>
      <Framing>{children}</Framing>
      {focus && <Focused />}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 25px;

  font-size: 11px;
  line-height: 12px;

  // Inactive
  :disabled {
    color: #808080;
    text-shadow: 1px 1px 0px #fff;
  }

  // Pressed
  :active {
    border: 1px solid black;
  }

  // Focused
  :focus {
    border: 1px solid black;
  }
`;

const Framing = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: #bfbfbf;

  /* Button Framing */
  box-shadow: -1px -1px 0px 0px #242424 inset, 1px 1px 0px 0px #ffffff inset,
    -2px -2px 0px 0px #808080 inset, 2px 2px 0px 0px #dbdbdb inset;
`;

const Focused = styled.div`
  position: absolute;

  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);

  border: 1px dotted black;
`;

Button.defaultProps = {
  variant: 'default',
};
