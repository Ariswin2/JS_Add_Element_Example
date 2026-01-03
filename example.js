function printValue() {
    let input = document.getElementById("inputText").value;

    if (input.trim() === "") return;

    let p = document.createElement("p");
    p.textContent = input;

    // 🔥 add animation class
    p.classList.add("added-text");

    document.getElementById("addText").appendChild(p);

    document.getElementById("inputText").value = "";
}
