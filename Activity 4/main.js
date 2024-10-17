var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];

function show(employees) {

    let table = document.createElement("table");
    let tableHeader = document.createElement("thead"); 

    tableHeader.innerHTML = "Empleados";

    for (let i = 0; i < employees.length; i++) {
        table.appendChild(tableHeader);
        const row = document.createElement("tr");
        row.innerHTML = `<td>${employees[i].id}</td>,<td>${employees[i].name}</td>,<td>${employees[i].department}</td>`;
        table.appendChild(row);
    }

    document.body.append(table);


}