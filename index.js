// const testVar = {};

// function testFunc() {
// 	return "hi";
// }

function superbowlWin(history) {
	let solution = history.find(function(event) {
		return event.result === "W";
	});
	return !!solution ? solution.year : undefined;
}
