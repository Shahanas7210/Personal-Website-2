
var choose="Not Working choosing functions";
function whatsapp(){
    choose="whatsapp_data";
}
function gmail(){
    choose="gmail_data";  
}


function validation(){
    
    var name=document.getElementById("txt_name");
    var email=document.getElementById("txt_email");
    var subject=document.getElementById("txt_subject");
    var message=document.getElementById("txt_message");
     let common="Please fill all the feilds";
     var msg="";
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name.value.trim()==""||name.value.trim()==null){
     msg="Enter the name";
     
     return fun(common,msg);

    }else if(email.value.trim()==""){
        msg="Enter the Email";
     return fun(common,msg);
    }else if(subject.value.trim()==""){
        msg="Enter the subject"
        return fun(common,msg);
    }else if(subject.value.length<=10){
      msg="Subject lessthan 10 enter more"
      return fun(common,msg);
    }else if(message.value.trim()==null){
        msg="Enter the message";
        return fun(common,msg);
    }else if(message.value.length<=10){
        msg="The message length less than 10 only enter more"
        return fun(common,msg);
    }else if(!emailRegex.test(email.value)){
        msg="Not a valid email id";
        return fun(common,msg);

    }
    else{
        if(choose=="whatsapp_data"){
            return getWhatsapp();
        }else if(choose=="gmail_data"){
            choose="";
            return getGmail();
        }else{
            console.log("Nothing getted");
        }
        true
    }
}
function fun(common,mes){
    
    swal(common,mes);
    return false;
}
function getWhatsapp(){
    var name=document.getElementById("txt_name").value;
    var email=document.getElementById("txt_email").value;
    var subject=document.getElementById("txt_subject").value;
    var message=document.getElementById("txt_message").value;
    var url="http://wa.me/+918281592190?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Subject :* "+subject+"%0a"
    +"*Message :* "+message+"%0a"
    window.open(url,'_blank');

}
function getGmail(){
    $("#submit-form").submit((e)=>{
        // $("#submit-form").off("submit").on("submit", (e) => {
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxDXyBepDZilctJ7x0PpEOqygtfkxQ1P9h4VXCUf1VQzSXnL5XUbv2hKLfdSS6UKT7i/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                // alert("Form submitted successfully")
                var name=document.getElementById("txt_name")
                // swal("Good job! , Message Send Successfully","Thank You "+name.value+"", "success");
                alert("Successfully");
                // window.location.reload()
                //window.location.href="https://google.com"
                
            },
            error:function (err){
                alert("Something Error");
                

            }
            
        })
        
    })
    return false;
    
}
// function getGmail(){
//     $("#submit-form").submit((e)=>{
//         e.preventDefault();

//         // Disable the submit button
//         $("#submit-button").prop("disabled", true);

//         $.ajax({
//             url:"https://script.google.com/macros/s/AKfycbxDXyBepDZilctJ7x0PpEOqygtfkxQ1P9h4VXCUf1VQzSXnL5XUbv2hKLfdSS6UKT7i/exec",
//             data:$("#submit-form").serialize(),
//             method:"post",
//             success:function (response){
//                 var name=document.getElementById("txt_name");
//                 swal("Good job! , Message Send Successfully","Thank You "+name.value+"", "success");

//                 // Re-enable the submit button
//                 $("#submit-button").prop("disabled", false);
//             },
//             error:function (err){
//                 alert("Something Error");

//                 // Re-enable the submit button
//                 $("#submit-button").prop("disabled", false);
//             }
//         });
//     });
//     return false
// }




