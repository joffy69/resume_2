function sendMail(contactForm){
    emailjs.send('service_d6m0fqy','template_6g0ew0b',{
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log('success', response);
        },
        function(error){
            console.log("Failed", error);
        });
        return false;
}