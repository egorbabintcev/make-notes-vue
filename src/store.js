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
  getOne(id) {
    return this.instance.find((n) => n.id === id);
  },
  create(value) {
    this.instance = [value, ...this.instance];
  },
  delete(id) {
    this.instance = this.instance.filter((n) => n.id !== id);
  },
  update(id, payload) {
    this.instance = this.instance.map((n) => {
      if (n.id === id) {
        return { ...n, ...payload };
      }
      return n;
    });
  },
};

export default store;
