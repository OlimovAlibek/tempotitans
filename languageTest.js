function trilingualDemocracy(group) {
  let splitted = group.split("")
  console.log(splitted)
  let object = {}
  for (let i = 0; i < splitted.length; i++ ) {
    if (object[splitted[i]]) {
      object[splitted[i]] = object[splitted[i]] + 1
    }
    
    else {
      object[splitted[i]] = 1;
    }
  }
  
  const languages = ["D","F","I", "K"]
  
 console.log(object)  //[N:1. F:1, S:1]
  
  
  if (Object.keys(object).length === 1) {
    return splitted[0]
  }
  
  for (let lang in object) {
    if (object[lang] === 1 && Object.keys(object).length === 2){
      return lang
    }
  }
  
  if (Object.keys(object).length === 3) {
    for (let i = 0; i < languages.length; i++) {
      if(!object[languages[i]]) {
        return languages[i]
      }
    }
  }
  
}

trilingualDemocracy("DNS")
