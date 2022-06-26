export class LoggerComponent {
  #logName;

  // Set message area
  constructor(log = 'MenuLog') {
    this.#logName = log;
    localStorage.clear();
  }

  set setLog(text) {
    const log = this.getLog || {};
    log[+new Date()] = text;
    localStorage.setItem(this.#logName, JSON.stringify(log));
  }

  get getLog() {
    return JSON.parse(localStorage.getItem(this.#logName));
  }
}
