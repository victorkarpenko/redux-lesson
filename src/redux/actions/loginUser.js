export const loginUser = (user) => {
  return {
    type: "contacts/LOGIN_USER",
    payload: {
      email: user.email,
      password: user.pass,
    },
  };
};
