const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Mussum Ipsum, cacilds vidis litro abertis.',
  'Atirei o pau no gatis, per gatis num morreus.',
  'Si num tem leite então bota uma pinga aí cumpadi!',
  'Casamentiss faiz malandris se pirulitá.',
];

button.addEventListener('click', () => createNotification())

const createNotification = () => {
  const notification = document.createElement('div');
  notification.classList.add('toast')
  notification.innerText = getRandomMessage();

  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 2500)
}

const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];
