document.addEventListener("DOMContentloaded", function() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementsByClassName("form-control")[0].value;
        const surname = document.getElementsByClassName("form-control")[1].value;
        const username = document.getElementsByClassName("form-control")[2].value;
        const city = document.getElementsByClassName("form-control")[3].value;
        const state = document.getElementsByClassName("form-control")[4].value;
        const zip = document.getElementsByClassName("form-control")[5].value;
        const account = document.getElementsByClassName("form-control")[6].value;
        const idType = document.getElementsByClassName("form-control")[7].value;
        const idNumber = document.getElementsByClassName("form-control")[8].value;

        const validate = true;
        const errors = "";
    });
});