let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num)
    return countDownFrom(num - 1)
}

countDownFrom(10)
