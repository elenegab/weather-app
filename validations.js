export function validateName(input){
    if(input === '') return false;
    return true;
}

export function validateEmail(input){
    if(input === '') return false;
    if(String(input)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) return true
}

export function validatePassword(input){
    if(input === '') return 'Password is Empty'
    if(input.length() < 8) return false

    
}