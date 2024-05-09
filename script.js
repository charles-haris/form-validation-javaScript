
    let form_name, form_phone_number, form_email,form,password,confirm_password;


    form_name = document.getElementById("name");
    form_phone_number = document.getElementById("phone_number");
    form_email = document.getElementById("email");
    form = document.getElementById("form");
    password = document.getElementById("password");
    confirm_password = document.getElementById("confirm_password");

    form.addEventListener('submit',e => {
        e.preventDefault();

        validate();


    });

    function validate(){

        form_name_value = form_name.value.trim();
        form_phone_number_value = form_phone_number.value.trim();
        form_email_value = form_email.value.trim();
        password_value = password.value.trim();
        confirm_password_value = confirm_password.value.trim();

            if(form_name.value==""){
                form_name.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Empty field!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                  
            }else{
                form_name.style.borderColor="rgba(205, 203, 203, 0.685)";
            }
        
            if(form_phone_number.value==""){
                form_phone_number.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Empty field!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
        
            }else{
                form_phone_number.style.borderColor="rgba(205, 203, 203, 0.685)";
            }
        
            if(form_email.value==""){
                form_email.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Empty field!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
        
            }else{
                form_email.style.borderColor="rgba(205, 203, 203, 0.685)";
            }

            if(password.value==""){
                password.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Empty field!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            
            }else{
                password.style.borderColor="rgba(205, 203, 203, 0.685)";
            }

            if(confirm_password.value==""){
                confirm_password.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Empty field!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                
            }else{

                confirm_password.style.borderColor="rgba(205, 203, 203, 0.685)";
            }

            if(confirm_password.value!=password.value){
                confirm_password.style.borderColor="red";
                password.style.borderColor="red";
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Confirmation of the password failed!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                
            }else if(confirm_password.value==password.value && confirm_password.value!='' && password.value!='' ){
                confirm_password.style.borderColor="rgba(205, 203, 203, 0.685)";
                password.style.borderColor="rgba(205, 203, 203, 0.685)";

                Swal.fire({
                    title: "Good job!",
                    text: "Form filled successfully!",
                    icon: "success"
                  });

                form_name.value = "";
                form_phone_number.value = "";
                form_email.value = "";
                password.value = "";
                confirm_password.value = "";

            }

    }
   
    

   // alert(form_name);

