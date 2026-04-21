// 4. К Форме, которая прикреплена в футере - добавить логику

const getFormData = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const isEmailValid = (email) => {
  const formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !formatRegex.test(email)) {
    return false;
  }
  
  const domainRegex = /\.(com|ru|net|org|ua|by|kz)$/;
  return domainRegex.test(email);
};

const emailForm = document.querySelector(".subscribe-form");
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const form = event.target,
        data = getFormData(form),
        email = data.email?.trim();
  
  if (!isEmailValid(email)) {
    alert('Пожалуйста, введите email с доменом .com, .ru, .net, .org, .ua, .by или .kz');
    return;
  }
  
  console.log({ email: email });
});

// 5. Создать кнопку "Регистрация"

const btnOpenModal = document.getElementById("open-modal"),
      btnCloseModal = document.getElementById("closeRegistration"),
      modal = document.querySelector(".modal"),
      overlay = document.querySelector(".overlay"),
      registrationForm = document.getElementById("registrationForm"),
      body = document.body;

let user = null;

const openModal = () => {
  modal.classList.add('modal-showed');
  overlay.classList.add('active');
  body.classList.add('modal-open');
};

const closeModal = () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('active');
  body.classList.remove('modal-open');
  
  if (registrationForm) registrationForm.reset();
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
    closeModal();
  }
});

if (registrationForm) {
  const passwordInput = registrationForm.querySelector('#password');
  const confirmPasswordInput = registrationForm.querySelector('#repeatPassword');
  
  const validatePasswordMatch = () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity('Пароли не совпадают');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  };
  
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);
  }
  
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    
    if (!form.checkValidity()) {
      alert('Регистрация отклонена. Проверьте правильность заполнения полей.');
      
      form.reportValidity();
      return;
    }
    
    const data = getFormData(form);
    data.createdOn = new Date();
    user = data;
    
    console.log('Регистрация успешна:', user);
    closeModal();
    alert(`Регистрация успешно завершена!\nДобро пожаловать, ${data.userFirstName} ${data.userLastName}!`);
  });
}