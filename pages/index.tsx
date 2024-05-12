import styled from '@emotion/styled';
import Link from 'next/link';

import { Button, Textarea } from '#components/atoms';
import SectionBlock from '#components/molecules/SectionBlock';


const IndexPage = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 10 }}
  >
    <p>
      <Link href='/about'>Home</Link>
    </p>

    <SectionBlock
      title='인기글'
      content={
        <div>
          <p>홈페이지 꽃단장 중 입니다.</p>
        </div>
      }
    />

    <ButtonArea>
      <Button disabled>취소 (C)</Button>
      <Button>확인 (C)</Button>
    </ButtonArea>

    <Textarea placeholder='채워나갈 예정...' />
  </div>
);

export default IndexPage;

const ButtonArea = styled.div`
  display: flex;
  gap: 12px;
`;
