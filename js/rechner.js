let tb = document.getElementById("zutaten-tabelle").outerHTML;
localStorage.setItem("table", tb);
localStorage.setItem("value", document.getElementById("portionen").value);

function calculate(ports){

    let orginal_table = localStorage.getItem("table");
    let orginal_value = parseInt(localStorage.getItem("value"));

    let temp = document.createElement('div');
    temp.innerHTML = orginal_table;
    let orginal_rows = temp.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    temp.remove();

    var rows = document.getElementById("zutaten-tabelle").getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for(let i = 0; i < orginal_rows.length; i++){

        let orginal_number = orginal_rows[i].getElementsByTagName("td")[0].innerHTML;
        let cell = rows[i].getElementsByTagName("td")[0];

        let portionen = parseFloat(ports.replaceAll(',','.'));

        if(portionen < 0){
            portionen = 0;
        }

        if(isNumber(orginal_number)){

            let inner = (orginal_number / orginal_value ) * portionen;
            inner = roundOff(inner, 2).toString();
            cell.innerHTML = inner.replaceAll('.',',');
        }
        

    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function roundOff(value,round) {
    return (parseInt(value * (10 ** (round + 1))) - parseInt(value * (10 ** round)) * 10) > 4 ? (((parseFloat(parseInt((value + parseFloat(1 / (10 ** round))) * (10 ** round))))) / (10 ** round)) : (parseFloat(parseInt(value * (10 ** round))) / ( 10 ** round));
 }