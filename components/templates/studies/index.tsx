import styled from '@emotion/styled';
import Link from 'next/link';

import x from './index.styled';

const StudiesTemplate = () => {
  return (
    <x.Template>
      <Menu>
        <Link href='/studies/typescript/3'>Chapter 3. 유니언과 리터럴</Link>
      </Menu>
    </x.Template>
  );
};

export default StudiesTemplate;

const Menu = styled.div`
  width: 100%;
  height: 40px;
`;
