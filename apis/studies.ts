import instance from "./instance";

export const getStudyAPI = async ({ id }: { id: string | number }) => {
  try {
    const res: any = await instance.get(`/api/studies/${id}`);
    return res;
  } catch (e) {
    console.error("getStudyAPI Error:", e);
    throw e;
  }
};
