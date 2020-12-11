const db = {
    user: [
        {
            id: 1,
            name: "Leo"
        },
        {
            id: 2,
            name: "Yai"
        },
    ]
};

function list(table) {
    return db[table];
}

function get(table, id) {
    return db[table].find(item => item.id === id);
}

function upsert(table, data) {
    db[table].push(data);
}

function remove(table, id) {
    db[table] = db[table].filter(item => item.id !== id);
}

module.exports = {
    list,
    get,
    upsert,
    remove
}
