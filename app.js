//  for addition
$(document).ready(function(){
 addBoth = () => {
        
    let addition;
    let add1 = parseInt(document.getElementById("addnum1").value);
    let add2 = parseInt(document.getElementById("addnum2").value);
    
        if(isNaN(add1)) {
            addition = 'not a number';
        }
        if(isNaN(add2)) {
            addition = 'not a number';
        } else {
            addition = add1 + add2;
        }
         document.getElementById("added").innerHTML = "The answer is " + addition;
    }

  
   
 
    $("#add").click(function(){
  $("#addpart").toggle(1000);
  $('#subtractpart').hide(1000);
  $('#dividepart').hide(1000);
  $('#multiplypart').hide(1000)
});



// for multiplication
multiplyBoth = () => {
    let calculate;
    let content1 = (document.getElementById("number1").value);
    let content2 = (document.getElementById("number2").value);
    if (isNaN(content1)) {
        calculate = "not a number";
    }
    if (isNaN(content2)) {
        calculate = "not a number";
    }
    else {
        calculate = (content1 * content2);
    }
    document.getElementById("multiplied").innerHTML = "The answer is " + calculate;
}

    $("#multiply").click(function(){
  $("#multiplypart").toggle(1000);
  $('#addpart').hide(1000);
  $('#dividepart').hide(1000);
  $('#subtractpart').hide(1000)
});


// for division 
divideBoth = () => {
    
    let division;
    let divide1 = (document.getElementById("dividenum1").value);
    let divide2 = (document.getElementById("dividenum2").value);
    
        if(isNaN(divide1)) {
            division = 'not a number';
        }
        if(isNaN(divide2)) {
            division = 'not a number';
        } else {
            division = divide1 / divide2;
        }
         document.getElementById("divided").innerHTML = "The answer is " + division;
    }

        $("#divide").click(function(){
      $("#dividepart").toggle(1000);
      $('#addpart').hide(1000);
      $('#subtractpart').hide(1000);
      $('#multiplypart').hide(1000)
    });

    //for subtraction
    subtractBoth = () => {
    
        let subtraction;
        let subtract1 = (document.getElementById("subtractnum1").value);
        let subtract2 = (document.getElementById("subtractnum2").value);
        
            if(isNaN(subtract1)) {
                subtraction = 'not a number';
            }
            if(isNaN(subtract2)) {
                subtraction = 'not a number';
            } else {
                subtraction = subtract1 - subtract2;
            }
             document.getElementById("subtracted").innerHTML = "The answer is " + subtraction;
        }

       
            $("#minus").click(function(){
          $("#subtractpart").toggle(1000);
          $('#addpart').hide(1000);
          $('#dividepart').hide(1000);
          $('#multiplypart').hide(1000);
        });
        
    });
