// https://dog.ceo/api/breeds/image/random
// .then means => Promises!


let dogImg = document.getElementById('randomDogImg')
let dogBtn = document.getElementById('dogBtn')

const imgDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(
        Response => Response.json()
    ).then(
        json => {
            console.log(json)
            dogImg.innerHTML = `<img src = '${json.message}'/>`
        }

    )
}

dogBtn.onclick = () => imgDog()
