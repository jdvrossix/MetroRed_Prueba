/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

interface RegisterResponse {
  isSuccess: boolean;
  message: string;
}

class ApiService {
  private static readonly path: string = 'https://antofagasta.busmatick.com/api/';
  // private static readonly path: string = 'https://desarrollo.busmatick.com:8799/api/';

  static async getToken(username: string, password: string, imei: string): Promise<string | null> {
    try {
      const response = await axios.post(ApiService.path + 'Login', {
        username,
        password,
        imei,
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
  }

  static async getDocumentos(token: string): Promise<any | null> {
    try {
      const response = await axios.get(ApiService.path + 'TiposDocumentosIdentificativos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getGeneros(token: string): Promise<any | null> {
    try {
      const response = await axios.get(ApiService.path + 'TiposGeneroCliente', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async register(data: any): Promise<RegisterResponse> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(ApiService.path + 'Clientes', data, {
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
  }

  static async checkDocumentoDisponible(documento: string): Promise<boolean> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(ApiService.path + 'Clientes/Existe/DocumentoIdentificativo/' + documento, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return !response.data.isSuccess;
    } catch (error) {
      console.error(error);
      return true;
    }
  }

  // Nueva función para enviar el enlace de restablecimiento de contraseña
  static async resetPassword(email: string): Promise<{ isSuccess: boolean; message: string }> {
    try {
      const response = await axios.post(ApiService.path + 'Cuentas/Clientes/RestablecerPassword', { email });
      return {
        isSuccess: response.data.isSuccess,
        message: response.data.message || 'Se ha enviado un enlace para restablecer tu contraseña.',
      };
    } catch (error) {
      console.error('Error al enviar el enlace de restablecimiento:', error);
      return {
        isSuccess: false,
        message: 'Error al intentar enviar el enlace de restablecimiento. Inténtalo de nuevo.',
      };
    }
  }
}

export default ApiService;
