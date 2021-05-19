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
                fromWebsite: 'Pinsight'
            }
        }) // body data type must match "Content-Type" header
      });
      if (response.ok) {
        formParent.removeChild(form);
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.height = '200px';
        div.style.width = '100%';
        div.style.alignItems = 'center';
        const titleSpan = document.createElement('span');
        titleSpan.className = 'resultTitle';
        titleSpan.innerHTML = 'Thank You!'
        const textSpan = document.createElement('span');
        textSpan.innerHTML = 'We have received your email we will contact you as soon as possible.'
        textSpan.className = 'resultText';
        const okButton = document.createElement('button');
        okButton.innerHTML = 'OK'
        okButton.className = 'okButton bg-purple';
        okButton.addEventListener('click', () => {
          formParent.removeChild(div);
          formParent.appendChild(form);
        })
        div.appendChild(titleSpan);
        div.appendChild(textSpan);
        div.appendChild(okButton);
        formParent.appendChild(div);
        isButtonDisabled = false;
        return;
      }
      formParent.removeChild(form);
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      div.style.height = '200px';
      div.style.width = '100%';
      div.style.alignItems = 'center';
      const titleSpan = document.createElement('span');
      titleSpan.className = 'resultTitle';
      titleSpan.innerHTML = 'Error!'
      const textSpan = document.createElement('span');
      textSpan.innerHTML = 'An internal error occurred during your request, please try again.'
      textSpan.className = 'resultText';
      const okButton = document.createElement('button');
      okButton.innerHTML = 'OK'
      okButton.className = 'okButton bg-orange';
      okButton.addEventListener('click', () => {
        formParent.removeChild(div);
        formParent.appendChild(form);
      })
      div.appendChild(titleSpan);
      div.appendChild(textSpan);
      div.appendChild(okButton);
      formParent.appendChild(div);
      formParent.appendChild(span);
      isButtonDisabled = false;
})