export function findIdInArray(array, id) {
    for (let i = 0; i < array?.length; i++) {
      if (array[i].id === id) {
        return true; // ID found in the array
      }
    }
    return false; // ID not found in the array
  }