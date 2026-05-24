let money = localStorage.getItem("wallet");

if(money == null){
money = 0;
localStorage.setItem("wallet",0);
}

document.getElementById("wallet").innerHTML = money;

document.getElementById("addmoney").onclick = function(){

let add = prompt("Enter Amount");

if(add != null){

money = parseInt(money) + parseInt(add);

localStorage.setItem("wallet",money);

document.getElementById("wallet").innerHTML = money;

alert("Money Added Successfully");

}

}
