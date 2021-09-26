const handleClick=()=>{
    // e.preventDefault();
    let number=Number(document.getElementById("number").value);
    const temp=document.getElementById("temp");
    const value=temp.options[temp.selectedIndex].value;
    console.log(typeof(number));
    console.log(typeof(value));
    let show;
    if(value=="celsius"){
        number=Math.round(((number/5)*9)+32);
        show="fahrenheit";
    }else{
        number=Math.round(((number-32)*5)/9);
        show="celsius";
    }
    // console.log(number);
    // let show=value=="celsius"
    let res=document.getElementById("result");
    res.innerHTML=`= ${number} ${show}`;
}