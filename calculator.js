const input = document.getElementById("display");

function showError(message){
    M.toast({html: message, classes: 'red rounded', displayLength:3000});
}
function appendToDisplay(value){
    input.value += value;
}
function clearDisplay(){
    input.value="";
}
function calculate(){
    if (input.value.includes('/0')) {
        clearDisplay();
        showError("Divided by zero is infinite");
    }
    else if(input.value===''){
        showError("Enter some expression")
    } 
    else {
        try{
        var ans = eval(input.value);
        showError(`${input.value}=`)
        input.value=ans;
        }
        catch(error){  
            clearDisplay();
            showError("Invalid Expression");
        }    
    }
}
function deleteOne(){
    var val =input.value
    input.value=val.slice(0,val.length-1)
}