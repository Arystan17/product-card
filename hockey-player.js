export class HockeyPlayer {
  constructor(name, team, number) {
    this.name = name;
    this.team = team;
    this.number = number;
  }

  showInfo() {
    console.log(
      `${this.name} играет за ${this.team} под номером ${this.number}`
    );
  }
}

export class Goalkeeper extends HockeyPlayer {
  constructor(name, team, number, saves) {
    super(name, team, number);

    this.saves = saves;
  }

  showSaves() {
    console.log(
      `${this.name} сделал ${this.saves} сейвов`
    );
  }
}

const player = new HockeyPlayer('Макдэвид','Эдмонтон', 97);

player.showInfo();

const goalkeeper = new Goalkeeper('Шестеркин','Рейнджерс',31, 35);

goalkeeper.showInfo();
goalkeeper.showSaves();