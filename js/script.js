
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin
    }
    else{
        return generatePin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'c'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumbers.split('');
            digits.pop();

            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = previousTypedNumbers + number;
        typedNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typePinField = document.getElementById('typed-numbers');
    const typedNumber = typePinField.value;

    const PinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        PinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        PinSuccessMessage.style.display = 'none';
    }

})
