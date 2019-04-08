function takeANumber(theLine, theName){
  theLine.push(theName)
  return `Welcome, ${theName}. You are number ${theLine.length} in line.`
}

  function nowServing(theLine){
    // returns the first person in laine
    // then removes them from that line
    // if nobody in line return the message
    if(Array.isArray(theLine) && theLine.length>0){
      return "Currently serving " + theLine.shift() + "."
    }
    else{
      return  "There is nobody waiting to be served!"
    }
  }
  
  function currentLine(theLine){
    let stmtNew="The line is currently: "
    if(!theLine.length){
      return "The line is currently empty."
    }
    else{
      for(let i=0;i<theLine.length;i++){
        stmtNew+=`${i+1}. ${theLine[i]}`
      }
    }
  }