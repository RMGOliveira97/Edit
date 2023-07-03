
function useSubmit() {
  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      actions.setSubmitting(false);
    }, 1000);
  };
  return { handleSubmit };
}

export default useSubmit;
