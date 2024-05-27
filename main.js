let random_val = Math.floor(Math.random() * 100) + 1
let form = document.querySelector('form')
let numguess = 10;
let startguess = 0;
let playgame = undefined;
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (numguess - startguess <= 0) {
        playgame = false
    }
    else {
        playgame = true
    }
    if (playgame) {
        let guessRemaining = document.querySelector('.guessRemaining')
        let user_value = parseInt(document.querySelector('.guess-field').value)
        let result = document.querySelector('.lowhi')
        let previous_guesses = document.querySelector('.previousGuess')
        if (user_value >= 0 && user_value <= 100 && !isNaN(user_value)) {
            if (user_value == random_val) {
                result.innerHTML = 'You Guessed Correct Congrats !!'
                previous_guesses.innerHTML += ` ${user_value} `
                startguess++
                guessRemaining.innerHTML = `${numguess - startguess}`

                document.querySelector('.restart').innerHTML = `<button>Restart</button>`
                document.querySelector('.restart').addEventListener('click', function (e) {
                    random_val = Math.floor(Math.random() * 100) + 1
                    playgame = true
                    document.querySelector('.guessRemaining').innerHTML = ``
                    document.querySelector('.previousGuess').innerHTML = ``
                    document.querySelector('.lowhi').innerHTML = ``
                    numguess = 10
                    startguess = 0
                    document.querySelector('.guess-field').value = ``
                })
            }
            else if (user_value > random_val) {
                result.innerHTML = 'Guess Lower Bro'
                previous_guesses.innerHTML += ` ${user_value} `
                startguess++
                guessRemaining.innerHTML = `${numguess - startguess}`
            }
            else {
                result.innerHTML = 'Guess Higher Bro'
                previous_guesses.innerHTML += ` ${user_value} `
                startguess++
                guessRemaining.innerHTML = `${numguess - startguess}`
            }
        }
        else {
            result.innerHTML = 'Enter a valid Number'
            startguess++
            guessRemaining.innerHTML = `${numguess - startguess}`
        }
    }
    else {
        document.querySelector('.restart').innerHTML = `<button>Restart</button>`
        document.querySelector('.restart').addEventListener('click', function (e) {
            playgame = true
            document.querySelector('.guessRemaining').innerHTML = ``
            document.querySelector('.previousGuess').innerHTML = ``
            document.querySelector('.lowhi').innerHTML = ``
            numguess = 10
            startguess = 0
            random_val = Math.floor(Math.random() * 100) + 1
            document.querySelector('.guess-field').value = ``
        })
    }
})