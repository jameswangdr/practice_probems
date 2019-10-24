function hiker (string) {
    let level = 0
    let valley = 0;
  
    let hill = string.split("");
  
    for (i = 0; i < hill.length; i++) {
      let diff = 0;
      let up = 0;
      let down = 0;
      if (hill[i] === "U") {
        up++;
        level++
        if (level === 0) {
        valley++;
        }
      }
  
      if (hill[i] === "D") {
        down++;
        level--;
      }
  
    }
    //check starting point
    //go up or down // check if above or below 
    // go up or down, check if above or below
  
  
    return valley;
  };
  
  hiker("DUDU");