
function handleSubmit(event) {
    event.preventDefault();

    var toastEl = document.getElementById('successToast');//    show toast
    var toast = new bootstrap.Toast(toastEl);
    toast.show();

    document.getElementById('userForm').reset();// make field is ''
}
