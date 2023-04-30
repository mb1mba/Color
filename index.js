let colorContainer = document.querySelector('.colors');
let modeValue = document.getElementById('modeList')
let colorInput = document.getElementById('colorInput');
let colorsArray = [];

function setColorScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${modeValue.value}&count=5`)
    .then(res => res.json())
    //forEach colors we push hex value in colorsArray
    .then(data => { data.colors.forEach((color) =>{
                // We use slice() to delete the "#"
                colorsArray.push(color.hex.value.slice(1,))
            })
    })
}

setColorScheme()

function renderColorScheme(){
    // We use setTimeout because of async function
    setTimeout(()=>{
        let html = "";
        for(let i = 0; i < colorsArray.length; i++){
            html += `
            <div class="colorsDiv">
                <div class="color-container" style="background-color:${colorsArray[i]}" id="color-${i}"></div>
                <p class="colorRef">#${colorsArray[i]}
            </div>
            `   
        }
        colorContainer.innerHTML = html;
    }, 250)
}

renderColorScheme()  

document
    .getElementById('colorSchemeButton')
    .addEventListener('click', ()=>{
        renderColorScheme()  
        setColorScheme()
        colorsArray = []
})