function writeCards(array){   
    array = ["Guadalupe", "Ollie", "Aki"];
    let message = [];
    for (let i=0; i<array.length; i++){       
        message.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);       
    }
    return message;
}
 
function countDown(num){
    num = 11;
    while (num>0) {
        console.log(num=num-1);
    }
}

