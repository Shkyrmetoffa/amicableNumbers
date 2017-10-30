const properDivisors = num => {
    let divisors = [1];

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i, num / i);
            if (i === Math.sqrt(num)) {
                divisors.pop();
            }
        }
    }
    return divisors.sort((val1, val2) => val1 - val2);
};

const getDivisorsSum = divisor => properDivisors(divisor).reduce((memo, value) => memo + value);

const isAmicableNumber = value => {
    let divVal = getDivisorsSum(value);
    if (divVal === value) {
        return false;
    }
    return getDivisorsSum(divVal) === value;
};

const getFriendlyNumbers = (start, end) => {
    let amicableNumbers = [];
    let i = 0;
    if (
        start <= end &&
        typeof start === 'number' &&
        start > 0 &&
        end > 0 &&
        typeof end === 'number'
    ) {
        for (i = start + 1; i < end; i++) {
            if (isAmicableNumber(i)) {
                amicableNumbers.push(i);
            }
        }
    } else {
        return false;
    }

    if (amicableNumbers.length > 0) {
        return amicableNumbers.reduce(
            (acc, item) =>
            acc[acc.length - 1].length < 2 ?
            (acc[acc.length - 1].push(item), acc) :
            (acc.push([item]), acc), [
                []
            ]
        );
    }
    return amicableNumbers;
};

module.exports = {
    firstName: 'Jane',
    secondName: 'Shkyrmetoffa',
    task: getFriendlyNumbers
}