const userReducer = (state = null, action) => {
  switch (action.type) {
    case "contacts/LOGIN_USER":
      const newState = action.payload;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
