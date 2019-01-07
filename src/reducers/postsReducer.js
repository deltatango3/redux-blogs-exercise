export default (state = [], action) => {
  //Switch statement.
  //switch: what you are checking
  switch (action.type) {
    //case 1
    case "FETCH_POSTS":
      //if case 1 is fetch posts then do this
      return action.payload;
    //always have a default fall back
    default:
      return state;
  }
};
