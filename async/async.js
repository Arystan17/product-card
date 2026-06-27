async function getUsers() {
  try {
    const storedUsers = localStorage.getItem('users');

    let users = [];

    if (storedUsers) {
      users = JSON.parse(storedUsers);
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const response = await fetch('./users.json');

      if (!response.ok) {
        throw new Error('Не удалось загрузить пользователей');
      }

      const data = await response.json();

      users = data.users;

      localStorage.setItem('users', JSON.stringify(users));
    }

    const message = document.getElementById('message');

    message.remove();

    const container = document.getElementById('users-container');

    if (users.length === 0) {
      container.innerHTML = 'Пользователей нет';
      return;
    }

    const userTemplate = document.getElementById('user-template');

    users.forEach((user) => {
      const userCard = userTemplate.content.cloneNode(true);

      userCard.querySelector('.user-name').textContent =
        `${user.name} ${user.surname}`;

      userCard.querySelector('.user-email').textContent = user.email;

      userCard.querySelector('.user-age').textContent = user.age;

      userCard.querySelector('.delete-user').dataset.id = user.id;

      container.append(userCard);
    });
  } catch (error) {
    const message = document.getElementById('message');

    message.textContent = 'Ошибка при загрузке данных';

    console.log(error);
  }
}

getUsers();

const deleteAllUsersButton = document.getElementById('delete-all-users');
const getUsersButton = document.getElementById('get-users');
const container = document.getElementById('users-container');

deleteAllUsersButton.addEventListener('click', () => {
  localStorage.setItem('users', JSON.stringify([]));

  container.innerHTML = 'Пользователей нет';
});

getUsersButton.addEventListener('click', async () => {
  const currentUsers = JSON.parse(localStorage.getItem('users'));

  const response = await fetch('./users.json');

  const data = await response.json();

  if (currentUsers.length === data.users.length) {
    alert('Все пользователи уже отображены');
    return;
  }

  localStorage.setItem('users', JSON.stringify(data.users));

  container.innerHTML = '';

  const userTemplate = document.getElementById('user-template');

  data.users.forEach((user) => {
    const userCard = userTemplate.content.cloneNode(true);

    userCard.querySelector('.user-name').textContent =
      `${user.name} ${user.surname}`;

    userCard.querySelector('.user-email').textContent = user.email;

    userCard.querySelector('.user-age').textContent = user.age;

    userCard.querySelector('.delete-user').dataset.id = user.id;

    container.append(userCard);
  });
});

container.addEventListener('click', (event) => {
  if (!event.target.classList.contains('delete-user')) {
    return;
  }

  const userId = Number(event.target.dataset.id);

  const users = JSON.parse(localStorage.getItem('users'));

  const filteredUsers = users.filter((user) => {
    return user.id !== userId;
  });

  localStorage.setItem('users', JSON.stringify(filteredUsers));

  container.innerHTML = '';

  const userTemplate = document.getElementById('user-template');

  filteredUsers.forEach((user) => {
    const userCard = userTemplate.content.cloneNode(true);

    userCard.querySelector('.user-name').textContent =
      `${user.name} ${user.surname}`;

    userCard.querySelector('.user-email').textContent = user.email;

    userCard.querySelector('.user-age').textContent = user.age;

    userCard.querySelector('.delete-user').dataset.id = user.id;

    container.append(userCard);
  });
});