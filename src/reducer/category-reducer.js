export default (state = [], {type, payload}) => {
  // Vinicio - remember to understand your payload
  // Vinicio - in this case, the payload is a section
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      // Vinicio - we are going to use map
      return null;
    case 'CATEGORY_DELETE':
      // Vinicio - we are going to use filter
      return null;
    default:
      return state;
  }
};