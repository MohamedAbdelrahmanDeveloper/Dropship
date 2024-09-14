import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib";


export const getAllCheckouts = async (query) => {
  try {
    let data;
    await customAxios.get(`/cart/checkouts${query || ''}`).then((res) => {
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

export const addCheckout = async (buyerInfo) => {
  try {
    let data;
    await customAxios.get(`/cart/checkout`, buyerInfo).then((res) => {
      data = res?.data;
      toast.success(data?.message)
    });
    return data;
  } catch (error) {
      if ( error?.response?.data?.message) {
          toast.error(error?.response?.data?.message)   
      }
      return error
  }
}