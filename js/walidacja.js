function addInputValidation() {
    let inputs = document.getElementsByClassName('input_pl');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', updateValue, false);
    }
}
function updateValue() {
    if (!((this.value > 0) && (this.value < 10))) {
        this.value = '';
    }
}
function getInputsValue(){
    let inputValues = [];
    let id1 = 1;
    let x = 1;
    let y = 2;
    let z = 3;
    for(var i=0; i<3;i++){
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1=1;
        x=x+3;
        y=y+3;
        z=z+3;
    }
    id1 = 4;
    x = 1;
    y = 2;
    z = 3;
    for(var i=0; i<3;i++){
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1=4;
        x=x+3;
        y=y+3;
        z=z+3;
    }
    id1 = 7;
    x = 1;
    y = 2;
    z = 3;
    for(var i=0; i<3;i++){
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1++;
        inputValues.push(parseInt(document.getElementById(id1+"_"+x).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+y).value));
        inputValues.push(parseInt(document.getElementById(id1+"_"+z).value));
        id1=7;
        x=x+3;
        y=y+3;
        z=z+3;
    } 
    SudokuPlansza.plansza = inputValues;
    return inputValues;
}
function validateGame() {
    let suma = 0;
    let counter = 0;
    let plansza = getInputsValue();
    var offset = 0;
    for (var x = 0; x< 9; x++) {  
        suma = 0;
        for (var i = 0; i < 9; i++) {
            suma = suma + plansza[i+offset];
            //console.log(suma);            
        }
        offset = offset+9;
        if (suma != 45) {
            document.getElementById("tekst_w").innerText = "Błąd! Sudoku nie jest wypełnnione poprawnie";
            break;
        } else {counter++; }
    }
    let offset2 = 0;
    if(counter == 9){
        counter = 0;
        for (var x = 0; x < 9; x++) {
            suma = 0;
            for (var i = 0; i < 9; i++) {
                suma = suma + plansza[9*i+offset2];
                //console.log(suma);
            }
            if (suma != 45) {
                document.getElementById("tekst_w").innerText = "Błąd! Sudoku nie jest wypełnnione poprawnie";
                //alert("blad");
                break;                
            } else {counter++; }
        }
    }
    if(counter ==9){
        document.getElementById("tekst_w").innerText = "Brawo! Sudoku jest wypełnnione poprawnie";
    }
}
