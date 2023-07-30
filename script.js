const getColor = () => {
    const randomnumber = Math.floor(Math.random() * 1677215);
    const randomColorCode = "#"+randomnumber.toString(16);
    document.body.style.backgroundColor = randomColorCode;
    document.getElementById("color-code").innerText = randomColorCode;

    navigator.clipboard.writeText(randomColorCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();