const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const title = document.querySelector('#title');
    //remove error
    title.classList.remove('error-input');

    let error=false;
    let errorList='';
    if (title.value === '' || title.value === null) {
        error = true;
        title.classList.add('error-input');
        title.focus();
        errorList += '<li>Title is required</li>';
    }
    let errors="<ul class='error-list'>"+errorList+"</ul>";
    if(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: errors
        });
        return
    }
    form.submit();
    
})