// import * as imported from './MyClass';
import def, {yourChild, herChild, Child} from './MyClass';

let main = () => {
	let obj = Child.getCedula();
	let field = Symbol.for('cedula');
	console.log(obj[field]);
	console.log(obj['cedula']);
	console.log(def, yourChild, herChild);
};

/**
 * [Async series of function to test promises]
 * @param  {[type]} secs [description]
 * @return {[type]}      [description]
 */
function waitASecond(secs) {
	return new Promise((resolve, reject) => {
		if (secs > 2) {
			reject('promise rejected');
		} else {
			setTimeout(function() {
			secs++;
			resolve(secs);
		}, 1000)
		}
	});		
}

waitASecond(0)
	.then(waitASecond)
	.then(function(seconds) {
		console.log('current seconds ' + seconds);
	})
	.catch( err => console.log('error ' + err));


/**
 * Run on row or waterfall way a list of promises
 * @param  {[type]} (resolve, reject)
 * @return {[type]}
 */
let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success on promise 1');
	}, 1000);
});

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('reject on promise 2');
	}, 2000);
});

//Promise.all([promise1, promise2])
Promise.race([promise1, promise2])
	.then(function(success) {
		console.log(success);
	})
	.catch(function(err) {
		console.log(err);	
	})



main();