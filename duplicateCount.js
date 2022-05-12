// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    text = text.toLowerCase();
    let textArr = text.split('');
    let repeats = 0;
    let repeatCharacters = []
    for (i = 0; i < textArr.length; i++) {
        console.log('This is text of I ' + textArr[i])
        for (j = i + 1; j < textArr.length; j++) {
            console.log('This is text of J ' + textArr[j])
            if (textArr[i] == textArr[j] && !repeatCharacters.includes(textArr[i])){
                repeats++;
                repeatCharacters.push(textArr[i])
            }
        }
    }
    console.log('Number of repeats: ' + repeats)
    console.log('Repeat characters : ' + repeatCharacters)

    return repeats
}


// Smart and Easier Way

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
