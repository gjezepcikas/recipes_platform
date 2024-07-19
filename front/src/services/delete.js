import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem('token');

export const deleteData = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/${id}`);
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting data ${error.message}`);
  }
};

export const deleteCategory = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting category ${error.message}`);
  }
};

export const deleteRecipe = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/api/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting recipe ${error.message}`);
  }
};

export const deleteAccount = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(`Error deleting user ${error.message}`);
  }
};
