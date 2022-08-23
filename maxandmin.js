let input = [1, 1, 2, 2, 4, 4, 4, 4, 5];
let m = 0;
let l = {};
let j = input[0];
for (i = 0; i < input.length; i++) {
    m = m + 1;
    if (input[i] != j) {
        l[j] = m;
        j = input[i]
        m = 0
    };
    if (i === input.length - 1) {
        l[j] = m + 1;
    }
};
let res = [];
const values = Object.values(l);
let minimum = Math.min(...values);
let maximum = Math.max(...values);

for (key in l) {
    if (l[key] === maximum) {
        res.push(parseInt(key, 10));
        break;
    }
};

for (key in l) {
    if (l[key] === minimum) {
        res.push(parseInt(key, 10));
        break;
    }
};

console.log(res);