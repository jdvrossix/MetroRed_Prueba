/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface RegistroModalProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: (formData: any) => void;
}

const RegistroModal: React.FC<RegistroModalProps> = ({ open, handleClose, onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [numeroDoc, setNumeroDoc] = useState('');

  const handleSubmit = () => {
    const formData = { nombre, correo, genero, tipoDoc, numeroDoc };
    onSubmit(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        borderRadius: 2, 
        boxShadow: 24, 
        p: 4 
      }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Registro</Typography>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <Box mt={2}>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Género</InputLabel>
            <Select
              value={genero}
              onChange={(e) => setGenero(e.target.value as string)}
              label="Género"
            >
              <MenuItem value="M">Masculino</MenuItem>
              <MenuItem value="F">Femenino</MenuItem>
              <MenuItem value="O">Otro</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Tipo de Documento</InputLabel>
            <Select
              value={tipoDoc}
              onChange={(e) => setTipoDoc(e.target.value as string)}
              label="Tipo de Documento"
            >
              <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
              <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
              <MenuItem value="CE">Cédula de Extranjería</MenuItem>
              <MenuItem value="PP">Pasaporte</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label="Número de Documento"
            value={numeroDoc}
            onChange={(e) => setNumeroDoc(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Registrarse
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegistroModal;
