//is include vowel charaction for a letter
function isIncludeVowelCharacter(letter) {
    if ('aeiou'.indexOf(letter) > -1) {
        return true;
    }else {
        return false;
    }
}

// count the str
function countStr(str) {
    let counter = 0;
    for(let i of str) {
        if(isIncludeVowelCharacter(i)) {
            counter ++;
        }
    }
    return counter;
}

//vowelProportionMoreThan 30%
function vowelProportionMoreThan(str) {
    const counter = countStr(str);
    if(str.length / counter > 0.3) {
        return true;
    }else {
        return false;
    }
}

//is repeater vowel letter for the str
function isRepeatVowel(str) {
    let fragment = '';
    for(let i=0; i<str.length; i++) {
        if(isIncludeVowelCharacter(str[i])) {
            if(isIncludeVowelCharacter(str[i-1])) {
                fragment += '';
            }else {
                fragment += 'mommy';
            }
        }else {
            fragment += str[i];
        }
    }
    return fragment;
}

//main
function mommy(str) {
    if (vowelProportionMoreThan(str)) {
        return isRepeatVowel(str);
    }else {
        return str;
    }
}

console.log(mommy('asead'));

module.exports = mommy;