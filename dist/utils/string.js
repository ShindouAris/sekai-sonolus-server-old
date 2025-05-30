// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const capitalize = (str) => str && str[0].toLocaleUpperCase() + str.substring(1);
export const format = (template, values) => {
    const [first, ...rest] = template.split('{}');
    let result = first ?? '';
    for (const [index, part] of rest.entries()) {
        result += values[index] ?? '';
        result += part;
    }
    return result;
};
