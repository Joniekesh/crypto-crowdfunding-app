export const daysLeft = (deadline) => {
	const difference = new Date(deadline).getTime() - Date.now();
	const remainingDays = difference / (1000 * 60 * 60 * 24);

	return remainingDays.toFixed(0);
};

export const donation = (amountCollected, target) => {
	const percentCollected = Math.round((amountCollected / target) * 100);

	return percentCollected;
};
