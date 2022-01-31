function breakingRecords(scores) {
    let most = scores[0]
    let least = scores[0]
    let countmax = 0
    let countmin = 0
  
    for (let i of scores){
      if(i > most){
        most = i
        countmax += 1
      }
      if( i < least){
        least = i
        countmin += 1
      }
    }
    return [countmax,countmin]
  }
  
  document.write(breakingRecords([3,4,21,36,10,28,35,5,24,42]))