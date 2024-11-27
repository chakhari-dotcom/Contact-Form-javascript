function verifName(){
    let name=document.getElementById('name');
    let namevalue=name.value;
    // let email=document.getElementById('email');
    // let emailvalue=email.value;
    // let message=document.getElementById('message');
    // let messagevalue=message.value;
    // let subject = document.getElementById('subject'); 
    // let subjectvalue= subject.value;

    if(namevalue.length<3){
        name.style.border ='2px solid red'
    }else{
         name.style.border ='2px solid green'
    }

//     if(subjectvalue.length<5){
//         subject.style.border ='2px solid red'
//     }else{
//          subject.style.border ='2px solid green'
//     }
//     if(messagevalue.length<10){
//         message.style.border ='2px solid red'
//     }else{
//          message.style.border ='2px solid green'
//     }
 }

 function verifEmail(){
    let email=document.getElementById('mail');
    let emailvalue=email.value;

    if(emailvalue.indexOf('@')<0){
               email.style.border ='2px solid red'
    }else{
               email.style.border ='2px solid green'
    }
 }

 function verifsubject(){
    let subject=document.getElementById('subject');
    let subjectvalue=subject.value;

    if(subjectvalue.length <5){
               subject.style.border ='2px solid red'
    }else{
              subject.style.border ='2px solid green'
    }
 }

 function verifmessage(){
    let message=document.getElementById('message');
    let messagevalue=message.value;

    if(messagevalue.length <10){
               message.style.border ='2px solid red'
    }else{
             message.style.border ='2px solid green'
    }
 }