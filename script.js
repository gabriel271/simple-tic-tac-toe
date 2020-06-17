const table = document.querySelectorAll("td");
let turn = false;
let gameIsOver = false;

table.forEach(td => {
  td.addEventListener("click", () => write(td));
});

function write(td){
  if(gameIsOver === true){
    gameIsOver = false
  }
  if(td.textContent !== ""){
    return
  }
  if(turn){
    td.innerHTML = "X";
  }else{
    td.innerHTML = "O";
  }
  gameOver();
  if(gameIsOver){
    return
  }
  turn = !turn;
  if(document.getElementById('opts').value === "pc"){
    if(turn){
      pcWrite("X", "O");
    }else{
      pcWrite("O", "X");
    }
    gameOver();
    turn = !turn;
  }
}

function pcWrite(letter, player){
  let values = "";
  for(let i = 0; i < table.length; i++){
    values += table[i].textContent;
  }
  if(values.length === 9){
    setTimeout(()=>clearTable(), 1000);
    console.log(values)
    return
  }
  // CASO O PC ESTIVER PRESTES A GANHAR ELE MARCA NA CASA NECESSÁRIA
  for(let i = 0; i < table.length-3; i += 3){
    if(table[i].textContent  + table[i+1].textContent + table[i+2].textContent === `${letter}${letter}`){
      table[i].innerHTML = `${letter}`;
      table[i+1].innerHTML = `${letter}`;
      table[i+2].innerHTML = `${letter}`;
      gameIsOver = true
      return
    }
  }
  for(let i = 0; i < 3; i++){
    if(table[i].textContent  + table[i+3].textContent + table[i+6].textContent === `${letter}${letter}`){
      table[i].innerHTML = `${letter}`;
      table[i+3].innerHTML = `${letter}`;
      table[i+6].innerHTML = `${letter}`;
      gameIsOver = true
      return
    }
  }
  if(table[4].textContent + table[0].textContent + table[8].textContent === `${letter}${letter}`){
    table[0].innerHTML = `${letter}`;
    table[4].innerHTML = `${letter}`;
    table[8].innerHTML = `${letter}`;
    gameIsOver = true
    return
  }
  if(table[4].textContent + table[2].textContent + table[6].textContent === `${letter}${letter}`){
    table[2].innerHTML = `${letter}`;
    table[4].innerHTML = `${letter}`;
    table[6].innerHTML = `${letter}`;
    gameIsOver = true
    return
  }
  // VERIFICAR SE O PLAYER ESTÁ PRESTES A GNAHAR
  for(let i = 0; i < table.length-3; i += 3){
    if(table[i].textContent  + table[i+1].textContent + table[i+2].textContent === `${player}${player}`){
      if(table[i].textContent === ""){
        table[i].textContent = `${letter}`;
      }
      if(table[i+1].textContent === ""){
        table[i+1].textContent = `${letter}`;
      }
      if(table[i+2].textContent === ""){
        table[i+2].textContent = `${letter}`;
      }
      return
    }
  }
  for(let i = 0; i < 3; i++){
    if(table[i].textContent  + table[i+3].textContent + table[i+6].textContent === `${player}${player}`){
      if(table[i].textContent === ""){
        table[i].textContent = `${letter}`;
      }
      if(table[i+3].textContent === ""){
        table[i+3].textContent = `${letter}`;
      }
      if(table[i+6].textContent === ""){
        table[i+6].textContent = `${letter}`;
      }
      return
    }
  }
  if(table[4].textContent + table[0].textContent + table[8].textContent === `${player}${player}`){
    if(table[4].textContent === ""){
      table[4].textContent = `${letter}`;
    }
    if(table[0].textContent === ""){
      table[0].textContent = `${letter}`;
    }
    if(table[8].textContent === ""){
      table[8].textContent = `${letter}`;
    }
    return
  }
  if(table[4].textContent + table[2].textContent + table[6].textContent === `${player}${player}`){
    if(table[4].textContent === ""){
      table[4].textContent = `${letter}`;
    }
    if(table[2].textContent === ""){
      table[2].textContent = `${letter}`;
    }
    if(table[6].textContent === ""){
      table[6].textContent = `${letter}`;
    }
    return
  }
  // SE NINGUÉM ESTIVER PRESTES A GANHAR O PC ESCOLHE UMA CASA ALEATORIA QUE ESTÁ VAZIA
  while(true){
    let index = (Math.random() * 10).toFixed(0);
    if(index >= 9){
      index = 8
    }
    if(table[index].textContent === ""){
      table[index].innerHTML = `${letter}`;
      break
    }
  }
}

function clearTable(){
  table.forEach(td => {
    td.innerHTML = "";
  });
}

function gameOver(){
  for(let i = 0; i < table.length-2; i +=3){
    if(table[i].textContent === table[i+1].textContent 
      && table[i].textContent === table[i+2].textContent 
      && table[i].textContent !== ""){
        gameIsOver = true;
        table[i].innerHTML = `<del>${table[i].textContent}</del>`;
        table[i+1].innerHTML = `<del>${table[i+1].textContent}</del>`;
        table[i+2].innerHTML = `<del>${table[i+2].textContent}</del>`;
        setTimeout(()=>clearTable(), 1000);
        return
    }
  }
  for(let i = 0; i < 3; i++){
    if(table[i].textContent === table[i+3].textContent 
      && table[i].textContent === table[i+6].textContent 
      && table[i].textContent !== ""){
        gameIsOver = true;
        table[i].innerHTML = `<del>${table[i].textContent}</del>`;
        table[i+3].innerHTML = `<del>${table[i+3].textContent}</del>`;
        table[i+6].innerHTML = `<del>${table[i+6].textContent}</del>`;
        setTimeout(()=>clearTable(), 1000);
        return
    }
  }
  if(table[0].textContent === table[4].textContent
    && table[0].textContent === table[8].textContent
    && table[0].textContent !== ""){
      gameIsOver = true;
      table[0].innerHTML = `<del>${table[0].textContent}</del>`;
      table[4].innerHTML = `<del>${table[4].textContent}</del>`;
      table[8].innerHTML = `<del>${table[8].textContent}</del>`;
      setTimeout(()=>clearTable(), 1000);
      return
    }
  if(table[2].textContent === table[4].textContent
    && table[2].textContent === table[6].textContent
    && table[2].textContent !== ""){
      gameIsOver = true;
      table[2].innerHTML = `<del>${table[2].textContent}</del>`;
      table[4].innerHTML = `<del>${table[4].textContent}</del>`;
      table[6].innerHTML = `<del>${table[6].textContent}</del>`;
      setTimeout(()=>clearTable(), 1000);
      return
    }
  
}