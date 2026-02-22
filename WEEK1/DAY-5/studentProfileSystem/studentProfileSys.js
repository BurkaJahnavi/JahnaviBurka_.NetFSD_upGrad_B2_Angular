let student = {
    name: "Jahnavi",
    rollNo: 101,
    marks: 85
};

function updateStudentProfile(studentObj) {
    document.getElementById("profile").innerHTML =
        "Name: " + studentObj.name + "<br>" +
        "Roll No: " + studentObj.rollNo + "<br>" +
        "Marks: " + studentObj.marks;
}

function updateMarks(newMarks) {
    student.marks = newMarks;
    updateStudentProfile(student);
}

document.getElementById("updateBtn").addEventListener("click", function () {
    let newMarks = document.getElementById("marksInput").value;
    updateMarks(newMarks);
});

updateStudentProfile(student);