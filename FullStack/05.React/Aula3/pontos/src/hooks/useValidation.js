function useValidation() {
  const validation = (values) => {
    const errors = {};
    if (values.name.length < 5) {
      errors.name = "Name should have at least 5 characters.";
    }
    if (values.password.length < 10) {
      errors.password = "Password should have at least 10 characters.";
    }
    return errors;
  };
  return { validation };
}

export default useValidation;
