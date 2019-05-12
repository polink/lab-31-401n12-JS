// Vinicio - we know that actions are just objects

export const createCategory = (title) => {
  // Vinicio - returning an object that represents the action
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: Math.random(),
      timestamp: new Date(),
      title,
      budget: 0,
    }
  }
};

export const updateCategory = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  }
};

export const deleteCategory = (category) => {
  return {
    type: 'CATEGORY_DELETE',
    payload: category,
  }
};
