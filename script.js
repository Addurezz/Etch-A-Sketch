// display the squares in the container (dimension is number of row/columns)

const container = document.querySelector("#container");

const addDiv = (dimension) => {
    clear()
    //create Rows
    for (i=1; i<dimension +1; i++){
        const divRow = document.createElement("div");
        divRow.classList.add(`row`)
        divRow.setAttribute("style", "flex: 1; align-content: stretch; ")
        //fill rows with divs
        for (j=1; j < dimension+1; j++) {
            const divRowElement = document.createElement("div");
            divRowElement.classList.add("divRowElement");
            divRowElement.setAttribute("style", "aspect-ratio: 1/1;")
            divRow.appendChild(divRowElement)
        }
        container.appendChild(divRow)
    }
    changeColor()
}

//clears the div

const clear = () => container.textContent=""

//gets user input and displays the dimension accordingly

const btn = document.querySelector("#enter");
const getUserInput = () => {
    const userInput = Number(document.querySelector("input").value);
    console.log(typeof userInput);
    addDiv(userInput);
}


btn.addEventListener("click", getUserInput)

//make the divs black when the cursor hovers over them

const changeColor=  () => {
    const divRowElements = document.querySelectorAll(".divRowElement");
    divRowElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("colored")
            element.style.backgroundColor ="black"
        });
    });
};

//clear the color

const clearColor = () => {
    const coloredDiv = document.querySelectorAll(".colored");

    coloredDiv.forEach((element) => {
        element.classList.remove("colored");
        element.style.backgroundColor=""
    });
}

const btnClear = document.querySelector("#clearColor");
btnClear.addEventListener("click", clearColor);







