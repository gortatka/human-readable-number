module.exports = function toReadable(number) {
    let digit = ['one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];
    let digitTh = ['ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    let digitZ = ['twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if (number == undefined || number == 0) return 'zero';
    if (number <= 9) return digit[number - 1];
    if (number <= 19) return digitTh[number - 10];
    if (number <= 99) {
        return `${digitZ[Math.floor(number / 10) - 2]}${number % 10 != 0 ? ' ' + digit[number % 10 - 1] : ''}`;
    }
    return `${digit[Math.floor(number / 100) - 1]} hundred${number % 100 != 0 ? ' ' + toReadable(number % 100) : ''}`;
}