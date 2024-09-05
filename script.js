'use strict';
// buttons
const btnPošalji = document.querySelector('.pošalji');
const btnPrikaži = document.querySelector('.prikaži');
const exitBtn = document.querySelector('.exitBtn');

// elements
const comlaintListUi = document.querySelector('.prikaz');

const inputName = document.querySelector('.input__name');
const inputLastName = document.querySelector('.input__lastName');
const inputEmail = document.querySelector('.input__mail');
const inputTelNum = document.querySelector('.input__number');
const inputComment = document.querySelector('.input__coment');
const rowReview = document.querySelector('.rowReview');
const errorMessage = document.getElementById('errorMessage');

// users Buttons
const showUserId = document.querySelector('.showId');
const deleteUser = document.querySelector('.deleteUser');

// login and registration

const containerHidden = document.querySelector('.containerHidden');
const containerShowUp = document.querySelector('.containerShowUp');
const loginSubmitBtn = document.getElementById('loginSubmit');
const loginArticle = document.querySelector('.loginArticle');
const welcomePage = document.querySelector('.welcomePage');
const registerNowLink = document.getElementById('registerNowLink');
const registerNowContainer = document.querySelector('.registerNow');
const backToLogin = document.getElementById('backToLogin');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginErrorMessage = document.getElementById('loginErrorMessage');

// registration fields

const registrationName = document.getElementById('registerName');
const registrationEmail = document.getElementById('registerEmail');
const registrationPassword = document.getElementById('registerPassword');
const registerPasswordConfirm = document.getElementById(
  'registerPasswordConfirm'
);
const registrationMessage = document.getElementById('registrationMessage');
const subbmitRegistration = document.getElementById('subbmitRegistration');

// --------------------------------------------------------

registerNowLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginArticle.classList.add('opacitiOff');
  welcomePage.classList.add('opacitiOff');
  registerNowContainer.classList.add('opacitiOn');
});

// registration ---> Local storage
let regList = JSON.parse(localStorage.getItem('regInputs') || '[]');
// registration functions _________________________________
const takeData = function () {
  const data = {
    name: registrationName.value,
    email: registrationEmail.value,
    password: registrationPassword.value,
    confirmPassword: registerPasswordConfirm.value,
  };
  regList.push(data);
  localStorage.setItem('regInputs', JSON.stringify(regList));
  console.log(regList, data);
};

const clearRegFields = function () {
  registrationName.value =
    registrationEmail.value =
    registrationPassword.value =
    registerPasswordConfirm.value =
      '';
};
function backToLoginPage() {
  registerNowContainer.classList.add('opacitiOff');
  loginArticle.classList.remove('opacitiOff');
  welcomePage.classList.remove('opacitiOff');
}

function checkRegistration() {
  const name = registrationName.value;
  const email = registrationEmail.value;
  const password = registrationPassword.value;
  const passwordConfirm = registerPasswordConfirm.value;

  if (name && email && password && passwordConfirm) {
    if (password === passwordConfirm) {
      registrationMessage.style.color = '#05bc20';
      registrationMessage.textContent =
        'Congratulations, you have successfully registered!!!';

      setTimeout(function () {
        backToLoginPage();
      }, 1500);
      return true;
    } else {
      registerPasswordConfirm.value = '';
      registrationMessage.style.color = 'red';
      registrationMessage.innerHTML =
        'Please insert correct Password for confirmation';
      registerPasswordConfirm.focus();
      return false;
    }
  } else {
    registrationMessage.style.color = 'red';
    registrationMessage.innerHTML = 'Please fill in all fields🤐';
    return false;
  }
}
// ______________________________________________________________________
subbmitRegistration.addEventListener('click', function () {
  if (!checkRegistration()) return;
  takeData();
  clearRegFields();
});

// ---------------------------------------------------

backToLogin.addEventListener('click', backToLoginPage);

loginSubmitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = loginUsername.value;
  const password = loginPassword.value;

  const userMatch = regList.find(
    elem => elem.name === userName && elem.password === password
  );

  if (userMatch) {
    containerShowUp.classList.add('hidden');
    containerHidden.style.display = 'flex';
  } else {
    loginErrorMessage.textContent =
      'Please insert correct Username or Password';
    loginPassword.focus();
  }
});

// ------------------------------------------------------------------------

let complaintList = JSON.parse(localStorage.getItem('complaintList') || '[]');
let allowDisplayInputs = true;
const date = new Date().toLocaleString();

//  functions;

function inputValidation() {
  errorMessage.innerHTML = '';

  if (
    !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorMessage.innerHTML = 'Please insert correct email😣';
    inputEmail.style.borderBottomColor = 'red';
    inputEmail.focus();
    return false;
  } else {
    errorMessage.classList.add('hidden');
    inputEmail.style.borderBottomColor = 'rgb(18, 219, 78)';
    return true;
  }
}
const incorrectInput = function () {
  if (
    !inputValidation() ||
    inputName.value === '' ||
    inputEmail.value === '' ||
    inputComment.value === '' ||
    inputLastName.value === '' ||
    inputTelNum.value === ''
  ) {
    alert(
      'Molimo da popunite sva polja koja su Vam ponuđena i molimo da ih ispravno popunite!!! Sva polja su obavezna!!!😎'
    );
    // clearFields();
    return true;
  } else {
    return false;
  }
};

