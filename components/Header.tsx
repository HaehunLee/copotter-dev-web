import styled from '@emotion/styled';
import Link from 'next/link';

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href='/'>Home</Link>
        {/* <a href="/api/studies">Users API | </a> */}
        <Link href='/studies/typescript'>Typescript</Link>
      </Nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;

  align-items: center;
  padding: 12px 24px;
  height: 60px;
  border-bottom: 1px solid black;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;
