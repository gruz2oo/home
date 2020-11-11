


const addLastName = document.form.lastName;
const addFirstName = document.form.firstName;
const addDate = document.form.date;
const addEmail = document.form.email;


const addButton = document.form.button;



addButton.addEventListener('click', function () {
    const addForm = {
        LastName: addLastName.value,
        FirstName: addFirstName.value,
        Date: addDate.value,
        Email: addEmail.value,
    };
    
    console.log(addForm);
});
