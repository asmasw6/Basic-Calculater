var screen = document.getElementById("calc")
var operType = '';
var values ={ prev:null, new: null, total: null}
var isLastBtn = false
function display(term){
   return term 
  }

function getNumbers(num){
    if(isLastBtn){
        var result;
        if(values.new){
            result = values.new + ''+ num;
            values.new =result;
            screen.value =result
        }else{
            result = values.prev + ''+ num;
            values.prev =result;
            screen.value =result
        }
    }else{
            screen.value = num
        if(values.prev){
            values.new = num;
        }else{
            values.prev =num;
        }

        isLastBtn = true;
    }
    
}

function getOperator(oper){
    operType =oper
    isLastBtn = false;
}
function calculate(oper){

    if(!values.new){
        return;
    }if(values.new && values.prev && operType) {
        if(operType === '+'){
            var newValue =Number(values.prev)  + Number(values.new) 
            screen.value = newValue
            values.prev = newValue
        }
        if(operType === '-'){
            var newValue = Number(values.prev)  - Number(values.new) 
            screen.value = newValue
            values.prev = newValue
        }
        if(operType === '*'){
            var newValue = Number(values.prev)  * Number(values.new) 
            screen.value = newValue
            values.prev = newValue
        }
        if(operType === '/'){
            var newValue = Number(values.prev)  / Number(values.new) 
            screen.value = newValue
            values.prev = newValue
        }


    } 
}

function Delete(){
    screen.value = screen.value.slice(0, -1)
    values.prev =screen.value
}
