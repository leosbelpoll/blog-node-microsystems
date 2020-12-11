const db = {
    user: [
        {
            id: '1',
            name: 'Leo'
        },
        {
            id: '2',
            name: 'Yai'
        },
    ]
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    return db[table].find(item => item.id === id);
}

async function upsert(table, data) {
    db[table].push(data);
}

async function remove(table, id) {
    db[table] = db[table].filter(item => item.id !== id);
}

module.exports = {
    list,
    get,
    upsert,
    remove
}
