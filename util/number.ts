export function three_random_number() {
    const three_digit_number:number[] = [];

    for (let i = 0; three_digit_number.length < 3; i++) {
        const number = Math.floor(Math.random() * 10)

        if(!three_digit_number.includes(number)){
            three_digit_number.push(number);
        }
    }

    return three_digit_number.join('');
}
