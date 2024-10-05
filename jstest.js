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


function sockMerchant(n, ar) {
    let obj = {}
    
    for(let i = 0; i < ar.length; i++){
      if(obj[ar[i]]) {
        obj[ar[i]]++
      }
      else {
        obj[ar[i]] = 1
      }
    }
  
  let count = 0
  
  for(let num in obj) {
    if(obj[num] >= 2) {
      count += parseInt(obj[num]/2)
    }
  }
  return count

}
sockMerchant(7, [1,2,1,2,1,3,2,3,4,4])
