import { useQuery } from "@tanstack/react-query";
import { getStudyAPI } from "../../apis/studies";
import { useRouter } from "next/router";

export const useStudyDetail = () => {
  const { query } = useRouter();
  const id = (query?.id as string) || "";

  return useQuery(["STUDIES", "DETAIL", id], () => getStudyAPI({ id }));
};
