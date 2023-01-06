let tb = document.getElementById("zutaten-tabelle").outerHTML;
localStorage.setItem("table", tb);
localStorage.setItem("value", document.getElementsByClassName("portionen")[0].value);

function rechnen(ports){

    let orginal_table = localStorage.getItem("table");
    let orginal_value = parseInt(localStorage.getItem("value"));

    let temp = document.createElement('div');
    temp.innerHTML = orginal_table;
    let orginal_rows = temp.getElementsByTagName("tr");
    temp.remove();

    var rows = document.getElementById("zutaten-tabelle").getElementsByTagName("tr");

    for(let i = 0; i < orginal_rows.length; i++){

        let orginal_number = orginal_rows[i].getElementsByTagName("td")[0].innerHTML;
        let cell = rows[i].getElementsByTagName("td")[0];

        let portionen = parseFloat(ports.replaceAll(',','.'));

        if(portionen < 0){
            portionen = 0;
        }

        cell.innerHTML = (orginal_number / orginal_value ) * portionen;

    }
}