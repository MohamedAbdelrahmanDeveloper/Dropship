import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib"



export const getAllProducts = async () => {
    try {
      let data;
      await customAxios.get(`product`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}

export const getProduct = async (id) => {
    try {
      let data;
      await customAxios.get(`product/${id}`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)
      }
       return 'froifionioi'
    }
}

export const addProduct = async (id) => {
    try {
      let data;
      await customAxios.post(`product`, {
        // form data by javascript method
      }).then((res) => {
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

export const updateProduct = async (id) => {
    try {
      let data;
      await customAxios.patch(`product/${id}`, {
      }).then((res) => {
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

export const updateProductImage = async (id) => {
    try {
      let data;
      await customAxios.put(`product/update-image/${id}`, {
        // form data by javascript method
      }).then((res) => {
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

export const deleteProduct = async (id) => {
    try {
      let data;
      await customAxios.delete(`product/${id}`, {
        // form data by javascript method
      }).then((res) => {
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
