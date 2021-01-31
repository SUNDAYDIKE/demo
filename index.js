const manButton = document.getElementById("man_button");  //ボタンと入力金額の準備
const senButton = document.getElementById("sen_button");
const hyakuButton = document.getElementById("hyaku_button");
const juButton = document.getElementById("ju_button");
const ichiButton = document.getElementById("ichi_button");
const defButton = document.getElementById("def_button");
const clearButton = document.getElementById("clear_button");
let amountInput = 0;

const input = (add) => {                                 //代入された金額を合算し表示する関数
    amountInput += add;
    const inputElem = document.getElementById("input");
    inputElem.textContent = amountInput;

};

manButton.addEventListener('click', () => {             //関数inputにボタンに応じた金額を代入
    input(10000);

});

senButton.addEventListener('click', () => {
    input(1000);
    
});

hyakuButton.addEventListener('click', () => {
    input(100);
    
});

juButton.addEventListener('click', () => {
    input(10);
    
});

ichiButton.addEventListener('click', () => {
    input(1);
    
});


const clearAmount = () => {                             //入力金額の表示を消し、値を0にする関数
    const inputElem = document.getElementById("input");
    inputElem.textContent = "";
    amountInput = 0;
    
};

defButton.addEventListener('click', () => {             //合算した入力金額を確定し、日時と共に記録する
    let amountDef = amountInput;
    clearAmount();

    const nowTime = Date.now();
    let nowDate = new Date(nowTime);
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();
    let hour = nowDate.getHours();
    let minute = nowDate.getMinutes();

    const table = document.getElementById("record");
    const newRow = table.insertRow(0);
    const newCell = newRow.insertCell(0);
    const newText = document.createTextNode(`${year}年${month}月${day}日${hour}時${minute}分に ${amountDef}円 使った`);
    newCell.appendChild(newText);
    
});

clearButton.addEventListener('click', () => {           //合算中の入力金額をクリア
    clearAmount();
  
});