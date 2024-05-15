const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const title = document.querySelector('#title');
    const price = document.querySelector('#price'); 
    const sortby = document.querySelector('#sortby');
    const fileInput = document.querySelector('.drop-zone__input');
    
    title.classList.remove('error-input');
    price.classList.remove('error-input'); 
    sortby.classList.remove('error-input');
    fileInput.classList.remove('error-input');

    let error=false;
    let errorList='';
    if (title.value === '' || title.value === null) {
        error = true;
        title.classList.add('error-input');
        title.focus();
        errorList += '<li>Title is required</li>';
    }

    if (sortby.value !== 'Dog' && sortby.value !== 'Cat') {
        error = true;
        sortby.classList.add('error-input');
        sortby.focus();
        errorList += '<li>Please select a pet type</li>';
    }

    if (price.value === '' || price.value === null) {
        error = true;
        price.classList.add('error-input');
        price.focus();
        errorList += '<li>Price is required</li>';
    }

    if (!fileInput.files.length) {
        error = true;
        fileInput.classList.add('error-input');
        fileInput.focus();
        errorList += '<li>Please upload an image</li>';
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