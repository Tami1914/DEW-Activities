function createTable(event) { //Creo la tabla
    event.preventDefault();

    let table = document.createElement('table');
    document.body.append(table);

    let tableRows = document.getElementById("GetRows").value;
    let tableColumns = document.getElementById("GetColumns").value;

    for(let i=0; i<tableRows; i++){
        const row = document.createElement('tr');
        table.appendChild(row);

        for(let j=0; j<tableColumns; j++){
            row.innerHTML += '<td>'+" row:"+i+" Column:"+j+'</td>';
        }
    }
}