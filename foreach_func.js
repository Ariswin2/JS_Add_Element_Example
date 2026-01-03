arr = ['CSE', 'IT', 'ECE', 'EEE']

arr.forEach(element => {
    let opt = document.createElement("option")
    opt.textContent = element
    opt.value = element
    console.log(element)
    document.getElementById('dropDown').appendChild(opt)
});