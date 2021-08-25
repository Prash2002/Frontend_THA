const nameAction = (input) => {
  return {
    type: "NAME",
    payload: input,
  };
};

const emailAction = (input) => {
  return {
    type: "EMAIL",
    payload: input,
  };
};

export { nameAction, emailAction };
