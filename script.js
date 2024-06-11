// display the squares in the container (dimension is number of row/columns)

const container = document.querySelector("#container");

const addDiv = (dimension) => {
    //create Rows
    for (i=1; i<dimension +1; i++){
        const divRow = document.createElement("div");
        divRow.classList.add(`row`)
        divRow.setAttribute("style", "flex: 1; align-content: stretch; ")
        //fill rows with divs
        for (j=1; j < dimension+1; j++) {
            const divRowElement = document.createElement("div");
            divRowElement.classList.add("divRowElement");
            divRowElement.setAttribute("style", "display; aspect-ratio: 1/1; border: 1px solid black; ")
            divRow.appendChild(divRowElement)
        }
        container.appendChild(divRow)
    }
    
}


addDiv(2)
