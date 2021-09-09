// const record = [
//     { year: "2018", result: "L" },
//     { year: "2017", result: "W" },
//     { year: "2016", result: "N/A" }
// ]

function superbowlWin(arr) {
    const result = arr.find(win => win.result === "W")
    // debugger
    return result ? result.year : undefined
}

// superbowlWin(record)