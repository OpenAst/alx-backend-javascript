export default function createIteratorObject(report) {
	function* iterateEmployees() {
		for (const department of report.departments) {
			for (const employee of department.employees) {
				yield employee;
			}
		}
	}
