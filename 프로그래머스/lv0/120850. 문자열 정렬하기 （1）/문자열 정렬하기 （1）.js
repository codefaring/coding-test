const solution = (my_string) =>
    my_string.replace(/[^0-9]/g, '').split('').sort((a, b) => a-b).map((num) => Number(num));