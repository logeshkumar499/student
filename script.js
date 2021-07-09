function onFormSubmit() {
    let formData = readSubmitData();
    console.log("submit",formData)
    insertNewRecord(formData);
    resertForm();
}

function readSubmitData(){
    let formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["age"] = document.getElementById("age").value;
    formData["subject"] = document.getElementById("subject").value;
    formData["mark"] = document.getElementById("mark").value;
    return formData;
}

function insertNewRecord(data){
    
    let table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    let tr = table.getElementsByTagName("tr");
    let newRow = table.insertRow(table.length);
    
    column = newRow.insertCell(0);
    column.innerHTML = tr.length;

    column = newRow.insertCell(1);
    column.innerHTML = data.rollno;

    column = newRow.insertCell(2);
    column.innerHTML = data.studentName;
    
    column = newRow.insertCell(3);
    column.innerHTML = data.age;
    
    column = newRow.insertCell(4);
    column.innerHTML = data.subject;
    
    column = newRow.insertCell(5);
    column.innerHTML = data.mark;
    
}

function resertForm(){
    document.getElementById("studentName").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("age").value = "";
    document.getElementById("subject").value = "Choose Subject";
    document.getElementById("mark").value = "";
}


function searchFun(){
    let filter = document.getElementById('search').value.toUpperCase();
    let studentList = document.getElementById("studentList");
    let tr = studentList.getElementsByTagName("tr");
    
    for(let i=0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];

        if(td){
            let textvalue = tr.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display ="none";
            }
        }
    }
}

function sortTable(n) {
    var table;
    table = document.getElementById("studentList");
    var rows, i, x, y, count = 0;
    var switching = true;
    var direction = "ascending";

    while (switching) {
        switching = false;
        var rows = table.rows;
        for (i = 1; i <(rows.length - 1); i++) {
            var Switch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (direction == "ascending") {
                if (Number(x.innerHTML.toLowerCase()) > Number(y.innerHTML.toLowerCase())){
                    Switch = true;
                    break;
                }
            } else if (direction == "descending") {
                if (Number(x.innerHTML.toLowerCase()) < Number(y.innerHTML.toLowerCase()))
                    {
                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            count++;
        } else {
            if (count == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
}
