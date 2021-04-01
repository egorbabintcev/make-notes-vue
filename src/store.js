const store = {
  get instance() {
    return JSON.parse(localStorage.getItem('store')) || [];
  },
  set instance(value) {
    localStorage.setItem('store', JSON.stringify(value));
  },
  getAll() {
    return this.instance;
  },
  create(value) {
    this.instance = [...this.instance, value];
  },
  delete(id) {
    this.instance = this.instance.filter((n) => n.id !== id);
  },
};

export default store;
