const createGrid = (list) => {
    let grid = document.createElement('table');
    grid.style.width = '50%';
    grid.style.border = '1px solid green';
    grid.style.position = 'center';
    grid.style.marginLeft = 'auto';
    grid.style.marginRight = 'auto';
    grid.style.marginBottom = '20px';
    grid.style.background = 'black';
    grid.style.color = 'green';



    let count = 0;
    while(count<list.length+2){
        let line = grid.insertRow();
        for(let j =0; j<5; j++){
            let column = line.insertCell();
            column.className = 'grid';
            column.style.width = '30px';
            column.style.border = '1px solid green';

            if(count === 0){
                line.setAttribute('colspan', 5);
                column.appendChild(document.createTextNode(parseDate(list[count].dt_txt)[0] ));
                break;
            }
            switch(j){
                case 0:
                    if(count === 1){
                        column.appendChild(document.createTextNode('time'));
                        break;
                    }
                    column.appendChild(document.createTextNode(parseDate(list[count-2].dt_txt)[1] ));
                    break;

                case 1:
                    if(count === 1){
                        column.appendChild(document.createTextNode('temperature'));
                        break;
                    }
                    column.appendChild(document.createTextNode(Math.round ((list[count-2].main.temp-32)*9/5)));
                    break;

                case 2:
                    if(count === 1){
                        column.appendChild(document.createTextNode('pressure'));
                        break;
                    }
                    column.appendChild(document.createTextNode(list[count-2].main.pressure));
                    break;

                case 3:
                    if(count === 1){
                        column.appendChild(document.createTextNode('conditions'));
                        break;
                    }
                    column.appendChild(document.createTextNode(list[count-2].weather[0].description));
                    break;

                case 4:
                    if(count === 1){
                        column.appendChild(document.createTextNode('wind Speed'));
                        break;
                    }
                    column.appendChild(document.createTextNode(list[count-2].wind.speed));
                    break;
            }
        }
        count ++;
    }
    return grid;
};
