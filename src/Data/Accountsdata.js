let accounts=new  Map();

accounts.set("admin", "Admin@123");



export const checkUser=(username)=>{

    console.log("accounts "+accounts.get("admin"));
    if(accounts.get(username))
        return true;
    return false;
}

export const regUser=(username,password)=>{


    if(!checkUser(username)){
        accounts.set(username, password);
        return true;
    }
    return false;
}

export const verfiyCredentials=(username,password)=>{


    if(checkUser(username)){
        if(accounts.get(username)===password){
             return true;
        }
           
    }

    return false;
}

export const isUserLoggedIn=()=>{
    if(getUsername)
        return true;
    else
        return false;
}

export const getUsername=()=>{
    return localStorage.getItem("username");
}

export const setUsername=(username)=>{
    localStorage.setItem("username",username);
}