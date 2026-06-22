let schoolData = `{"classA":[
  {"name":"Amara",   "CSC101":72, "CSC102":55, "CSC103":68},
  {"name":"Chidi",   "CSC101":40, "CSC102":48, "CSC103":35},
  {"name":"Ngozi",   "CSC101":85, "CSC102":90, "CSC103":78},
  {"name":"Emeka",   "CSC101":60, "CSC102":52, "CSC103":44}],
"classB":[
  {"name":"Fatima",  "CSC101":91, "CSC102":88, "CSC103":95},
  {"name":"Tunde",   "CSC101":30, "CSC102":45, "CSC103":50},
  {"name":"Blessing","CSC101":77, "CSC102":63, "CSC103":70},
  {"name":"Seun",    "CSC101":55, "CSC102":49, "CSC103":58}]}`;

const parsedSchoolData = JSON.parse(schoolData);
const { classA, classB } = parsedSchoolData;

document.querySelector(".go-btn").onclick = getResults;

function getAveragesForClass(_class) {
  return _class.map((student) => {
    const { CSC101, CSC102, CSC103 } = student;
    const average = ((CSC101 + CSC102 + CSC103) / 3).toFixed(1);
    return { ...student, average };
  });
}

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function getResults() {
  const classAWithAverages = getAveragesForClass(classA);
  const classBWithAverages = getAveragesForClass(classB);

  const classes = [
    { name: "Class A", _class: classAWithAverages },
    { name: "Class B", _class: classBWithAverages },
  ];

  document.querySelector(".container").innerHTML = `
  ${classes
    .map((c) => {
      return `<h3>${c.name}</h3>
     <table> 
       <tr>
         ${Object.keys(c._class[0])
           .map((key) => `<th> ${capitalize(key)} </th>`)
           .join("")}
       </tr>
       ${c._class
         .map((student) => {
           const tableData = Object.values(student)
             .map((data) => `<td> ${data} </td>`)
             .join("");

           return `<tr>${tableData}</tr>`;
         })
         .join("")}
    </table>`;
    })
    .join("")}
  `;
}
