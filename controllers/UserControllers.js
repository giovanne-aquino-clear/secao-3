class UserController{
    constructor(formId){
        this.formEl = document.getElementById(formId);
    }

    onSubmit(){
document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function(field, index){

        if (field.name === "gender") {

            if (field.checked) {
                user[field.name] = field.value
            }

        } else {

            user[field.name] = field.value

        }

    });
    
    var objetctUser = new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.email,
        user.password,
        user.photo,
        user.admin,
    );

    addLine(objectUser)

});


    }
getValues(){

    let user = {};

    this.formEl.elements.forEach(function(field, index){

        if (fields.field.name === "gender") {

            if (field.checked) {
                user[field.name] = field.value
            }

        } else {

            user[field.name] = field.value

        }

    });
    
    return  new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.email,
        user.password,
        user.photo, 
        user.admin,
    );


}



}