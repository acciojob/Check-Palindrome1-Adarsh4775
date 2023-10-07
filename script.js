// complete the given function

function palindrome(str){
    str=str.replace(/[^A-Ba-b0-9]g/,"").toLowerCase();

	str === str.split("").reverse().join("");
}
module.exports = palindrome
