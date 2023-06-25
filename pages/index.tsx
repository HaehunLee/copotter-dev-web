import Image from 'next/image';
import Link from 'next/link';

import { Button } from '#components/atoms';

const IndexPage = () => (
  <div style={{ backgroundColor: 'red', padding: 10 }}>
    <h1>Hello Next.js 👋</h1>
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
  </div>
);

export default IndexPage;
