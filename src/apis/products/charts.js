import { customAxios } from "../../lib/axios.lib"


export const getChart = async () => {
    try {
      let data;
      await customAxios.get(`admin/chart`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}
