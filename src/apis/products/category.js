import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib"


export const getAllCategory = async () => {
    try {
      let data;
      await customAxios.get(`category`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}

export const addCategory = async (data) => {
    try {
      await customAxios.post(`category`, data).then((res) => {
        data = res.data;
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}

export const deleteCategory = async (id) => {
    try {
      let data;
      await customAxios.delete(`category/${id}`).then((res) => {
        data = res.data;
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}
