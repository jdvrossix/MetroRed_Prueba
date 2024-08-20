/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Modal from "../components/Registro/Modal";
import CustomFormField from "../components/Registro/CustomFormField";
import SelectorTipoDoc from "../components/Registro/CustomSelectorTipoDoc";
import SelectorGenero from "../components/Registro/CustomSelectorGenero";
import ApiService from "../components/Registro/Services/ApiService";
import '../components/Registro/ContentRegistrar.css';
import { FaUser, FaIdCard, FaVenusMars, FaEnvelope, FaPhone, FaBirthdayCake } from 'react-icons/fa';

const initialFormData = {
  nombre: "",
  apellido: "",
  tipoDocumento: -1,
  documento: "",
  tipoGenero: -1,
  genero: "",
  fechaNacimiento: "",
  correo: "",
  telefono: "",
};

const ContentRegistrar: React.FC = () => {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errorMessages, setErrorMessages] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    documento: "",
    tipoGenero:"",
    genero: "",
    fechaNacimiento: "",
    correo: "",
    telefono: "",
    provincia: "",
    poblacion: "",
    direccion: "",
    aceptaTerminos: "",
  });

  const [generos, setGeneros] = useState<{ identificador_TipoGenero: number, descripcion: string }[]>([]);
  const [tiposDocumento, setTiposDocumento] = useState<{ identificador_TipoDocumentoIdentificativo: number, nombre_TipoDocumentoIdentificativo: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const handleChangeGenero = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenero = event.target.value;
    const selectedGeneroDesc = event.target.options[event.target.selectedIndex].text;
    setFormData({
      ...formData,
      genero: selectedGeneroDesc,
      tipoGenero: parseInt(selectedGenero, 10),
    });

    setErrorMessages({
      ...errorMessages,
      genero: "",
    });
  };

  const handleChangeTipoDoc = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoDoc = parseInt(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      tipoDocumento: selectedTipoDoc,
    }));

    setErrorMessages((prevState) => ({
      ...prevState,
      tipoDocumento: "",
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorMessages((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any = {};

    if (formData.nombre.trim().length < 3 || formData.nombre.trim() === "") {
      errors.nombre = "Nombre inválido. Debe tener al menos 3 letras y no puede estar vacío.";
    }
    if (formData.apellido.trim().length < 3 || formData.apellido.trim() === "") {
      errors.apellido = "Apellido inválido. Debe tener al menos 3 letras y no puede estar vacío.";
    }
    if (formData.tipoDocumento === -1) {
      errors.tipoDocumento = "Debe seleccionar un tipo de documento.";
    }

    const documentoRegex = /^[a-zA-Z0-9]{8,18}$/;
    if (!documentoRegex.test(formData.documento.trim())) {
      errors.documento = "Documento inválido. Debe contener solo letras o números (8 a 18 caracteres).";
    }

    if (formData.tipoGenero === -1) {
      errors.genero = "Debe seleccionar un género.";
    }

    const fechaNacimiento = new Date(formData.fechaNacimiento);
    const fechaActual = new Date();
    const fechaLimite = new Date(1900, 0, 1);

    if (formData.fechaNacimiento === "") {
      errors.fechaNacimiento = "Debe seleccionar una fecha de nacimiento.";
    } else if (fechaNacimiento > fechaActual) {
      errors.fechaNacimiento = "La fecha de nacimiento no puede ser mayor que la fecha actual.";
    } else if (fechaNacimiento < fechaLimite) {
      errors.fechaNacimiento = "La fecha de nacimiento no puede estar por debajo del año 1900.";
    }

    if (formData.correo.trim() === "") {
      errors.correo = "Correo inválido. No puede estar vacío.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      errors.correo = "Correo inválido. Debe tener un formato de correo electrónico válido.";
    }

    const telefonoRegex = /^\d{9,14}$/;
    if (!telefonoRegex.test(formData.telefono.trim())) {
      errors.telefono = "Número de teléfono inválido. Introduzca solo números. Tamaño: [9-14].";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setLoading(true);
    setShowSuccessModal(false); 

    console.log("Enviando solicitud de registro...");

    try {
      const data = {
        identificador_Cliente: 0,
        nombre_Cliente: formData.nombre.toUpperCase(),
        apellidos_Cliente: formData.apellido.toUpperCase(),
        documentoIdentificativo_Cliente: formData.documento,
        identificador_TipoDocumentoIdentificativo: formData.tipoDocumento,
        correoElectronico_Cliente: formData.correo.toUpperCase(),
        numeroMovil_Cliente: formData.telefono,
        poblacion_Cliente: "", //formData.poblacion.toUpperCase(),
        direccion_Cliente: "", //formData.direccion.toUpperCase(),
        provincia_Cliente: "", //formData.provincia.toUpperCase(),
        fecha_Nacimiento_Cliente: formData.fechaNacimiento,
        imagen_Cliente: "",
        infoExtraJson: "",
        identificador_TipoEstadoCliente: 0,
        identificador_PerfilCliente: 0,
        fechaCaducidad_PerfilCliente: "2099-12-31",
        identificador_TipoGenero: formData.tipoGenero,
        descripcion_TipoGenero: formData.genero,
        saldo_ABT: 0,
      };

      const resp = await ApiService.register(data);
      if (resp.isSuccess) {
        setFormData({ ...initialFormData });
        setShowModal(true);
      }

      // ...
    } catch (error) {
      console.error("Error al enviar la información:", error);
      // ...
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentBlur = async (value: string) => {
    await ApiService.checkDocumentoDisponible(value);
    // Manejo de error si no está disponible
    return;
  };

  useEffect(() => {
    const getToken = async (): Promise<void> => {
      try {
        const token: string | null = await ApiService.getToken(
          "busapp",
          "123456",
          "POS_BUSAPP"
        );
        if (token !== null) {
          const documentos: any[] | null = await ApiService.getDocumentos(token);
          const generos: any[] | null = await ApiService.getGeneros(token);

          if (documentos !== null && generos !== null) {
            const documentosConOpcionVacia: { identificador_TipoDocumentoIdentificativo: number, nombre_TipoDocumentoIdentificativo: string }[] = [
              { identificador_TipoDocumentoIdentificativo: -1, nombre_TipoDocumentoIdentificativo: 'Seleccione un tipo de documento' },
              ...documentos,
            ];
            setTiposDocumento(documentosConOpcionVacia);

            const generosConOpcionVacia: { identificador_TipoGenero: number, descripcion: string }[] = [
              { identificador_TipoGenero: -1, descripcion: 'Seleccione un género' },
              ...generos,
            ];
            setGeneros(generosConOpcionVacia);
          }
        }
      } catch (error: any) {
        console.error("Error:", error);
      }
    };
    getToken();
  }, []);

  return (
    <div>
    {showModal && (
      <Modal show={showModal} handleClose={() => setShowModal(false)} />
    )}      {showSuccessModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registro exitoso!</h5>
              </div>
              <div className="modal-body">
                <p>Gracias por registrarte!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Cerrar
                </button>
              </div>
              </div>
          </div>
        </div>
      )}
      <section className="features-icons bg-light text-center det-ails">
        <div className="interest-links">
          <h2 style={{ textAlign: 'center' }}>Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tipo de Documento</label>
                    <div className="input-group">
                      <span className="input-icon">
                      </span>
                      <SelectorTipoDoc
                        options={tiposDocumento}
                        onChange={handleChangeTipoDoc}
                        error={errorMessages.tipoDocumento}
                        value={formData.tipoDocumento}
                        icon={<FaIdCard className="icon-centered" />}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="documento">
                      Documento
                    </label>
                    <CustomFormField
                      value={formData.documento}
                      onBlur={() => handleDocumentBlur(formData.documento)}
                      onChange={handleChange}
                      name="documento"
                      type="text"
                      placeholder="Documento"
                      error={errorMessages.documento}
                      label=""
                      icon={<FaIdCard className="icon-centered" />}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nombre">
                      Nombre
                    </label>
                    <CustomFormField
                      value={formData.nombre}
                      onChange={handleChange}
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      error={errorMessages.nombre}
                      label=""
                      icon={<FaUser className="icon-centered" />}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="apellido">
                      Apellido
                    </label>
                    <CustomFormField
                      value={formData.apellido}
                      onChange={handleChange}
                      name="apellido"
                      type="text"
                      placeholder="Apellido"
                      error={errorMessages.apellido}
                      label=""
                      icon={<FaUser className="icon-centered" />}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Género</label>
                    <div className="input-group">
                      <span className="input-icon">
                        <FaUser />
                      </span>
                      <SelectorGenero
                        options={generos}
                        onChange={handleChangeGenero}
                        error={errorMessages.genero}
                        value={formData.tipoGenero}
                        icon={<FaVenusMars className="icon-centered" />}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fechaNacimiento">
                      Fecha de Nacimiento
                    </label>
                    <CustomFormField
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      name="fechaNacimiento"
                      type="date"
                      placeholder="Fecha de Nacimiento"
                      error={errorMessages.fechaNacimiento}
                      label=""
                      icon={<FaBirthdayCake className="icon-centered" />}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="correo">
                      Correo Electrónico
                    </label>
                    <CustomFormField
                      value={formData.correo}
                      onChange={handleChange}
                      name="correo"
                      type="email"
                      placeholder="Correo Electrónico"
                      error={errorMessages.correo}
                      label=""
                      icon={<FaEnvelope className="icon-centered" />}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">
                      Teléfono
                    </label>
                    <CustomFormField
                      value={formData.telefono}
                      onChange={handleChange}
                      name="telefono"
                      type="tel"
                      placeholder="Teléfono"
                      error={errorMessages.telefono}
                      label=""
                      icon={<FaPhone className="icon-centered" />}
                    />
                  </div>
                </div>

                <div className="container-btn-aceptar">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Registrando..." : "Registrar"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContentRegistrar;