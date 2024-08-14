import { useState } from 'react';
import axios from 'axios';

interface UseRegisterApiProps {
  email: string;
  password: string;
}

const useRegisterApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = async ({ email, password }: UseRegisterApiProps) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/register', { email, password });
      return response.data;
    } catch (err) {
      setError('Error al registrarse');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegisterApi;
