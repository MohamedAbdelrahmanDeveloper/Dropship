import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib";


export const getAllCheckouts = async () => {
  try {
    let data;
    await customAxios.get(`/cart/checkouts`).then((res) => {
      data = res.data;
    });
    return data;
  } catch (error) {
    console.log(error);
      if ( error?.response?.data?.message) {
          toast.error(error?.response?.data?.message)   
      }
      return undefined  
  }
}