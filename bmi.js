let button=document.getElementById("but");

button.addEventListener('click',() =>
{
    const height=parseInt(document.getElementById("height").value);
    const weight=parseInt(document.getElementById("weight").value);
    const result=document.getElementById("OUTPUT");
    let height_st=false ,weight_st=false;

    if(height===' '||isNaN(height)||height<=0)
    {
        document.getElementById('height-err').innerHTML="Please Provide a Valid Height";
    }
    else
    {
        document.getElementById('height-err').innerHTML='';
        height_st=true;
    }


    if(weight ===' '||isNaN(weight)||weight<=0)
    {
        document.getElementById('weight-err').innerHTML="Please Provide a Valid Weight";
    }
    else
    {
        document.getElementById('weight-err').innerHTML='';
        weight_st=true;
    }

     
     if(height_st && weight_st)
     {
           const bmi=(weight/((height*height)/10000)).toFixed(2);


           if(bmi<18.6)
           {
            result.innerHTML='UNDER WEIGHT :'+ bmi;
            result.style.color ="red";
           }

           else if(bmi>18.6 && bmi<24.9)
           {
            result.innerHTML='NORMAL '+ bmi;
            result.style.color ="green";
           }

           else{
            result.innerHTML='OVERWEIGHT :'+ bmi;
            result.style.color ="red";
           }
     }
     else
     {
        alert('THE FORM HAS ERRORS');
        result.innerHTML='*Please Provide a Valid  Weight And Height';
        result.style.color="maroon";
     }


} );