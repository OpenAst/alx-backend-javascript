export default function createIteratorObject(report) {
	const myarray = [];
	for (const item of Object.values(reprot.allEmployees)) {
		myarray.push(...item);
	}

	return myarray;
}
