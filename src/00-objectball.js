function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSangna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
    return obj;
}

function numPointsScored(playerName) {
    let game = gameObject();

    for (key in game) {
        let playerInfo = game[key]["players"][playerName]
        if (playerInfo !== undefined) {
            return playerInfo["points"];
        }
    }
}


function shoeSize(playerName) {
    let game = gameObject();

    for (key in game) {
        let playerInfo = game[key]["players"][playerName]
        if (playerInfo !== undefined) {
            return playerInfo["shoe"]
        }
    }
}


function teamColors(teamName) {
    let game = gameObject();

    for (key in game) {
        let playerInfo = game[key]["teamName"]
        if (playerInfo === teamName) {
            return game[key]["colors"]
        }
    }
}


function teamNames() {
    let game = gameObject();

    let newArray = [];
    for (key in game) {
        let info = game[key]["teamName"]
        newArray.push(info)
    }

    return newArray
}


function playerNumbers(teamName) {
    let game = gameObject();

    let newArray = [];
    for (key in game) {
        if (teamName === game[key]["teamName"]) {
            let players = game[key]["players"]
            for (key in players) {
                newArray.push(players[key]["points"])
            }
        }
    }

    return newArray;
}


function playerStats(playerName) {
    let game = gameObject();

    for (key in game) {
        let playerInfo = game[key]["players"][playerName]
        if (playerInfo !== undefined) {
            return playerInfo
        }
    }
}


function bigShoeRebounds() {
    let game = gameObject();

    let allShoeSizes = []

    
    let playersHome = game["home"]["players"]
    let playersAway = game["away"]["players"]

    for (player in playersHome) {   
        shoeSizes = playersHome[player]["shoe"]
        allShoeSizes.push(shoeSizes)            
    }

    for(player in playersAway) {
        shoeSizes = playersAway[player]["shoe"]
        allShoeSizes.push(shoeSizes)
    }
    
    const largestShoeSize = Math.max(...allShoeSizes)

    for (key in game) {
        let players = game[key]["players"]
        for (player in players) {
            let shoeSizes = game[key]["players"][player]["shoe"]
            if (largestShoeSize === shoeSizes) {
                let bigShoePlayer = player
                let bigShoeReboundAnswer = game[key]["players"][bigShoePlayer]["rebounds"]
                return bigShoeReboundAnswer
            }
        }
    }
}


function mostPointsScored() {
    let game = gameObject();

    let pointsScored = [];

    let playersHome = game["home"]["players"]
    let playersAway = game["away"]["players"]

    for (player in playersHome) {
        let points = playersHome[player]["points"]
        pointsScored.push(points)
    }

    for (player in playersAway) {
        let points = playersAway[player]["points"]
        pointsScored.push(points)
    }

    const largestPointsScored = Math.max(...pointsScored);

    for (key in game) {
        let players = game[key]["players"]
        for (player in players) {
            let points = game[key]["players"][player]["points"];
            if (largestPointsScored === points) {
                let bigPointPlayer = player;
                return bigPointPlayer
            }
        }
    }
}

// function winningTeam() {
//     let game = gameObject();

//     let pointsScoredHome = [];
//     let pointsScoredAway = [];

//     let playersHome = game["home"]["players"]
//     let playersAway = game["away"]["players"]

//     for (player in playersHome) {
//         let points = playersHome[player]["points"]
//         pointsScoredHome.push(points)
//     }

//     for (player in playersAway) {
//         let points = playersAway[player]["points"]
//         pointsScoredAway.push(points)
//     }

//     console.log(pointsScoredHome)

//     let totalPointsHome = pointsScoredHome.reduce((a, b) => a + b, 0)
//     let totalPointsAway = pointsScoredAway.reduce((a, b) => a + b, 0)
    
// }
