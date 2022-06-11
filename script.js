document.addEventListener("DOMContentLoaded",() => {
    const arr = document.querySelectorAll('button');
    let currnum =document.querySelector(".curr").innerHTML;
    let prevnum =document.querySelector(".prev").innerHTML;
    let operation;
    function updatedisplay(curr,prev){
        document.querySelector(".curr").innerHTML=curr;
        document.querySelector(".prev").innerHTML=prev;
    }
    function calculate(curr,prev){
        let result;
        const previous = parseFloat(prev);
        const current = parseFloat(curr);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
              result = previous + current;
              break
            case '-':
              result = previous - current;
              break
            case 'x':
              result = previous * current;  
              break
            case '÷':
              result = previous / current;
              break
            default:
              return
          }
          operation=undefined;
          
          return Number(result.toFixed(10)).toString();
          
    }
    function chooseOperation(oper){
           if (currnum === '' || currnum==="-") {
               if(prevnum!==""){
               operation=oper;
               return;}
            
                return;
            }
            else if (prevnum !== '') {
                prevnum=calculate(currnum,prevnum);
                operation = oper;
                currnum="";
                updatedisplay(currnum,prevnum);
            }

            else{
                prevnum=currnum;
                currnum="";
                operation = oper;
                updatedisplay(currnum,prevnum);
            }

        }
        document.querySelectorAll(".number-button").forEach(button =>{
            button.onclick=() =>{
            currnum=currnum.concat(button.innerHTML)
            updatedisplay(currnum,prevnum);}
        });
        document.querySelectorAll(".operation-button").forEach(button =>{
            button.onclick=() =>{
                if(button.innerHTML==="-" && currnum===""){
                    currnum=currnum.concat("-");
                    updatedisplay(currnum,prevnum);
                }
                else
                    chooseOperation(button.innerHTML);
            }
        });
        //sss
    
    arr[0].onclick = () => {
        currnum="";
        prevnum="";
        operation=undefined;
        document.querySelector(".prev").innerHTML="";
        updatedisplay(currnum,prevnum);
    }
    arr[1].onclick = ()=>{
       currnum= currnum.slice(0,-1);
        updatedisplay(currnum,prevnum);
    }
    arr[15].onclick =()=>{
        if(prevnum==="" || currnum==="")
            return;
        currnum=calculate(currnum,prevnum);
        prevnum="";
        operation=undefined;
        updatedisplay(currnum,prevnum)
    }

    arr[17].onclick =()=>{
        if (currnum.includes('.')) return;
        currnum=currnum.concat(".")
        updatedisplay(currnum,prevnum);
    }   
    

});