function solution(coupon) {
    let result = 0;
    while (coupon >= 10) {
        const service = Math.floor(coupon / 10);
        coupon = Math.floor(coupon % 10) + service;
        result += service;
    }
    return result;
}