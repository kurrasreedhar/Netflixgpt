

export const validatefrom=(email,password,name,sign)=>{

    const isemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isname =/^[A-Za-z]+([ -][A-Za-z]+)*$/.test(name);

    if(!sign && !isname ) return " name is incorrect";
    if(!isemail) return "email is incorrect";
    if(!ispassword) return "password is incorrect";
    
    return null;
 }