import styled from '@emotion/styled';
import Image from 'next/image';

interface PostModel {
  title: string;
  description: string;
}

const PostItem = ({ title, description }: PostModel) => {
  return (
    <Box>
      <Image
        width={200}
        height={200}
        src={'/images/copotter_dev_example_post_image.png'}
        alt='image'
      />
      <Content>
        <h5>{title}</h5>
        <span>{description}</span>
      </Content>
    </Box>
  );
};

export default PostItem;

const Box = styled.article`
  display: flex;
  flex-direction: column;

  max-width: 200px;
  width: 100%;
  height: 328px;
`;

const Content = styled.div`
  padding: 16px 3px;
`;
