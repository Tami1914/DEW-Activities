fetch('employees.json').then(
    function(request){
     return request.json();
    }
  ).then(
    function (json){
      console.log('los datos:', json);

        let table = document.createElement("table");
        let tableHeader = document.createElement("thead"); 

        tableHeader.innerHTML = "Empleados";

        for (let i = 0; i < json.length; i++) {
            table.appendChild(tableHeader);
            const row = document.createElement("tr");
            row.innerHTML = `<td>${json[i].id}</td>,<td>${json[i].name}</td>,<td>${json[i].department}</td>`;
            table.appendChild(row);
        }

        document.body.append(table);

    }
  );
  console.log("se sigue ejecutando el documento");