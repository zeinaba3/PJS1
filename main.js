//// selecting all elemnts


const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const confirmpassword=document.querySelector("#confirmpassword");
const form=document.querySelector("#form"); 

// lets select showerror method
const showError=(input,message)=>{
    let parentElement=input.parentElement;
    parentElement.classList='form-control error'
//calamada tikta oo error ka muujinasa marka soo bandhigasa
    const small=parentElement.querySelector("small");
    const successIcon=parentElement.querySelectorAll("i")[0];
    const ErrorIcon=parentElement.querySelectorAll("i")[1];
  
    //calamada marka laso sarayo
    ErrorIcon.style.visibility='visible';
    successIcon.style.visibility='hidden';
    //innertext waa qoraalka lagu dhex qorayo small tag yacni meshi error message laguso qoraya
    small.innerText=message;
}


// lets select showsuccess method
const showSuccess=(input)=>{
    let parentElement=input.parentElement;
    parentElement.classList='form-control success'
//calamada tikta oo error ka muujinasa marka soo bandhigasa
    const successIcon=parentElement.querySelectorAll("i")[0];
    const ErrorIcon=parentElement.querySelectorAll("i")[1];
  
    //calamada marka laso sarayo
    ErrorIcon.style.visibility='hiden';
    successIcon.style.visibility='visible';
   
}









form.addEventListener("submit",(event)=>{
    // default iiga dhig oo marka submit dhaho waxa soo baxa haka badalin
    event.preventDefault();

//we can use this type    
    //if(username.value=="")
    //username.parentElement.classList='form-control error'

    // selecting checkempty method 
        const checkempty=(Elements)=>{
    //        inago ku dul wareegaynaya array da
        Elements.forEach((element) => {
            if(element.value===''){
                //makin showerror method to display message
                   showError(element,'input required');
            }else{
                showSuccess(element);
            }
        });
    }
    checkempty([username,Email,password,confirmpassword])
    

//checking email
  const checkemail=(Email)=>{
//this below link from "https://www.w3resource.com/javascript/form/email-validation.php"    
    const reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(Email.value)){
        showSuccess(Email);
    }
    else{
        showError(Email,'invalid Email');
    }

  }
  //method
checkemail(Email); 







//checking password
const checkpasswordLength=(input,min,max)=>//parameters waaye paasword min max
{
    if(input.value.length<min){
    showError(input,`password at least ${min} Character`);}
    else if(input.value.length>max){
        showError(input,`password maximum  Character is ${max}`); 
    }
    else{
        showSuccess(input);
    }
}







//method passwor
checkpasswordLength(password,6,10);
////method confirmpasswor
checkpasswordLength(confirmpassword,6,10);
})