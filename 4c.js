function isPalindrome(word) {

    let isPalindromeWord = true;

    for (let i = 0, y = word.length - 1; x <= word.length, y >= 0; i++, y--){
        if(word[x] !== word[y])
        {
            isPalindromeWord = false;
        } 
    }
    return isPalindromeWord
}
