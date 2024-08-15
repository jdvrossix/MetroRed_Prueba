/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  isSuccess: boolean;
  message: string;
  objectResp?: {
    token: string;
  };
}

interface RegisterResponse {
  isSuccess: boolean;
  message: string;
}

const path = 'https://antofagasta.busmatick.com/api/';

const ApiService = {
  getToken: async (username: string, password: string, imei: string): Promise<string | null> => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.post(`${path}Login`, {
        username,
        password,
        imei,
      });
      if (response.data.isSuccess && response.data.objectResp) {
        const token = response.data.objectResp.token;
        localStorage.setItem('token', token);
        return token;
      } else {
        console.error(response.data.message);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getDocumentos: async (token: string): Promise<any[] | null> => {
    try {
      const response: AxiosResponse<any[]> = await axios.get(`${path}TiposDocumentosIdentificativos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getGeneros: async (token: string): Promise<any[] | null> => {
    try {
      const response: AxiosResponse<any[]> = await axios.get(`${path}TiposGeneroCliente`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  register: async (data: any): Promise<RegisterResponse> => {
    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<RegisterResponse> = await axios.post(`${path}Clientes`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        isSuccess: response.data.isSuccess,
        message: response.data.message,
      };
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      return {
        isSuccess: false,
        message: 'Error al enviar la solicitud',
      };
    }
  },

  checkDocumentoDisponible: async (documento: string): Promise<boolean> => {
    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<any> = await axios.get(`${path}Clientes/Existe/DocumentoIdentificativo/${documento}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return !response.data.isSuccess;
    } catch (error) {
      console.error(error);
      return true;
    }
  },
};

export default ApiService;