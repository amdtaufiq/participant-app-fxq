const ParticipantValidation = (values) => {
    const errors = {};
  
    if (!values.full_name || values.full_name === "") {
      errors.full_name = "Nama harus diisi";
    }
  
    if (!values.business_name || values.business_name === "") {
      errors.business_name = "Nama bisnis harus diisi";
    }
  
    if (!values.email || values.email === "") {
      errors.email = "Email harus diisi";
    }
  
    if (!values.phone_number || values.phone_number === "") {
      errors.phone_number = "Nomor HP harus diisi";
    }
  
    return errors
  };
  
  export default ParticipantValidation;