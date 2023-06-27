const lowerset ="abcdefghijklmnopqrstuvwxyz"
const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberset="1234567890"
const symbolset="!@#$%&*()-+="

let passbox = document.getElementById("pass-box");
let totallen = document.getElementById("total-char");

let numberinput = document.getElementById("numbers");
let lowerinput = document.getElementById("lower-case");
let upperinput = document.getElementById("upper-case");
let symbolinput = document.getElementById("symbols");


const generateRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatepassword=(password="")=>{
    if(upperinput.checked){
        password+=generateRandomData(upperset)
    }
    if(lowerinput.checked){
        password+=generateRandomData(lowerset)
    }
    if(symbolinput.checked){
        password+=generateRandomData(symbolset)
    }
    if(numberinput.checked){
        password+=generateRandomData(numberset)
    }
    if(password.length < totallen.value)
    {
        return generatepassword(password)
    }
    passbox.innerText = truncatestring(password,totallen.value);
}


generatepassword();


document.getElementById("btn").addEventListener("click",
function()
{
    generatepassword();
}
)

function truncatestring(str , num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr
    }
    else{
        return str;
    }
}