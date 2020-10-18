export const capitalize = string => {
    let newArr = [];
    string.split(" ").forEach(elem => {
        elem = `${elem[0].toUpperCase()}${elem.slice(1)}`;
        newArr.push(elem);
    })
    return newArr.join(" ");
}