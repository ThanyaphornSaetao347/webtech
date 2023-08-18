
function myFunction(){
    alert("Hello csmju");

    console.log("Hello Monday");

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML="Change.....";
    document.getElementById("header1").style.color="#ff0000";

    var x = 8;
    var y = 20;
    var z = 3;
    //หาค่าเฉลี่ย --> header2

    document.getElementById("header2").innerHTML = 
            ((x + y + z) / 3).toFixed(2);

}
function likeFunction(){
    var counter = parseInt(document.getElementById("result").innerText);
    counter++;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize=10+counter+"px";
    
}
function loveFunction(){
    var counter = parseInt(document.getElementById("result").innerText);
    counter++;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize=10+counter+"px";
    
}
function sadFuncfion(){
    var counter = parseInt(document.getElementById("result").innerText);
    counter++;
    document.getElementById("result").innerText = counter;
    document.getElementById("result").style.fontSize=10+counter+"px";
    
}