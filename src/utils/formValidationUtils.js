export const validateFirstName = (firstName) => {
  return firstName.length >= 3 && firstName.length <= 25;
};

export const validateLastName = (lastName) => {
  return (
    lastName.length === 0 || (lastName.length >= 2 && lastName.length <= 30)
  );
};
