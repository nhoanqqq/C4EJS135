/*
Cho danh sach hoc sinh, hay lay ra hoc sinh co 'a' trong ten va diem tren 5 sau do thay 'a'
 = 'b'
*/

var students = { "Nam": 4, "Long": 8, "Hoang": 9, "Vu": 7, "Khanh": 9, "Ana": 10 };

const studentName = (students) => {
    const studentName = [];

    for (const [key, value] of Object.entries(students)) {
        if ((key.indexOf("a") != -1 || key.indexOf("A") != -1) && value >= 5) {
            let tmp;
            tmp = key.replace(/[A]/gi, 'B');

            studentName.push(tmp, value);
        }

    }
    return studentName;
}
console.log(studentName(students));