function moveTen(s){
  let letters = s.split("")
  let numbers = []
  
  for(let i = 0; i < letters.length; i++) {
    numbers[i] = letters[i].charCodeAt() + 10
    
    if (numbers[i] > 122) {
      numbers[i] = 96 + (numbers[i] - 122)
    }
    
  }
  return (numbers.map((item) => String.fromCharCode(item))).join("")
}



moveTen("alz")
