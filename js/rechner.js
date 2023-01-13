let tbs = document.getElementsByClassName("zutaten-tabelle");
for(let i = 0; i < tbs.length; i++){
    localStorage.setItem("table" + i, tbs[i].outerHTML);
}
localStorage.setItem("value", document.getElementById("portionen").value);

function calculate(ports){

    let tbsl = document.getElementsByClassName("zutaten-tabelle").length;
    let orginal_value = parseInt(localStorage.getItem("value"));

    for(let i = 0; i < tbsl; i++){

        let orginal_table = localStorage.getItem("table" + i);
        let temp = document.createElement('div');
        temp.innerHTML = orginal_table;
        let orginal_rows = temp.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        temp.remove();


        var rows = document.getElementsByClassName("zutaten-tabelle")[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");

        for(let o = 0; o < orginal_rows.length; o++){

            let orginal_number = orginal_rows[o].getElementsByTagName("td")[0].innerHTML;
            let cell = rows[o].getElementsByTagName("td")[0];

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

    



    
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function roundOff(value,round) {
    return (parseInt(value * (10 ** (round + 1))) - parseInt(value * (10 ** round)) * 10) > 4 ? (((parseFloat(parseInt((value + parseFloat(1 / (10 ** round))) * (10 ** round))))) / (10 ** round)) : (parseFloat(parseInt(value * (10 ** round))) / ( 10 ** round));
 }