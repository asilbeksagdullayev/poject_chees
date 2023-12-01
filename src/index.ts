// /* Closure */
// function createIncrement() {
// 	let counter = 1;
// 	return function () {
// 		return counter++;
// 	};
// }

// const increment = createIncrement();

// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3
// console.log(increment()); // 4
// console.log(increment()); // 5
// console.log(increment()); // 6

// function createLogger() {
// 	const girls: string[] = [];
// 	const boys: string[] = [];

// 	return function (name: `${string}${'bek' | 'xon'}` | 'Log') {
// 		if (name === 'Log') return console.log({ boys, girls });

// 		const list = name.endsWith('bek') ? boys : girls;
// 		list.push(name);
// 	};
// }

// const logger = createLogger();

// logger('Odilbek');
// logger('Jamshidbek');
// logger('Madinaxon');
// logger('Durdonaxon');
// logger('Asilbek');
// logger('Asilbek');
// logger('Odilbek');
// logger('Log');

function memoryGRIMS(word: string) {
	let newStory = '';
	return function recreate(story: string) {};
}

const recreate = memoryGRIMS('pdp');
recreate('Man pdp ni yaxshi koraman. Chiroyli bino ekan');
recreate('ArslonbekXX pdp da mentor bolishni xoxlaydi. Kim yana xoxlaydi ?');
