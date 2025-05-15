export const randomize = (items, count) => {
    const pool = [...items];
    const result = [];
    while (pool.length && result.length < count) {
        const index = Math.floor(Math.random() * pool.length);
        result.push(...pool.splice(index, 1));
    }
    return result;
};
