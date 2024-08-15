/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

//const path = 'https://desarrollo.busmatick.com:8799/api/';
const path = 'https://antofagasta.busmatick.com/api/';

const ApiService = {
    getToken: async (username: string, password: string, imei: string) => {
        try {
            const response = await axios.post(`${path}Login`, {
                username,
                password,
                imei
            });
            if (response.data.isSuccess) {
                const token = response.data.objectResp.token;
                localStorage.setItem('token', token);
                return token;
            } else {
                console.error(response.data.message);
                return null;
            }
        } catch (error) {
            console.error('Error al obtener el token:', error);
            return null;
        }
    },

    getDocumentos: async (token: string) => {
        try {
            const response = await axios.get(`${path}TiposDocumentosIdentificativos`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener documentos:', error);
            return null;
        }
    },

    getGeneros: async (token: string) => {
        try {
            const response = await axios.get(`${path}TiposGeneroCliente`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener géneros:', error);
            return null;
        }
    },

    register: async (data: any) => {
        try {
          const token = localStorage.getItem('token');
          console.log('Token:', token);
          console.log('Data:', data);
      
          // Basic validation
          if (!data.identificador_TipoGenero || !data.cliente) {
            console.error('Error: Missing required fields');
            return {
              isSuccess: false,
              message: 'Error: Missing required fields'
            };
          }
      
          // Try to convert identificador_TipoGenero to an integer
          data.identificador_TipoGenero = parseInt(data.identificador_TipoGenero, 10);
          if (isNaN(data.identificador_TipoGenero)) {
            console.error('Error: Invalid identificador_TipoGenero value');
            return {
              isSuccess: false,
              message: 'Error: Invalid identificador_TipoGenero value'
            };
          }
      
          const response = await axios.post(`${path}Clientes`, data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return {
            isSuccess: response.data.isSuccess,
            message: response.data.message
          };
        } catch (error: any) {
          console.error('Error al enviar la solicitud:', error);
          console.error('Error details:', error.response ? error.response.data : error);
          if (error.response && error.response.data && error.response.data.errors) {
            console.error('Validation errors:', error.response.data.errors);
          }
          return {
            isSuccess: false,
            message: 'Error al enviar la solicitud'
          };
        }
      },

    checkDocumentoDisponible: async (documento: string) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${path}Clientes/Existe/DocumentoIdentificativo/${documento}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return !response.data.isSuccess;
        } catch (error) {
            console.error('Error al verificar documento:', error);
            return true; // Asumir que el documento no está disponible en caso de error
        }
    },
};

export default ApiService;
