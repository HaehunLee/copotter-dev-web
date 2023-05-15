import { GetServerSidePropsContext } from "next";
import { getStudyAPI } from "../../../apis/studies";
import { QueryClient } from "@tanstack/react-query";
import { useStudyDetail } from "../../../hooks/queries/studiesQuery";

const StudiesTypescriptDetailPage = () => {
  const { data } = useStudyDetail();

  return <div>StudiesTypescriptDetailPage</div>;
};

export default StudiesTypescriptDetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query?.id as string;
  const queryClient = new QueryClient();

  if (id) {
    await queryClient.prefetchQuery(["STUDIES", "DETAIL", id], () =>
      getStudyAPI({ id })
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
