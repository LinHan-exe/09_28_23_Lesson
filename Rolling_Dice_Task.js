function createParagraph(text) {
    const para = document.createElement("p");
    para.textContent = text;
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

buttons[0].addEventListener("click", function() {
    createParagraph("In a meadow bathed in golden light");
});

buttons[1].addEventListener("click", function() {
    createParagraph("Where nature weaves its colors bright");
});

buttons[2].addEventListener("click", function() {
    createParagraph("The gentle breeze, a soothing song");
});

buttons[3].addEventListener("click", function() {
    createParagraph("As time itself moves slow along");
});

buttons[4].addEventListener("click", function() {
    createParagraph("Amidst the trees, the birds take flight");
});
