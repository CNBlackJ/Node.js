function generateKolId (kolId = 'A00001') {
  // A00001 - Z99999
  const maxNum = 99999
  const firstLetter = kolId.slice(0, 1)
  const number = Number(kolId.slice(1, 6))
  const newLetter = number === maxNum ? String.fromCharCode(firstLetter.charCodeAt() + 1) : firstLetter
  const newNumber = addZero(number === maxNum ? 1 : number + 1)

  const newKolId = `${newLetter}${newNumber}`
  return newKolId
}

function addZero (num, len = 5) {
  let result = String(num)
  while (result.length < len) {
    result = '0' + result
  }
  return result
}

console.log(generateKolId('Y99999'))