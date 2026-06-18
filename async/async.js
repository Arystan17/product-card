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

    users.forEach((user) => {
      container.innerHTML += `
        <div>
          <h3>${user.name} ${user.surname}</h3>
          <p>${user.email}</p>
          <p>${user.age}</p>
          <button data-id="${user.id}" class="delete-user">
            Удалить
          </button>
        </div>
      `;
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

  if (currentUsers.length === 4) {
    alert('Все пользователи уже отображены');
    return;
  }

  const response = await fetch('./users.json');

  const data = await response.json();

  localStorage.setItem('users', JSON.stringify(data.users));

  container.innerHTML = '';

  data.users.forEach((user) => {
    container.innerHTML += `
      <div>
        <h3>${user.name} ${user.surname}</h3>
        <p>${user.email}</p>
        <p>${user.age}</p>
        <button data-id="${user.id}" class="delete-user">
          Удалить
        </button>
      </div>
    `;
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

  filteredUsers.forEach((user) => {
    container.innerHTML += `
      <div>
        <h3>${user.name} ${user.surname}</h3>
        <p>${user.email}</p>
        <p>${user.age}</p>
        <button data-id="${user.id}" class="delete-user">
          Удалить
        </button>
      </div>
    `;
  });
});