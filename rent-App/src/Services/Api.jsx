import axios from "axios";


const API = "https://dummyjson.com/products";

export const getProducts = () =>{
   return axios.get(API);
}

export const getProductbyid =(id)=>{
    return axios.get(`${API}/${id}`);
}


export const addProduct = (data) => {
  return axios.post(`${API}/add`, data);
};

export const updateProduct = (id, data) => {
  return axios.put(`${API}/${id}`, data);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API}/${id}`);
};
