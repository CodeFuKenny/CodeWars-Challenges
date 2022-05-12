// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let eW = 0
    let nS = 0;
    for (i = 0; i < walk.length; i++) {
        // if you go east, eW += 1; 
        // if (walk[i] == 'e') {
        //     eW += 1;
        // }
        // // if you go west, eW -= 1; 
        // else if (walk[i] == 'w') {
        //     eW -= 1;
        // }
        // // if you go north, nS += 1; 
        // else if (walk[i] == 'n') {
        //     nS += 1;
        // }
        // // if you go south, nS -= 1;
        // else if (walk[i] == 's') {
        //     nS -= 1;
        // }
        // console.log( `I went ${walk[i]} and my eastWest location is: ${eW} and my northSouth llocation is: ${nS}.`)

        // Using swich statement
        switch (walk[i]) {
            case 'n': nS++; break;
            case 's': nS--; break;
            case 'e': eW++; break;
            case 'w': eW--; break;
        }
    }
    // Only returns true if the length is 10 and you have the same start points
    return walk.length ==10 && nS == 0 && eW == 0;
}