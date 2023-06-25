import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface SectionBlockProps {
  title: string;
  content?: ReactNode;
}

const SectionBlock = ({ title, content }: SectionBlockProps) => {
  return (
    <Block>
      <Mask>{title}</Mask>
      <Content>{content}</Content>
    </Block>
  );
};

export default SectionBlock;

const Block = styled.div`
  position: relative;

  min-width: 150px;
  min-height: 60px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Mask = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;

  padding-left: 4px;
  padding-right: 24px;

  font-size: 11px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: inherit;
`;

const Content = styled.div`
  margin-top: 13px;

  width: 100%;
  height: 100%;
  min-width: inherit;
  min-height: inherit;

  box-shadow: 0px 0px 0px 1px #808080 inset, 0px 1px 0px 0px #ffffff,
    1px 1px 0px 1px #ffffff inset, 1px 1px 0px 0px #ffffff;

  padding: 24px;
`;
