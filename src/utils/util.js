module.exports = {
  getLocalStorage(itemKey) {
    try {
      return localStorage.getItem(itemKey);
    } catch (err) {
      console.log('getLocalStorage error -> ', err);
    }
  },

  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.log('setLocalStorage error -> ', err);
    }
  }
};