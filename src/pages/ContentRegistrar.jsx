import React, { useState, useEffect } from "react";
import Modal from '../components/Externo/components/Modal';
import CustomFormField from '../components/Externo/components/CustomFormField/CustomFormField';
import SelectorTipoDoc from '../components/Externo/components/CustomSelector/CustomSelectorTipoDoc';
import SelectorGenero from '../components/Externo/components/CustomSelector/CustomSelectorGenero';
import ModalResp from '../components/Externo/components/CustomModal/CustomModalResp';
import ApiService from '../components/Externo/components/RdrServices';
import "../components/Externo/components/ContentRegistrar.css";

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
  provincia: "",
  poblacion: "",
  direccion: "",
  aceptaTerminos: false,
};

function ContentRegistrar() {
  const [formData, setFormData] = useState({...initialFormData });

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

  const [generos, setGeneros] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModalResp, setShowModalResp] = useState(false);
  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowTerms = () => {
    // console.log("Mostrar términos y condiciones");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleCloseModalResp = () => {
    setShowModalResp(false);
    setResponse(null);
  };

  const handleChangeGenero = (event) => {
    const selectedGenero = event.target.value;
    const selectedGeneroDesc = event.target.options[event.target.selectedIndex].text;
    setFormData({
      ...formData,
      genero: selectedGenero,
      tipoGenero: selectedGeneroDesc,
    });

    setErrorMessages({
      ...errorMessages,
      genero: "",
    });
  };

  const handleChangeTipoDoc = (event) => {
    const selectedTipoDoc = event.target.value;
    // console.log(selectedTipoDoc);
    setFormData({
      ...formData,
      tipoDocumento: selectedTipoDoc,
    });

    setErrorMessages({
      ...errorMessages,
      tipoDocumento: "",
    });
  };

  const handleChange = (e) => {
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

  const handleAceptaTerminosChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    if (checked) {
      setErrorMessages((prevState) => ({
        ...prevState,
        aceptaTerminos: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.nombre.trim().length < 3 || formData.nombre.trim() === "") {
      errors.nombre =  "Nombre inválido. Debe tener al menos 3 letras y no puede estar vacío.";
    }
    if ( formData.apellido.trim().length < 3 || formData.apellido.trim() === "" ) {
      errors.apellido = "Apellido inválido. Debe tener al menos 3 letras y no puede estar vacío.";
    }
    if (formData.tipoDocumento === -1 || formData.tipoDocumento === null) {
      errors.tipoDocumento = "Debe seleccionar un tipo de documento.";
    }

    const documentoRegex = /^[a-zA-Z0-9]{8,18}$/;
    if (!documentoRegex.test(formData.documento.trim())) {
      errors.documento = "Documento inválido. Debe contener solo letras o números (8 a 18 caracteres).";
    }
    // if ( formData.documento.trim().length < 3 || formData.documento.trim() === "" ) {
    //   errors.documento =  "Documento inválido. Debe tener al menos 3 letras y no puede estar vacío.";
    // }
    
    if (formData.tipoGenero === null || formData.tipoGenero === -1) {
      errors.genero = "Debe seleccionar un género.";
    }
    
    const fechaNacimiento = new Date(formData.fechaNacimiento);
    const fechaActual = new Date();
    const fechaLimite = new Date(1900, 0, 1); // 1 de enero de 1900

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
      errors.telefono =
        "Número de teléfono inválido. Introduzca solo números. Tamaño:[9-14]";
    }
    // if (
    //   formData.provincia.trim().length < 3 ||
    //   formData.provincia.trim() === ""
    // ) {
    //   errors.provincia =
    //     "Provincia inválida. Debe tener al menos 3 letras y no puede estar vacía.";
    // }
    // if (
    //   formData.poblacion.trim().length < 3 ||
    //   formData.poblacion.trim() === ""
    // ) {
    //   errors.poblacion =
    //     "Población inválida. Debe tener al menos 3 letras y no puede estar vacía.";
    // }
    // if (
    //   formData.direccion.trim().length < 3 ||
    //   formData.direccion.trim() === ""
    // ) {
    //   errors.direccion =
    //     "Dirección inválida. Debe tener al menos 3 letras y no puede estar vacía.";
    // }
    // if (!formData.aceptaTerminos) {
    //   errors.aceptaTerminos = "Debe aceptar los términos y condiciones.";
    // }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setLoading(true);

    try {
      const data = {
        identificador_Cliente: 0,
        nombre_Cliente: formData.nombre.toUpperCase(),
        apellidos_Cliente: formData.apellido.toUpperCase(),
        documentoIdentificativo_Cliente: formData.documento,
        identificador_TipoDocumentoIdentificativo: formData.tipoDocumento,
        correoElectronico_Cliente: formData.correo.toUpperCase(),
        numeroMovil_Cliente: formData.telefono,
        poblacion_Cliente: "",//formData.poblacion.toUpperCase(),
        direccion_Cliente: "",//formData.direccion.toUpperCase(),
        provincia_Cliente: "",//formData.provincia.toUpperCase(),
        fecha_Nacimiento_Cliente: formData.fechaNacimiento,
        imagen_Cliente: "",
        infoExtraJson: "",
        identificador_TipoEstadoCliente: 0,
        identificador_PerfilCliente: 0,
        fechaCaducidad_PerfilCliente: "2099-12-31",
        identificador_TipoGenero: formData.genero,
        descripcion_TipoGenero: formData.tipoGenero,        
        saldo_ABT: 0
      };

      const resp = await ApiService.register(data);
      setResponse(resp); 
      
      if (resp.isSuccess) {
          setFormData({ ...initialFormData });
      }
      
      setShowModalResp(true);


    } catch (error) {
      console.error("Error al enviar la información:", error);
      const response = { success: false, message: "Error al enviar la información. Por favor, inténtalo de nuevo más tarde." };
      setResponse(response); 
      setShowModalResp(true);

    } finally {
      setLoading(false);
    }
  };

  const handleDocumentBlur = async (value) => {
    const documentoDisponible = await ApiService.checkDocumentoDisponible(value);
    return documentoDisponible;
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await ApiService.getToken(
          "busapp",
          "123456",
          "POS_BUSAPP"
        );
        if (token !== null) {
          const documentos = await ApiService.getDocumentos(token);
          const generos = await ApiService.getGeneros(token);

          if (documentos !== null && generos !== null) {
            const documentosConOpcionVacia = [{ identificador_TipoDocumentoIdentificativo: -1, nombre_TipoDocumentoIdentificativo: 'Seleccione un tipo de documento' }, ...documentos];
            setTiposDocumento(documentosConOpcionVacia);

            
            const generosConOpcionVacia = [{ identificador_TipoGenero: -1, descripcion: 'Seleccione un género' }, ...generos];
            setGeneros(generosConOpcionVacia);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getToken();
  }, []);


  return (
    <div>
      <Modal show={showModal} handleClose={handleCloseModal} />
      <ModalResp
        show={showModalResp}
        handleClose={handleCloseModalResp}
        response={response}
      />    

      <section className="features-icons bg-light text-center det-ails">
        <div className="interest-links">
          <h2>Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className="container">

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <SelectorTipoDoc
                      options={tiposDocumento}
                      error={errorMessages.tipoDocumento}
                      onChange={handleChangeTipoDoc}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Documento"
                      type="text"
                      name="documento"
                      value={formData.documento}
                      onChange={handleChange}
                      hintText="Ingrese su número de documento"
                      icon={<i className="fa fa-id-card"></i>}
                      error={errorMessages.documento}
                      onBlurCallback={handleDocumentBlur}
                      errorMessage="El documento ya esta siendo utilizado."
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Nombre"
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      hintText="Ingrese su nombre"
                      icon={<i className="fa fa-user"></i>}
                      error={errorMessages.nombre}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Apellido"
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      error={errorMessages.apellido}
                      hintText="Ingrese su apellido"
                      icon={<i className="fas fa-user"></i>}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <SelectorGenero
                      options={generos}
                      error={errorMessages.genero}
                      onChange={handleChangeGenero}
                    />

                  
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Fecha de Nacimiento"
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      error={errorMessages.fechaNacimiento}
                      hintText="Seleccione su fecha de nacimiento"
                      icon={<i className="fas fa-calendar-alt"></i>}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Número de Teléfono"
                      type="text"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      error={errorMessages.telefono}
                      hintText="Ingrese su número de teléfono"
                      icon={<i className="fas fa-phone"></i>}
                    />
                  
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 sm-width-80">
                    <CustomFormField
                      label="Correo"
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      error={errorMessages.correo}
                      hintText="Ingrese su correo electrónico"
                      icon={<i className="fas fa-envelope"></i>}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{display: 'none'}}>
                <div className="col-md-12">
                  <div className="mb-3">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      name="aceptaTerminos"
                      checked={formData.aceptaTerminos}
                      onChange={handleAceptaTerminosChange}
                      className={`form-check-input ${
                        errorMessages.aceptaTerminos ? "is-invalid" : ""
                      }`}
                      id="terminosCheck"
                    />
                    <label className="form-check-label" htmlFor="terminosCheck">
                      Acepta los términos y condiciones
                    </label>
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={handleShowTerms}
                      style={{ padding: 0, textDecoration: "underline" }}
                    >
                      Leer términos y condiciones
                    </button>
                    {errorMessages.aceptaTerminos && (
                      <div className="invalid-feedback">
                        {errorMessages.aceptaTerminos}
                      </div>
                    )}
                  </div>

                  </div>
                </div>
              </div>


              <button
                type="submit"
                className={`btn btn-primary ${loading ? "disabled" : ""}`}
                style={{
                  width: "15%",
                  backgroundColor: loading ? "#999" : "#007bff",
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm text-light me-2"
                      role="status"
                    ></div>
                    <span style={{ marginRight: "5px" }}>Enviando...</span>
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>      
    </div>
  );
}

export default ContentRegistrar;
