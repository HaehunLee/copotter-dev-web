import Image from 'next/image';

import { Button, Input, PostItem, Textarea } from '#components/atoms';
import SectionBlock from '#components/molecules/SectionBlock';

const IndexPage = () => (
  <div
    style={{ display: 'flex', flexDirection: 'column', gap: 60, padding: 10 }}
  >
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Brand</h3>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
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
      </div>
    </section>

    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Button</h3>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Button>취소 (C)</Button>
        <Button disabled>취소 (C)</Button>
      </div>
    </section>

    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Color</h3>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <ColorCard color='#1CC800' text='Primary' />
        <ColorCard color='#BFBFBF' text='Secondary' />
        <ColorCard color='#f2f2f2' text='BG' />
        <ColorCard color='#ffffff' text='White' />
      </div>
    </section>

    <section style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <div
        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <h6>Section Block</h6>
        <SectionBlock title='인기글' content='열심히 해봅시다!' />
        <SectionBlock
          title='인기글'
          content={
            <div>
              <p>뭘 써나가볼까요?</p>
            </div>
          }
        />
      </div>

      <div
        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <h6>Input</h6>
        <Input placeholder='뭐 쓸건데?' />
        <Textarea placeholder='뭐 쓸건데?' />
      </div>
    </section>

    <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h6>PostItem</h6>
      <div style={{ display: 'flex', gap: 20 }}>
        <PostItem
          title='이번주 뜨거운 게시글은 이거!'
          description='그게 뭔데 십덕아 프로젝트를 공개합니다.'
        />
        <PostItem
          title='저번주 뜨거운 게시글은 저거!'
          description='그게 뭔데 십덕아 프로젝트를 공개합니다.'
        />
        <PostItem
          title='저번주 뜨거운 게시글은 저거!'
          description='그게 뭔데 십덕아 프로젝트를 공개합니다.'
        />
      </div>
    </section>
  </div>
);

export default IndexPage;

const ColorCard = ({ color, text }: { color: string; text: string }) => {
  return (
    <div style={{ display: 'flex', width: 203, height: 80 }}>
      <div style={{ width: 80, height: 80, backgroundColor: color }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '16px 0px 16px 16px',
        }}
      >
        <span>{text}</span>
        <span>{color}</span>
      </div>
    </div>
  );
};
