const myButton = document.querySelector('div.button');
let ticketPrice;
let priceYetCalculated = false;

myButton.addEventListener('click',
    function(){
        if(priceYetCalculated == false){

            const totKm = document.getElementById('tot-km');
            const userAge = document.getElementById('user-age');  
            ticketPrice = totKm.value * 0.233;

            if(parseInt(userAge.value) > 65){

                const priceDiscount = (37.7 / 100) * ticketPrice;
                ticketPrice -= priceDiscount;

            }else if(parseInt(userAge.value) < 18){

                const priceDiscount = (19.4 / 100) * ticketPrice;
                ticketPrice -= priceDiscount;

            }else if((userAge.value == undefined)||(userAge.value < 0)){

                alert("L'età inserita non è valida!");
                return;
            }

            document.getElementById('final-price').innerHTML += ticketPrice.toFixed(2) + '€';
            priceYetCalculated = true;
        }
    }
);
