recu_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_name, student_grade = line.split()
        if int(student_grade) < 6:
            recu_students.append(student_name + "\n")

with open("recuStudents.txt", mode="w") as recu_students_file:
    recu_students_file.writelines(recu_students)
