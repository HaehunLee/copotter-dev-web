import styled from '@emotion/styled';

const Textarea = styled.textarea`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 200px;
  min-height: 50px;

  background: #ffffff;

  /* Button Framing */
  box-shadow: -1px -1px 0px 0px #ffffff inset, 1px 1px 0px 0px #808080 inset,
    -2px -2px 0px 0px #dfdfdf inset, 2px 2px 0px 0px #242424 inset;
  outline: 0;
  border: 0;
  resize: none;

  padding: 4px;
  font-size: 11px;
  line-height: 12px;
`;

export default Textarea;
