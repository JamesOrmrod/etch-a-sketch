const gridContainer = document.querySelector("#grid-container");

// add 16 grid box divs
setGridSquares(16);

const gridBtn = document.querySelector("#grid-button");

gridBtn.addEventListener("click", (e) => setSquares(prompt("How many squares?")));

const rgbToggle = document.querySelector("#rgb-toggle");

function setSquares(squares) {
    if (isNaN(squares)) {
        alert("Enter a valid number");
    } else if (squares > 10000) {
        alert("Please enter 10,000 or less.")
    } else {
        const gridBoxes = document.querySelectorAll(".grid-box");
        gridBoxes.forEach((gridBox) => {
            gridBox.remove();
        });
        setGridSquares(squares);
    }
}

function setGridSquares(squares) {
    for (i = 0; i < squares; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");

        gridBox.style.flex = "1 1 " + (1 / Math.sqrt(squares)) * 100 + "%";
    
        gridContainer.appendChild(gridBox);
    
        gridBox.addEventListener("mouseenter", () => {
 
            let BGColor =  gridBox.style.backgroundColor;
            let colorArray = BGColor.split(",");

            console.log(rgbToggle.checked)

            if (colorArray.length === 1 && rgbToggle.checked) {
                gridBox.style.backgroundColor = getRandColor();
            } else if (colorArray.length === 1) {
                gridBox.style.backgroundColor = "rgb(0, 0, 0, 0.1)";
            }

            if (colorArray.length === 4) {
                colorPct = colorArray[3].trim().replace(")", "");
                if (colorPct < 1) {
                    colorPct = +colorPct + 0.1;
                }
                colorArray[3] = ` ${colorPct})`;
                gridBox.style.backgroundColor = colorArray.join(",");
                return;
            }
            

        });
        // gridBox.addEventListener("mouseleave", () => {
        //     gridBox.classList.remove("hovered");
        // }); 
    }
}

// const gridBoxes = document.querySelectorAll(".grid-box");
// gridBoxes.forEach((gridBox) => {
//     gridBox.addEventListener("mouseenter", () => {
//         gridBox.style.backgroundColor = getRandColor();

//     });
// });



function getRandColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b}, 0.1)`;
}