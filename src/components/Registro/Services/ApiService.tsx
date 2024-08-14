/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

//const path = 'https://desarrollo.busmatick.com:8799/api/';
const path = 'https://antofagasta.busmatick.com/api/';

const ApiService = {
    getToken: async (username: string, password: string, imei: string): Promise<string | null> => {
        try {
            const response = await axios.post(`${path}Login`, {
                username,
                password,
                imei,
            });

            if (response.data.isSuccess) {
                const token = response.data.objectResp.token;
                localStorage.setItem('token', token);
                return token;
            } else {
                console.error('Error en Login:', response.data.message);
                return null;
            }
        } catch (error: any) {  // Aserción de tipo
            console.error('Error al obtener token:', error.response ? error.response.data : error.message);
            return null;
        }
    },

    getDocumentos: async (token: string): Promise<any> => {
        if (!token) {
            console.error('Token no proporcionado.');
            return null;
        }

        try {
            const response = await axios.get(`${path}TiposDocumentosIdentificativos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {  // Aserción de tipo
            console.error('Error al obtener documentos:', error.response ? error.response.data : error.message);
            return null;
        }
    },

    getGeneros: async (token: string): Promise<any> => {
        if (!token) {
            console.error('Token no proporcionado.');
            return null;
        }

        try {
            const response = await axios.get(`${path}TiposGeneroCliente`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {  // Aserción de tipo
            console.error('Error al obtener géneros:', error.response ? error.response.data : error.message);
            return null;
        }
    },

    register: async (data: any): Promise<{ isSuccess: boolean; message: string }> => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token no disponible para registro.');
            return { isSuccess: false, message: 'Token no disponible.' };
        }

        try {
            const response = await axios.post(`${path}Clientes`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                isSuccess: response.data.isSuccess,
                message: response.data.message,
            };
        } catch (error: any) {  // Aserción de tipo
            console.error('Error al enviar la solicitud de registro:', error.response ? error.response.data : error.message);
            return {
                isSuccess: false,
                message: 'Error al enviar la solicitud de registro.',
            };
        }
    },

    checkDocumentoDisponible: async (documento: string): Promise<boolean> => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token no disponible para verificar documento.');
            return true; // Retorna true asumiendo que no está disponible
        }

        try {
            const response = await axios.get(`${path}Clientes/Existe/DocumentoIdentificativo/${documento}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return !response.data.isSuccess;
        } catch (error: any) {  // Aserción de tipo
            console.error('Error al verificar documento:', error.response ? error.response.data : error.message);
            return true; // Retorna true asumiendo que no está disponible
        }
    },
};

export default ApiService;
