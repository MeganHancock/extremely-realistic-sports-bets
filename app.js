let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

function draftPlayers() {
    console.log('drafting teams')
    // const newTeamNumber = Math.ceil(Math.random() * 2)
    // console.log('team number', newTeamNumber)

    // for (let i = 0; i < players.length; i++) {
    //     const player = players[i]
    //     player.teamNumber = newTeamNumber
    //     console.log(player.name, player.teamNumber)
    // }
    players.forEach(player => player.teamNumber = Math.ceil(Math.random() * 2))
    console.log('team number', players)

    drawTeamOne()
    drawTeamTwo()
}

function drawTeamOne() {
    let rosterTemplate = ''

    const teamOnePlayers = players.filter(player => player.teamNumber == 1)

    teamOnePlayers.forEach(player => rosterTemplate += player.emoji)

    const playerRosterElement = document.getElementById('teamOneRoster')
    playerRosterElement.innerText = rosterTemplate
}

function drawTeamTwo() {
    let rosterTemplate = ''

    const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

    teamTwoPlayers.forEach(player => rosterTemplate += player.emoji)

    const playerRosterElement = document.getElementById('teamTwoRoster')
    playerRosterElement.innerText = rosterTemplate
}


function betTeamOne(betAmount) {
    if (bank > 0) {
        const teamOnePlayers = players.filter(player => player.teamNumber == 1)
        const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

        let teamOneTotalSkill = 0
        teamOnePlayers.forEach(player => { teamOneTotalSkill += player.skill })
        let teamTwoTotalSkill = 0
        teamTwoPlayers.forEach(player => { teamTwoTotalSkill += player.skill })



        if (teamOneTotalSkill > teamTwoTotalSkill) {
            bank += betAmount
        } else {
            bank -= betAmount
        }
        console.log(bank)
    } else {
        window.alert('Go Home Loser')
    }
    drawBank()
}

function betTeamTwo(betAmount) {
    if (bank > 0) {
        const teamOnePlayers = players.filter(player => player.teamNumber == 1)
        const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

        let teamOneTotalSkill = 0
        teamOnePlayers.forEach(player => { teamOneTotalSkill += player.skill })
        let teamTwoTotalSkill = 0
        teamTwoPlayers.forEach(player => { teamTwoTotalSkill += player.skill })



        if (teamOneTotalSkill < teamTwoTotalSkill) {
            bank += betAmount
        } else {
            bank -= betAmount
        }
        console.log(bank)
    } else {
        window.alert('Go Home Loser')
    }
    drawBank()
}

function drawBank() {
    const bankElement = document.getElementById('bankAmount')
    bankElement.innerText = bank
}
// SECTION functions invoked upon page load

draftPlayers()