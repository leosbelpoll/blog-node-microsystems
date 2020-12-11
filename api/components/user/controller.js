const { nanoid } = require("nanoid");
const dummyStore = require("../../../store/dummy");

const TABLE = "user";

module.exports = (store = dummyStore) => {
  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function upsert(body) {
      const item = {
          id: body.id || nanoid(),
          name: body.name
      }
    return store.upsert(TABLE, item);
  }

  function remove(id) {
    return store.remove(TABLE, id);
  }

  return {
    list,
    get,
    upsert,
    remove
  };
};
