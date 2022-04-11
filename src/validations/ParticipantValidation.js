const ParticipantValidation = (values) => {
    const errors = {};
  
    if (!values.full_name || values.full_name === "") {
      errors.full_name = "Name must be filled!";
    }
  
    let fn = String(values.full_name)
    if (fn.length > 20) {
      errors.full_name = "Max 20 characters";
    }

    if (!values.business_name || values.business_name === "") {
      errors.business_name = "Business name must be filled";
    }
  
    if (!values.email || values.email === "") {
      errors.email = "Email must be filled";
    }

    let email = String(values.email).toLocaleLowerCase()
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(email)){
      errors.email = "Email format does not match";
    }

    if (!values.phone_number || values.phone_number === "") {
      errors.phone_number = "Phone number must be filled";
    }
    let pn = String(values.phone_number)
    if (pn.length < 8 || pn.length > 13) {
      errors.phone_number = "The format of the cellphone number is at least 8, maximum is 13";
    }
    return errors
  };
  
  export default ParticipantValidation;