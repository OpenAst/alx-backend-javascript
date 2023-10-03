/**
 * Retrieves a list of ids
 * @params {{
 * 	id: Number,
 * 	firstName: String,
 * 	location: String
 * }[]} students The list of students.
 * @returns 
 */

export default function getListStudentIds(students) {
  if (student instanceof Array) {
    return students.map((student) => students.id);
  }
  return [];
}
