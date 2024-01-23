// Код для обработки контактной формы
const contactForm = document.querySelector(‘#contact-form’);

contactForm.addEventListener(‘submit’, function(e) {
    e.preventDefault();

    const nameInput = contactForm.querySelector(‘#name’);
    const emailInput = contactForm.querySelector(‘#email’);
    const subjectInput = contactForm.querySelector(‘#subject’);
    const messageInput = contactForm.querySelector(‘#message’);

    // Отправка данных на сервер или другие необходимые действия
    // …

    // Показ успешного сообщения
    const successMessage = document.createElement(‘p’);
    successMessage.classList.add(‘contact-success’);
    successMessage.textContent = ‘Сообщение успешно отправлено!’;
    contactForm.appendChild(successMessage);

    // Очистка полей формы
    nameInput.value = ‘’;
    emailInput.value = ‘’;
    subjectInput.value = ‘’;
    messageInput.value = ‘’;
});
