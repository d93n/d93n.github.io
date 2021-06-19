function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:(document.getElementById("checkout-cart").innerHTML),

};

emailjs.send('service_ffvz0wj', 'template_s01w3lo', tempParams)
.then(function(res){
    console.log("Success", res.status);
})

}


