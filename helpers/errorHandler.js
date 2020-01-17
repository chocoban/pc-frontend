import toastr from 'toastr';

export default errors => {
  const allErrors = errors[0].customError;
  allErrors.map(error => {
    toastr.error(error.msg);
  });
};
