const gen_password=document.getElementById("btn");
const password_box=document.getElementById("input_field");
const copy_btn=document.getElementById("copy_img");
const pass_length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUZWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890"
const speacialchars="!@#$%^&*()_-+=<>~{}[]|?/";
const allChars=upperCase+lowerCase+numbers+speacialchars;

function createPassword()
{
    let pass="";
    while(pass.length<pass_length)
    {
        pass+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    return pass;
}

gen_password.addEventListener("click",()=>{
    pass=createPassword();
    password_box.value=pass;
});

copy_btn.addEventListener("click",()=>{
    password_box.select();
    document.execCommand("copy")
});