function englishToPersianNum(num) {

    function _replaceChar(search, replace, subject) {
        let length = search.length;
        subject = subject.toString();

        for (let i = 0; i < length; i++) {
            subject = subject.split(search[i]).join(replace[i]);
        }

        return subject;
    }
    let enums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let pnums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return _replaceChar(enums, pnums, num);
}

export default englishToPersianNum