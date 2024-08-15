import axios from 'axios';

//const path = 'https://desarrollo.busmatick.com:8799/api/';
const path = 'https://antofagasta.busmatick.com/api/';

const ApiService = {


    getToken: async (username, password, imei) => {
        try {
            const response = await axios.post(path+'Login', {
                username: username,
                password: password,
                imei: imei
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
            console.error(error);
            return null;
        }
    },
    getDocumentos: async (token) => {
        try {
            const response = await axios.get(path+'TiposDocumentosIdentificativos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    getGeneros: async (token) => {
        try {
            const response = await axios.get(path+'TiposGeneroCliente', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },


    register: async (data) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(path + 'Clientes', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return {
                isSuccess: response.data.isSuccess,
                message: response.data.message
              };
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            return {
                isSuccess: false,
                message: 'Error al enviar la solicitud'
              }; 
        }
    },



    checkDocumentoDisponible: async (documento) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(path+'Clientes/Existe/DocumentoIdentificativo/'+documento, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return !response.data.isSuccess;
        } catch (error) {
            console.error(error);
            return true;
        }
    },
};


export default ApiService;