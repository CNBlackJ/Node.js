// class Console {
// 	constructor() {
// 		this._times = {};
// 	}

// 	time(label) {
// 		this._times[label] = Date.now();
// 	}

// 	timeEnd(label) {
// 		const time = this._times[label];
// 		if (!time) throw new Error(`Cannot find label: ${label}`);
// 		const duration = Date.now() - time;
// 		return ('%s: %dms', label, duration)
// 	}
// }

// const cs = new Console();

const Console = require('console').Console;

Console.prototype.timeEnd = function timeEnd(label) {
  const time = this._times.get(label);
  if (!time) {
    process.emitWarning(`No such label '${label}' for console.timeEnd()`);
    return;
  }
  const duration = process.hrtime(time);
  const ms = duration[0] * 1000 + duration[1] / 1e6;
  this.log('%s: %sms', label, ms.toFixed(3));
  this._times.delete(label);
  return `${label}: ${ms.toFixed(3)}ms`;
};

const tmpConsole = new Console(process.stdout, process.stderr);

function show() {
	tmpConsole.time('for')
	for(let i = 0; i < 10000; i ++) {

	}
	return tmpConsole.timeEnd('for')
}

const res = show();
console.log(res);
