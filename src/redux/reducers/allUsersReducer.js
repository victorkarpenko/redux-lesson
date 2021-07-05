const initialState = [
  { email: "a@gmail.com", pass: "111111" },
  { email: "b@gmail.com", pass: "441111" },
  { email: "c@gmail.com", pass: "115511" },
];

const allUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "contacts/ADD_USER":
      const newS = [...state, payload];
      return newS;

    case "contacts/DELETE_USER":
      const newSt = state.filter((elem) => elem.email !== payload);
      return newSt;

    default:
      return state;
  }
};

export default allUsersReducer;
