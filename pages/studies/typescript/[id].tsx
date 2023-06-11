import { QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getStudiesDetailAPI } from '../../../apis/studies';
import { useStudyDetail } from '../../../hooks/queries/studiesQuery';

const StudiesTypescriptDetailPage = () => {
  const { data } = useStudyDetail();

  return (
    <div>
      {data && (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data?.content}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default StudiesTypescriptDetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query?.id as string;
  const queryClient = new QueryClient();

  if (id) {
    await queryClient.prefetchQuery(['STUDIES', 'DETAIL', id], () =>
      getStudiesDetailAPI({ id }),
    );
  }

  // const detailData = queryClient.getQueryData(['DETAIL', id]) as ApiReponse<
  //   null,
  //   StudyDetailModel
  // >;

  return {
    props: {
      title: `test`,
    },
  };
}
