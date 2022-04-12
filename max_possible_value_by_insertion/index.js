function solution(A) {
  let input = Math.abs(A).toString()
  let ans = [];

  for(let i = 0; i < input.length+1; i++) {
    ans.push(input.substring(0,i) + '5' + input.substring(i))
  }
  ans = ans.map(Number) 

  if (B < 0) {
    return (Math.min(...ans) * -1)
  } else {
    return Math.max(...ans)
  }  
}

//alternative solution without built-in function
function solution(B) {
  let input = B.toString().split("")
  let temp = B.toString().split("")
  let ans = [];

  for(let i = 0; i < input.length+1; i++) {
    temp.splice(i, 0,'5')
    if(temp.includes('-')) {
      temp.splice(1,1)
    }
    ans.push(parseInt(temp.join("")))
    temp.splice(i, 1)
  }

  if (B < 0) {
    return (Math.min(...ans) * -1)
  } else {
    return Math.max(...ans)
  }
}

module.exports = solution