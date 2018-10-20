'use strict';

const USERINFO = {
    name: document.querySelector('.js-input__name'),
    surname: document.querySelector('.js-input__surname'),
    email: document.querySelector('.js-input__email'),
    phone: document.querySelector('.js-input__phone'),
    allInputs: document.querySelectorAll('.from__input'),
}
const validIndo = {
    validName: /^[A-Z][a-z_\.]{1,20}$/,
    validEmail: /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i,
    validPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
}
const BTN = {
    newWinner: document.querySelector('.btn__winn'),
    infoSave: document.querySelector('.form__btn'),
}
const form = document.querySelector('.form');
const table = document.querySelector('.table__tbody');
const tableInfo = document.querySelector('.table__firstRow');
const winnerName = document.querySelector('.winner__name');


const arrMembers= [];

const isValid = () => {
    if(USERINFO.name.value === '' || USERINFO.surname.value === '' || USERINFO.email.value === '') {
        return alert('Please, fill all the fields')
    }
    else if(!validIndo.validName.test(USERINFO.name.value)) {
        return alert('Name isn\'t valid')
    }
    else if(!validIndo.validName.test(USERINFO.surname.value)) {
        return alert('Surname isn\'t valid')
    }
    else if(!validIndo.validEmail.test(USERINFO.email.value)) {
        return alert('email isn\'t valid');
    }
    else if(!validIndo.validPhone.test(USERINFO.phone.value) && USERINFO.phone.value !== '') {
        return alert('phone isn\'t valid');
    }
    else {
        return null
    }
}
const addMemeber = () => {
    const memeber = {
        name: USERINFO.name.value,
        surname: USERINFO.surname.value,
        email: USERINFO.email.value,
        phone: USERINFO.phone.value,
    }
    arrMembers.push(memeber);
    form.reset();
    const tr = document.createElement('tr');
    tr.classList = 'table__tr'
    table.append(tr);
    const thName = document.createElement('th');
    const thSurname = document.createElement('th');
    const thEmail = document.createElement('th');
    const thPhone = document.createElement('th');
    const thChange = document.createElement('button');
    thName.textContent = `${memeber.name}`;
    thSurname.textContent = `${memeber.surname}`;
    thEmail.textContent = `${memeber.email}`;
    thPhone.textContent = `${memeber.phone}`;
    thChange.classList = 'table__change';
    thPhone.classList = 'table__tr';
    thChange.textContent = 'Change';
    tr.append(thName);
    tr.append(thSurname);
    tr.append(thEmail);
    tr.append(thPhone);
    thPhone.append(thChange);

    const changeTr = () => {
        if (isValid() === null) {
            thName.textContent = `${USERINFO.name.value}`;
            thSurname.textContent = `${USERINFO.surname.value}`;
            thEmail.textContent = `${USERINFO.email.value}`;
            thPhone.textContent = `${USERINFO.phone.value}`;
            const thChange = document.createElement('button');
            thChange.classList = 'table__change';
            thChange.textContent = 'Change';
            thPhone.append(thChange);
            form.reset();
        }
    }
    thChange.addEventListener('click', changeTr)
}


const saveInfo = (e) => {
    e.preventDefault();  
    if (isValid() === null) {
        addMemeber();
    }
}
    
const fnNewWinner = () => {
    const randMember = Math.floor(Math.random() * arrMembers.length)
    winnerName.textContent = `Winner: ${arrMembers[randMember].name} ${arrMembers[randMember].surname}`;
}


BTN.infoSave.addEventListener('click', saveInfo);
BTN.newWinner.addEventListener('click', fnNewWinner);
