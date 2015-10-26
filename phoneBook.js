'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

module.exports.add = function add(name, phone, email) {

    var regExPhone = /^((\+\d{1,2}|\d{1,2})[\-]?)?\s?(\(\d{3}\)|\d{3})\s?\d{3}([\-]\d[\-]|\s\d\s|\d)\d{3}$/;
    var regExpEmailAddress = /^([a-z0-9._-])*@([a-zа-я0-9_-]+\.)+([a-zа-я]+)$/i;

    if (regExPhone.test(phone) && regExpEmailAddress.test(email)) {
        var contact = {
            name: name,
            phone: phone,
            email: email
        };
        phoneBook.push(contact);
        console.log(name + ' был успешно добавлен');
    } else {
        console.log(name + ' не прошел проверку');
    }
};

module.exports.find = function find(query) {
    for (var i = 0; i < phoneBook.length; i++) {
        if ((phoneBook[i].name.indexOf(query) > -1) || (phoneBook[i].phone.indexOf(query) > -1) || (phoneBook[i].email.indexOf(query) > -1) || (query === undefined)) {
            console.log(phoneBook[i]);
        }
    }
};

module.exports.remove = function remove(query) {
    var deletedCount = 0;
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.indexOf(query) > -1 || phoneBook[i].phone.indexOf(query) > -1 || phoneBook[i].email.indexOf(query) > -1) {
            console.log(phoneBook[i].name + ' удален');
            phoneBook.splice(i, 1);
            deletedCount += 1;
        }
    }
    console.log('было удалено ' + deletedCount + ' контактов');
};

