// TODO: write your code here
export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      ['1', 'игра не существует'],
      ['2', 'сначала сделай уроки!'],
      ['3', 'ваша мышь не совместима с игрой'],
      ['4', 'маг еще не проснулся, зайди позже'],
      ['5', 'обеденный перерыв!'],
      ['6', 'орки атакуют! Лучше зайдем в другой раз'],
      ['7', 'банный день. Все герои ушли в баню, отдохнуть от геймеров'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
