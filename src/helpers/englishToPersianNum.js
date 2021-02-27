function englishToPersianNum(num) {

    function _changeNumChar(number) {
        let persianNumber;
        switch (number) {
            case '0':
                persianNumber = '۰';
                break;
            case '1':
                persianNumber = '۱';
                break;
            case '2':
                persianNumber = '۲';
                break;
            case '3':
                persianNumber = '۳';
                break;
            case '4':
                persianNumber = '۴';
                break;
            case '5':
                persianNumber = '۵';
                break;
            case '6':
                persianNumber = '۶';
                break;
            case '7':
                persianNumber = '۷';
                break;
            case '8':
                persianNumber = '۸';
                break;
            case '9':
                persianNumber = '۹';
                break;
        }
        return persianNumber
    }

    var newNum = '';
    for(var char of num.toString()){
        newNum += _changeNumChar(char)
    }

    return newNum
}

export default englishToPersianNum