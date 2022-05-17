
export const validation = (e, type) => {

    let value = e.target.value;
    let error = ''
    if (type === 'onlyLetters') {
        value = value.replace(/[^A-Za-z]/, '');
        return value;
    }else{
        error='Ingresar solo letras'
    }

    if (type === 'onlyNumbers') {
        value = value.replace(/[^0-9\b]/, '');
        return value;
    }else{
        error='Ingresar solo numeros'
    }


}
