import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <LeftArea>
          <Link href='/'>
            <Image
              width={49.2}
              height={29.4}
              src={'/images/copotter_dev_icon.png'}
              alt='icon'
            />
          </Link>
          {/* <a href="/api/studies">Users API | </a> */}
          <Link href='/storybook'>Component</Link>
          <Link href='/studies/typescript'>Soon...</Link>
        </LeftArea>
        <RightArea>
          <Image
            width={100}
            height={17.56}
            src={'/images/copotter_dev_logo.png'}
            alt='logo'
          />
        </RightArea>
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
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const LeftArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const RightArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;
