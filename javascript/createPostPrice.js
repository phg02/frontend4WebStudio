const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const title = document.querySelector('#title');
    const price = document.querySelector('#price'); 
    
    title.classList.remove('error-input');
    price.classList.remove('error-input'); 

    let error=false;
    let errorList='';
    if (title.value === '' || title.value === null) {
        error = true;
        title.classList.add('error-input');
        title.focus();
        errorList += '<li>Title is required</li>';
    }
    
    if (price.value === '' || price.value === null) {
        error = true;
        price.classList.add('error-input');
        price.focus();
        errorList += '<li>Price is required</li>';
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