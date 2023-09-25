export function validateName(input){
    if(input === '') return 'Name cannot be empty';
    return true;
}

export function validateEmail(input){
    if(input === '') return 'Email cannot be empty';
    if(!input.includes('@')) return 'Email must be valid';
    return true;
}

export function validatePassword(input){
    if(input === '') return 'Password cannot be empty';
    if(input.length < 8) return 'Password must be at least 8 characters';
    return true;
}

export function validateDate(input){
    if(input === '') return 'Date cannot be empty';
    return true;
}