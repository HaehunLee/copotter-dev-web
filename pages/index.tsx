import Image from 'next/image';
import Link from 'next/link';

import { Button } from '#components/atoms';
import SectionBlock from '#components/molecules/SectionBlock';

const IndexPage = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 10 }}
  >
    <p>
      <Link href='/about'>About</Link>
    </p>
    <Image
      width={49.2}
      height={29.4}
      src={'/images/copotter_dev_icon.png'}
      alt='icon'
    />
    <Image
      width={148}
      height={26}
      src={'/images/copotter_dev_logo.png'}
      alt='logo'
    />
    <Button>취소 (C)</Button>
    <Button disabled>취소 (C)</Button>

    <SectionBlock
      title='인기글'
      content={
        <div>
          <p>뭘 써나가볼까요?</p>
        </div>
      }
    />
    <SectionBlock title='인기글' content='열심히 해봅시다!' />
  </div>
);

export default IndexPage;
