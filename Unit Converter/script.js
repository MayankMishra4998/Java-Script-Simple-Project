window.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("btn");
    const inputBtn = document.getElementById("input_btn");
    const b2Btn = document.getElementById("b2Pera");
    const b3Btn = document.getElementById("b3Pera");
    const b4Btn = document.getElementById("b4Pera");

    convertBtn.addEventListener("click", () => {
        const input = inputBtn.value.trim();

        if (input === '' || isNaN(input)) {
            alert("Please insert a valid number");
            inputBtn.focus();
            return;
        }
        const meters = Number(input);
        const feet = (meters * 3.28084).toFixed(2);
        const reverseMeters = ((meters*meters)/feet).toFixed(2)
        b2Btn.textContent = `${meters} meter = ${feet} feet | ${meters} feet = ${reverseMeters} meters`;


        const liters = Number(input);
        const gallon = (liters*0.264).toFixed(2) ;
        const reverseliters = ((liters*liters)/gallon).toFixed(2)
        b3Btn.textContent = `${liters} liters = ${gallon} gallons | ${liters} gallons = ${reverseliters} leters`;

         const kilos = Number(input);
        const pounds = (kilos * 2.204).toFixed(2);
        const reverseKilos = ((kilos*kilos)/pounds).toFixed(2)
        b4Btn.textContent = `${kilos} Kilos = ${pounds} pounds | ${kilos} pounds = ${reverseKilos} Kilos`;

        inputBtn.value = "";
        inputBtn.focus();
        console.log(`Input: ${meters}`);
    });
});

