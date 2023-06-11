import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { getStudiesDetailAPI } from '../../apis/studies';

export const useStudyDetail = () => {
  const { query } = useRouter();
  const id = (query?.id as string) || '';

  return useQuery(['STUDIES', 'DETAIL', id], () => getStudiesDetailAPI({ id }));
};
