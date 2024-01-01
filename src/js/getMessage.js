const refs = {
  form: document.querySelector('.form'),
  inputName: document.querySelector('[name=username]'),
  inputPhone: document.querySelector('[name=phone]'),
  inputMessage: document.querySelector('[name=message]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const dataForm = {
    [refs.inputName.name]: refs.inputName.value,
    [refs.inputPhone.name]: refs.inputPhone.value,
    [refs.inputMessage.name]: refs.inputMessage.value,
  };
  if (refs.inputName.value && refs.inputPhone.value !== '') {
    sendMessage(dataForm);
    console.log(dataForm);
    refs.form.reset();
  } else {
    alert('Name and phone number are required!');
  }
}

let tg = {
  token: 'BOT_TOKEN', // Your bot's token that got from @BotFather like this 4839574812:AAFD39kkdpWt3ywyRZergyOLMaJhac60qc
  chat_id: 'CHAT_ID', // The user's(that you want to send a message) telegram chat id like this 227304770
};

function sendMessage(text) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

  const obj = {
    chat_id: tg.chat_id,
    text: text,
  };

  const xht = new XMLHttpRequest();
  xht.open('POST', url, true);
  xht.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  xht.send(JSON.stringify(obj));
}
