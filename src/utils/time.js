export const secondsToDhms = seconds => {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor((seconds % (3600 * 24)) / 3600);
	var m = Math.floor((seconds % 3600) / 60);
	var s = Math.floor(seconds % 60);

	var dDisplay = d > 0 ? d + ":d " : "";
	var hDisplay = h > 0 ? h + ":h " : "";
	var mDisplay = m > 0 ? m + ":m " : "";
	var sDisplay = s > 0 ? s + ":s " : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
};

function restArguments(func, startIndex) {
	startIndex = startIndex == null ? func.length - 1 : +startIndex;
	return function () {
		var length = Math.max(arguments.length - startIndex, 0),
			rest = Array(length),
			index = 0;
		for (; index < length; index++) {
			rest[index] = arguments[index + startIndex];
		}
		switch (startIndex) {
			case 0:
				return func.call(this, rest);
			case 1:
				return func.call(this, arguments[0], rest);
			case 2:
				return func.call(this, arguments[0], arguments[1], rest);
		}
		var args = Array(startIndex + 1);
		for (index = 0; index < startIndex; index++) {
			args[index] = arguments[index];
		}
		args[startIndex] = rest;
		return func.apply(this, args);
	};
}

var delay = restArguments(function (func, wait, args) {
	return setTimeout(function () {
		return func.apply(null, args);
	}, wait);
});

export function debounce(func, wait, immediate) {
	var timeout, result;

	var later = function (context, args) {
		timeout = null;
		if (args) result = func.apply(context, args);
	};

	var debounced = restArguments(function (args) {
		if (timeout) clearTimeout(timeout);
		if (immediate) {
			var callNow = !timeout;
			timeout = setTimeout(later, wait);
			if (callNow) result = func.apply(this, args);
		} else {
			timeout = delay(later, wait, this, args);
		}

		return result;
	});

	debounced.cancel = function () {
		clearTimeout(timeout);
		timeout = null;
	};

	return debounced;
}
