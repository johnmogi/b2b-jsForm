const sendBut = document.getElementById('sendBut');
const nameForm = document.getElementById('name');
const phoneForm = document.getElementById('phone');
const emailForm = document.getElementById('email');

let formValid = false;

sendBut.onclick = (e) => {
    e.preventDefault();
    let nameVal = nameForm.value;
    let phoneVal = phoneForm.value;
    let mailVal = emailForm.value;
    validate(nameVal, phoneVal, mailVal);
    formValid ? sendForm(nameVal, phoneVal, mailVal) : null;
}
function validate(nameVal, phoneVal, mailVal) {
    if (nameVal, phoneVal, mailVal) {
        return formValid = true
    } else {
        switch (!formValid) {
            case !nameVal:
                let x = nameVal.querySelectorAll(".validInput")
                x[0].style.backgroundColor = "red"; 
                alert(" the name field is missing")
                break;
                case nameVal.length < 2:
                alert(" the name field is too short")
                break;
            case !phoneVal:
                alert(" the phone field is missing")
                break;
            case !mailVal:
                alert(" the mail field is missing")
                break;
        }
    }
}

function sendForm(name, phone, mail) {
    alert(name + " " + phone + " " + mail)
}
