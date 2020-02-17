
/* module exercise

 wrap all the functions in a module factory (ie, function named 'defineWorkshop()') this function should make and return a public API object

*/

var deepJS = defineWorkshop();
// var studentRecords = [
// 	{ id: 313, name: "Frank", paid: true, },
// 	{ id: 410, name: "Suzy", paid: true, },
// 	{ id: 709, name: "Brian", paid: false, },
// 	{ id: 105, name: "Henry", paid: false, },
// 	{ id: 502, name: "Mary", paid: true, },
// 	{ id: 664, name: "Bob", paid: false, },
// 	{ id: 250, name: "Peter", paid: true, },
// 	{ id: 375, name: "Sarah", paid: true, },
// 	{ id: 867, name: "Greg", paid: false, },
// ];

deepJS.addStudent(313, 'Frank', true);
deepJS.addStudent(410, 'Suzy', true);
deepJS.addStudent(709, 'Brian', false);
deepJS.addStudent(105, 'Henry', false);
deepJS.addStudent(502, 'Mary', true);
deepJS.addStudent(555, 'Bob', false);
deepJS.addStudent(250, 'Peter', true);
deepJS.addStudent(375, 'Kate', false);
deepJS.addStudent(767, 'Greg', true);


// var currentEnrollment = [ 410, 105, 664, 375 ];

deepJS.enrollStudents(410);
deepJS.enrollStudents(313);
deepJS.enrollStudents(502);
deepJS.enrollStudents(250);
deepJS.enrollStudents(767);


// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

deepJS.printCurrentEnrollment();
console.log('------');
deepJS.enrollPaidStudents();
console.log('------');
deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************

function defineWorkshop () {
  var currentEnrollment = [];
  var studentRecords = [];


  var publicAPI = {
    addStudent,
    enrollStudent,
    enrollPaidStudents,
    remindUnpaidStudents,
    printCurrentEnrollment,
  };

  return publicAPI;

  //*********************

  function addStudent(id, name, paid) {
    studentsRecords.push({ id, name, paid});
  }

  function enrollStudent(id) {
    if(!currentEnrollment.includes(id)) {
      currentEnrollment.push(id)''
    }
  }

  function printCurrentEnrollment() {
    printRecords(currentEnrollment);
  }

  function enrollPaidStudents() {
    currentEnrollment = paidStudentsToEnroll();
  }

  function remindUnpaidStudents() {
    remindUnpaid(currentEnrollment);
  }

  function getStudentFromId(studentId) {
  	return studentRecords.find(matchId);

  	// *************************

  	function matchId(record) {
  		return (record.id == studentId);
  	}
  }

  function printRecords(recordIds) {
  	var records = recordIds.map(getStudentFromId);

  	records.sort(sortByNameAsc);

  	records.forEach(printRecord);
  }

  function sortByNameAsc(record1,record2){
  	if (record1.name < record2.name) return -1;
  	else if (record1.name > record2.name) return 1;
  	else return 0;
  }

  function printRecord(record) {
  	console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
  }

  function paidStudentsToEnroll() {
  	var recordsToEnroll = studentRecords.filter(needToEnroll);

  	var idsToEnroll = recordsToEnroll.map(getStudentId);

  	return [ ...currentEnrollment, ...idsToEnroll ];
  }

  function needToEnroll(record) {
  	return (record.paid && !currentEnrollment.includes(record.id));
  }

  function getStudentId(record) {
  	return record.id;
  }

  function remindUnpaid(recordIds) {
  	var unpaidIds = recordIds.filter(notYetPaid);

  	printRecords(unpaidIds);
  }

  function notYetPaid(studentId) {
  	var record = getStudentFromId(studentId);
  	return !record.paid;
  }

}
