const defaultConfig = {
    
  };
  
  const getConfig = async () => {
    try {
      const response = await fetch("/data/config.json");
      if (!response.ok) {
        throw new Error("Failed to fetch contact info");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching contact info:", error);
      return defaultConfig;
    }
  };
  
  export { getConfig, defaultConfig };
  