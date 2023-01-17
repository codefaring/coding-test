function solution(money) {
    let coffee = 0;
    while(5500 <= money) {
        money -= 5500;
        coffee++;
    }
    return [coffee, money];
}