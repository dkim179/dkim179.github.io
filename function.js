function check(){
    let hiring = document.getElementById("Hiring");
    let h_rate = document.getElementById("h_rate");

    if (hiring.checked) 
    {
        h_rate.style.display = 'block';
    }
    else 
    {
        h_rate.style.display = 'none';
    }
}

function validation() { 
    let form = document.getElementById("contact_form");
    let regex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
    let postal = form.postal.value;
    
    if(regex.test(postal)){
        return true;
    }
    else
    {
        alert("Incorrect Postal code");
        return false;
    }
}
