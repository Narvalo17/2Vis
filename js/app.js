document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            boxes.forEach(b => {
                b.classList.remove("active");
            });
            box.classList.add("active");
        });
    });
});

function displayClientForm() {
    document.getElementById('clientForm').style.display = 'block';
    document.getElementById('professionnelleForm').style.display = 'none';
}

function displayProfessionnelleForm() {
    document.getElementById('professionnelleForm').style.display = 'block';
    document.getElementById('clientForm').style.display = 'none';
}

document.getElementById('userInput').addEventListener('input', function() {
    var selectedValue = this.value.toLowerCase();
    
    if (selectedValue === 'client') {
        displayClientForm();
    } else if (selectedValue === 'professionnelle') {
        displayProfessionnelleForm();
    }
});

