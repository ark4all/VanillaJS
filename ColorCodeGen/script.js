const getColor = () => {
    const randomNum = Math.floor(Math.random()*16777215);
    const randomCode = `#${randomNum.toString(16)}`;
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener('click', getColor);
getColor();