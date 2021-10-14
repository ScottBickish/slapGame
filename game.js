let healthbarElem = document.getElementById('health')
let currentHealth = 1000
let hit = 50
let kick = 100
let punch = 25

let kicksound = document.getElementById('audio')


function slap(healthbarElem) {
  if (currentHealth > 0) {
    currentHealth = currentHealth - hit
    document.getElementById('currenthealth').innerHTML = `currenthealth is ${currentHealth}`
    console.log(currentHealth)
  }
  if (currentHealth <= 0) {
    document.getElementById('currenthealth').innerHTML = `They Died`
    resettwo()
  }
}

function pnch(healthbarElem) {
  if (currentHealth > 0) {
    currentHealth = currentHealth - punch
    document.getElementById('currenthealth').innerHTML = `currenthealth is ${currentHealth}`
    console.log(currentHealth)
  }
  if (currentHealth <= 0) {
    document.getElementById('currenthealth').innerHTML = `They Died`
    resettwo()
  }
}

function kck(healthbarElem) {
  if (currentHealth > 0) {
    currentHealth = currentHealth - kick
    document.getElementById('currenthealth').innerHTML = `currenthealth is ${currentHealth}`
    console.log(currentHealth)
  }
  if (currentHealth <= 0) {
    document.getElementById('currenthealth').innerHTML = `They Died`
    resettwo()
  }
}

function reset() {

  setTimeout(() => {
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('currenthealth').innerHTML = `currenthealth is ${currentHealth = 1000}`
  }, 5000)
  document.getElementById('footer').classList.remove('hidden')
  console.log(currentHealth)
}


function resettwo() {
  console.log(currentHealth)
  document.getElementById('footer').classList.add('hidden')
  setTimeout(() => {
    document.getElementById('currenthealth').innerHTML = `currenthealth is ${currentHealth = 1000}`
  }, 1000)



  console.log(currentHealth)
}

function kickaudio() {
  'kick.mp3'
}