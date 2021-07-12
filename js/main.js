const submitButton = document.getElementById('submit-button');
const backButton = jQuery('#backButton');
const okButton = jQuery('#okButton');
const form = jQuery('#mail-form');
const formParent = form.parent();
let isButtonDisabled = false;
let yourName = jQuery('#your-name');
let message = jQuery('#your-message');
let subject = jQuery('#your-subject');
let email = jQuery('#your-email');
const getTouchLoader = jQuery('#get-touch-loader');

const handleBackOkClick = () => {
  const successContainer = jQuery('#mail-send-success');
  const errorContainer = jQuery('#mail-send-success');
  successContainer.hide();
  errorContainer.hide();
  formParent.removeClass('formCont');
  yourName.val('');
  message.val('');
  subject.val('');
  email.val('');
  form.show();
}

okButton.click(handleBackOkClick)
backButton.click(handleBackOkClick)

yourName.keydown(event => {
  yourName.css('border', 'none');
})

message.keydown(event => {
  message.css('border', 'none');
})

subject.keydown(event => {
  subject.css('border', 'none');
})

email.keydown(event => {
  email.css('border', 'none');
})


submitButton.addEventListener('click', async () => {
    if (isButtonDisabled) {
        return;
    }
    
    yourName = jQuery('#your-name');
    message = jQuery('#your-message');
    subject = jQuery('#your-subject');
    email = jQuery('#your-email');
    let isError = false;
    if (!yourName.val()) {
      yourName.css("border", "1px solid red");
      isError = true;
    }
    if (!message.val()) {
      message.css("border", "1px solid red");
      isError = true;
    }
    if (!subject.val()) {
      subject.css("border", "1px solid red");
      isError = true;
    }
    if (!email.val()) {
      email.css("border", "1px solid red");
      isError = true;
    }
    if (isError) {
      jQuery('#send-mail-error').show();
      return;
    }
    isButtonDisabled = true;
    form.hide();
    getTouchLoader.show();

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
                name: yourName.val(),
                email: email.val(),
                message: message.val(),
                subject: subject.val(),
                fromWebsite: 'Pinsight'
            }
        }) // body data type must match "Content-Type" header
      });
      if (response && response.ok) {
        formParent.addClass('formCont');
        const successContainer = jQuery('#mail-send-success');
        form.hide();
        successContainer.css('display', 'flex');
        isButtonDisabled = false;
        getTouchLoader.hide();
        return;
      }
      formParent.addClass('formCont');
      const errorContainer = jQuery('#mail-send-success');
      form.hide();
      errorContainer.css('display', 'flex');
      isButtonDisabled = false;
      getTouchLoader.hide();
})
