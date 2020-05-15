const RandomLine = numb => {
    return Math.floor((Math.random() * numb) + 1);;
}

const Show = value => console.log(value);

module.exports = { RandomLine, Show }