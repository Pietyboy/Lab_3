var index = 0;
let table = document.createElement('table'); 
table.id = 'main__table';
var i,j;


function Create_table (){
    if (index != 0){
        Alert();
    }
    else{ 
        index++;
        for (i = 0; i < 3; i++){
            let tr = document.createElement('tr');
            tr.id = i+1;
            table.append(tr);
            for (j = 0; j < 3; j++){
                let th = document.createElement('th');
                if(j == 0){
                    th.innerHTML = tr.id;
                }
                tr.append(th);
            }
        }
        document.body.append(table);
    }
}

function Alert(){
    alert("Таблица уже создана");
}

function Add_row(){
    let tr = document.createElement('tr'); 
    tr.id = i+1;
    i++;
    table.append(tr);
    for (j = 0; j < 3; j++){
        let th = document.createElement('th');
        if(j == 0){
                th.innerHTML = tr.id;
        }
        tr.append(th);
    }
}

function Del_row(){
    var row = document.getElementById(document.getElementById('input').value);
    if (row){
        row.remove();
    }
}