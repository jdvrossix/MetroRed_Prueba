const defaultContactInfo = {
  telefono: "(+56) 989281898",
  correo_pqr: "pqr@amibus.cl",
  correo_rdr: "rdr@amibus.cl",
  cuenta_banco: "07045751",
  nombre_banco: "BICE",
};

const getContactInfo = async () => {
  try {
    const response = await fetch("/data/contactInfo.json");
    if (!response.ok) {
      throw new Error("Failed to fetch contact info");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return defaultContactInfo;
  }
};

export { getContactInfo, defaultContactInfo };
