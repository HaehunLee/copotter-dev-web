import instance from './instance';

export const getStudiesDetailAPI = async ({ id }: { id: string | number }) => {
  try {
    const res: any = await instance.get(`/api/studies/${id}`);
    return res;
  } catch (e) {
    console.error('getStudiesDetailAPI Error:', e);
    throw e;
  }
};
