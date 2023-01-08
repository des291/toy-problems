let chessBoard = function (size) {
    let output = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((y + x) % 2 === 0) {
                output += " ";
            } else {
                output += "#";
            }
        }
        output += "\n";
    }
    console.log(output);
} 