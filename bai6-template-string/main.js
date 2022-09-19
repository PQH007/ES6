// template string là cộng 2 chuỗi
// còn gọi là nội suy
// để viết đấu \ phải viết \\
// \n là xuống dòng
// để viết ${} thì viết \${}
const courseName = 'javascript';
const courseName1 = 'PHP'
const description = `Course Name: ${courseName} \\ ${courseName1} \${}`;
console.log(description);

// mutli-line để dùng ta sử dụng dấu ``
const line = `line 1
line 2
line 3`
console.log(line);
