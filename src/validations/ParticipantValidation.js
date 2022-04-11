const ParticipantValidation = (values) => {
    const errors = {};
  
    if (!values.full_name || values.full_name === "") {
      errors.full_name = "Name must be filled!";
    }
  
    if (!values.business_name || values.business_name === "") {
      errors.business_name = "Business name must be filled";
    }
  
    if (!values.email || values.email === "") {
      errors.email = "Email must be filled";
    }

    if (!values.phone_number || values.phone_number === "") {
      errors.phone_number = "Phone number must be filled";
    }
    return errors
  };
  
  export default ParticipantValidation;