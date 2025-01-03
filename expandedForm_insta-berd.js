const deconstructDoubles = (figureInDoubles) => {

    let [integers, fractions] = figureInDoubles.split(".")
    let integersInUnites = expandInUnits(integers, "N")
    let fractionInUnits = expandInUnits(fractions, "P")
    return integersInUnites + " + " + fractionInUnits

}

const expandInUnits = (numbers, direction) => {
    // Processing Fractions
    if (direction == "P") {
        let denominator = 1
        let text = ""
        for (let index = 0; index < numbers.length; index++) {
            denominator = denominator * 10
            currentDigit = numbers[index]

            if (currentDigit > 0) {
                text === "" ?
                    text = currentDigit + "/" + denominator :
                    text = text + " + " + currentDigit + "/" + denominator
            }
        }
        return text

    }
    // Processing Integers
    else if (direction == "N") {
        let unit = 1
        let text = " "

        // the last digit in the array could be proccessed right of the bat since it will not be presented as a unit
        // the last digit is written on the outputArray
        let currentDigit = numbers[numbers.length - 1]
        if (currentDigit == 0 && numbers.length == 1) return ". "

        currentDigit == 0 ? text = "" : text = text + currentDigit
        let index = numbers.length - 2

        //A while loop  starting at the second last digit, checking if it is not out of range and continuing until the index is at less than 0
        while (index >= 0 && numbers[index] != undefined) {
            unit = unit * 10
            if (numbers[index] > 0) {
                text === "" ?
                    text = numbers[index] * unit :
                    text = numbers[index] * unit + " + " + text
            }
            index--
        }

        return text
    }
}