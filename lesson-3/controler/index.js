const fs = require('fs/promises');

async function getData(){
    let data = await fs.readFile("./data/student.json","utf-8");
    let students = JSON.parse(data);
    return students
}

module.exports = {
    getData
}

