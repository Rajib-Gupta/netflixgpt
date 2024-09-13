export const checkValidation = ({ email, password, name }) => {
  if (!email || !password) {
    return false;
  }

  const isEmailValid = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!isEmailValid) {
    return "Email is not valid.";
  }
  const isPasswordValid = password.match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  );
  if (!isPasswordValid) {
    return "Password is not Valid.";
  }

  if (name) {
    const isNameValid = name.length > 0;
    if (!isNameValid) {
      return false;
    }
  }

  return null;
};
