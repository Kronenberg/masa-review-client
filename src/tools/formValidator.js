export default function formValidator(inputConPass, inputPass, inputName, inputEmail, inputSurName) {
    let inputPassValid = false;
    let inputNameValid = false;
    let inputEmailValid = false;
    let inputSurNameValid = false;
    let formValid = false;

    //Name validation

    if (inputName.length > 0) {
        inputNameValid = true
    }

    //Surname validation

    if (inputSurName.length > 0) {
        inputSurNameValid = true
    }

    //password confirmization and validation

    if (inputPass.length >= 8 && inputConPass.length >= 8 && inputPass === inputConPass) {
        inputPassValid = true
    }

    //Email validation

    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(inputEmail)) {
        inputEmailValid = true;
    }


    formValid = inputPassValid
        && inputNameValid
        && inputEmailValid
        && inputSurNameValid;
    return formValid
}