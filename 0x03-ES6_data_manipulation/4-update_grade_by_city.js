const updateStudentGradeByCity = (studentsList, city, newGrades) => {
  const studentsInCity = studentsList.filter((student) => student.location === city);
  const studentsWithGrade = studentsInCity.map((student) => {
    // here we're going to add a grade for each student if they have given a grade,
    // so in order to do that, we need to first check the 'newGrades' array if a
    // student has a matching id
    const isStudentHasGrade = newGrades.find((grade) => grade.studentId === student.id);
    // here we use terinary operator to assing a student either 'grade' or 'N/A' if not
    const studentGrade = isStudentHasGrade ? isStudentHasGrade.grade : 'N/A';
    return { ...student, grade: studentGrade };
  });

  return studentsWithGrade;
};

export default updateStudentGradeByCity;
