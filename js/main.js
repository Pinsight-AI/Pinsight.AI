const submitButton = document.getElementById('submit-button');
const form = document.getElementById('mail-form');
const formParent = form.parentNode;
let isButtonDisabled = false;

submitButton.addEventListener('click', async () => {
    if (isButtonDisabled) {
        return;
    }
    const name = document.getElementById('your-name');
    const message = document.getElementById('your-message');
    const subject = document.getElementById('your-subject');
    const email = document.getElementById('your-email');
    isButtonDisabled = true;

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_idonr3d',
            template_id: 'template_ne9iy4e',
            user_id: 'user_iEyfJ0OmIwtGmVBh36X4J',
            template_params: {
                name: name.value,
                email: email.value,
                message: message.value,
                subject: subject.value,
            }
        }) // body data type must match "Content-Type" header
      });
      if (response.ok) {
        formParent.removeChild(form);
        const span = document.createElement('span');
        span.innerHTML = 'Thank you'
        formParent.appendChild(span);
        isButtonDisabled = false;
        return;
      }
      const span = document.createElement('span');
      span.innerHTML = 'Faild to send message'
      formParent.appendChild(span);
      isButtonDisabled = false;
})