function theBeatlesPlay(musicians, instruments){
  let array = []
  // musicians.forEach(function(){}, )
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let array = []
  for (let i = 0; i <facts.length; i++){
    array.push(facts[i] + "!!!")
  }
    return array
}

function iLoveTheBeatles(num){
  let array = []
  do{
    array.push("I love the Beatles!")
    num++
  }
    while (num<15)
    return array
}
