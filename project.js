let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let unameNode=document.getElementById("uname");
let passNode=document.getElementById("pass");

let emailNode=document.getElementById("email");
let mobileNode=document.getElementById("mobile");
let ageNode=document.getElementById("age");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");
let tdNode7=document.getElementById("error7")

let tdNode4=document.getElementById("error4");
let tdNode5=document.getElementById("error5");
let tdNode6=document.getElementById("error6");


function validate1(){
    tdNode1.textContent="";
    let fname=fnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="this field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name should have only alphabets";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}
function validate2(){
    tdNode2.textContent="";
    let lname=lnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(lname));
    if(lname==''){
        tdNode2.textContent="this field is required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.textContent="name should have only alphabets";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}
function validate3(){
    tdNode3.textContent="";
    let uname=unameNode.value;
    if(uname==''){
        tdNode3.textContent="this field is required";
        unameNode.style.border=border1;
        return false;
    }
    else if(uname.length<3 || uname.length >10){
        tdNode3.textContent="uname must have atleast 3 and at most 10 chars";
        unameNode.style.border=border1;
        return false;
    }
    else{
        unameNode.style.border=border2;
        return true;
    }
   
}

function validate4(){
    tdNode4.textContent="";
    let emailId=emailNode.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    
    if(emailId==''){
        tdNode4.textContent="this field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode4.textContent="Please put valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}
function validate5(){
    tdNode5.textContent="";
    let mobileNumber=mobileNode.value;
    let regExp=new RegExp("^[0-9]*$"); 
    if(mobileNumber==''){
        tdNode5.textContent="this field is required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobileNumber)==false){
        tdNode5.textContent="mobile number should contain only digits";
        mobileNode.style.border=border1;
        return false;
    }
    else if(mobileNumber.length!=10){
        tdNode5.textContent="please put valid mobile number";
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border2;
        return true;
    }
   
}
function validate6(){
    tdNode6.textContent="";
    let age=ageNode.value;
    if(age==''){
        tdNode6.textContent="this field is required";
        ageNode.style.border=border1;
        return false;
    }
    else if(age<1 || age>110){
        tdNode6.textContent="please put valid age (1 to 110)";
        ageNode.style.border=border1;
        return false;
    }
    else{
        ageNode.style.border=border2;
        return true;
    }
}

function validate7(){
    tdNode7.innerHTML="";
    let password=passNode.value;
    let regExp=new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password==''){
        tdNode7.textContent="this field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(password.length<5 || password.length>12){
        tdNode7.textContent="Password should be atleast 5 and atmost 12 characters long";
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
    
}



function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    let st3=validate3();
     
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    let st7=validate7();
    return st1 && st2 && st3 && st4 && st5 && st6&&st7;}


    $(document).ready(function(){
        $("reset").click(function(){
          
            alert("The paragraph is now hidden");
          
        });
      });