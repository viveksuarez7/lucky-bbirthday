const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const messageUser = document.querySelector('#message-to-user');


checkButton.addEventListener('click',()=>{
    const dobNum= parseInt(dateOfBirth.value.replaceAll('-',''));
    sumofDigits(dobNum);
    if(sumofDigits(dobNum)%luckyNumber.value===0){
        messageUser.innerText='Your Birthday is Lucky';
    }
    else{
        messageUser.innerText='Your Birthday is not Lucky'
    }   

    
})

function sumofDigits(dobNum){
    let sum=0;
    while(dobNum>0){
        sum=sum+(dobNum%10);
        dobNum=Math.floor(dobNum/10) ;
    }
    return sum;
}