const dataInputsElement = function (param) {
  return `
  <div class="row clickable " data-id="${param.id}" > 
  <div class="row__item"><span id="item"> 🧑: ${param.name} ${param.lastName}  </span></div>
  <div class="row__item"><span id="item">📩:${param.email}  </span></div>
  <div class="row__item"><span id="item">📞:  ${param.phone} </span></div>
  </div>`;
};

// čuvanje podataka--podaci o jeddnoj žalbi u niz žalbi
const saveComplaintHandler = function () {
  const y = {
    name:
      inputName.value[0].toUpperCase() +
      inputName.value.slice(1).toLowerCase().trim().replace(/\s+/g, ''),
    lastName:
      inputLastName.value[0].toUpperCase() +
      inputLastName.value.slice(1).toLowerCase().trim().replace(/\s+/g, ''),
    email: inputEmail.value,
    phone: inputTelNum.value,
    text: inputComment.value,
    id: Date.now(),
    date: date,
  };
  complaintList.push(y);
  localStorage.setItem('complaintList', JSON.stringify(complaintList));
};

const updateComplaintListUi = function () {
  comlaintListUi.innerHTML = '';
  complaintList.map(item => {
    let html = '';
    html += dataInputsElement(item);
    comlaintListUi.insertAdjacentHTML('beforeend', html);
  });
};
console.log(complaintList);

updateComplaintListUi();

const clearFields = function () {
  inputName.value =
    inputEmail.value =
    inputTelNum.value =
    inputComment.value =
    inputLastName.value =
      '';
};

// Event listeneri

btnPošalji.addEventListener('click', function (e) {
  e.preventDefault();
  if (incorrectInput()) return;
  saveComplaintHandler();
  clearFields();
  updateComplaintListUi();
  location.reload();
});
btnPrikaži.addEventListener('click', function () {
  comlaintListUi.classList.toggle('hidden');
  // rowReview.classList.toggle('hidden');
});

// =========================================================================================

//  Modal prozor i prikaz korisničkih podataka

const dataPreviewRow = document.querySelectorAll('.row');
const modal = document.getElementById('modal');
const nmaePlace = document.getElementById('name');
const lastNamePlace = document.getElementById('lastName');
const emailPlace = document.getElementById('email');
const phonePlace = document.getElementById('phone');
const textComplaintPlace = document.getElementById('textComplaint');
const datePlace = document.getElementById('dateComplaint');
const usersId = document.getElementById('usersId');
const passwordUsers = document.getElementById('passwordUsers');
const passwordUsersSubmit = document.getElementById('passwordUsersSubmit');
const controlId = document.querySelector('.controlId');

// -----------------Funtions-------------------

const displayModal = function (complaint) {
  nmaePlace.innerHTML = complaint.name;
  lastNamePlace.innerHTML = complaint.lastName;
  emailPlace.innerHTML = complaint.email;
  phonePlace.innerHTML = complaint.phone;
  textComplaintPlace.innerHTML = complaint.text;
  datePlace.innerHTML = complaint.date;
  usersId.innerHTML = complaint.id;
  modal.style.display = 'flex';
};

const closeModal = () => {
  modal.style.display = 'none';
};

const hideUsersId = function () {
  usersId.classList.add('hidden');
  controlId.classList.add('hidden');
};

const showUsersId = function () {
  usersId.classList.remove('hidden');
};

const clearPasswordField = () => {
  passwordUsers.value = '';
};
clearPasswordField();

function passwordSubmitHandler() {
  const numericValuePassword = parseFloat(passwordUsers.value);
  if (numericValuePassword === 1111) {
    hideUsersId();
    showUsersId();
    clearPasswordField();
  } else {
    alert('You have wrong password 😎');
    clearPasswordField();
  }
}

// --------------UI----------------------,----------

dataPreviewRow.forEach(function (row) {
  row.addEventListener('click', function (e) {
    e.preventDefault();
    const rowEl = e.target.closest('.row');
    const ide = e.currentTarget.dataset.id;
    const complaint = complaintList.find(complaint => complaint.id === +ide);
    displayModal(complaint);
    deleteUser.addEventListener('click', function (e) {
      e.preventDefault();
      const indexToRemove = complaintList.findIndex(
        complaint => complaint.id === +ide
      );
      if (indexToRemove !== -1) {
        complaintList.splice(indexToRemove, 1);
        localStorage.setItem('complaintList', JSON.stringify(complaintList));
      }
      updateComplaintListUi();
      closeModal();
    });
  });
});

exitBtn.addEventListener('click', function () {
  closeModal();
  hideUsersId();
  clearPasswordField();
});

showUserId.addEventListener('click', function () {
  controlId.classList.remove('hidden');
  passwordUsersSubmit.removeEventListener('click', passwordSubmitHandler);
  passwordUsersSubmit.addEventListener('click', passwordSubmitHandler);
});
