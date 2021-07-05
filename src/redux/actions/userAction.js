const addUser = (userObject) => {
  return {
    type: "contacts/ADD_USER",
    payload: userObject,
  };
};

const deleteUser = (email) => {
  return {
    type: "contacts/DELETE_USER",
    payload: email,
  };
};

const userActions = { addUser, deleteUser };
export default userActions
