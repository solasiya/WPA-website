(function () {
    // Initialize EmailJS with your Public Key
    // Replace "YOUR_PUBLIC_KEY" with your actual public key from EmailJS dashboard
    emailjs.init("YOUR_PUBLIC_KEY");

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // These IDs from your EmailJS account
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_CONTACT_TEMPLATE_ID';

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, (err) => {
                    alert('Failed to send message. Error: ' + JSON.stringify(err));
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Handle Subscription Form Submission
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_SUBSCRIBE_TEMPLATE_ID';

            const submitBtn = subscribeForm.querySelector('input[type="submit"]');
            const originalBtnValue = submitBtn.value;
            submitBtn.value = '...';
            submitBtn.disabled = true;

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Thank you for subscribing!');
                    subscribeForm.reset();
                }, (err) => {
                    alert('Subscription failed. Please try again later.');
                    console.error('EmailJS Error:', err);
                })
                .finally(() => {
                    submitBtn.value = originalBtnValue;
                    submitBtn.disabled = false;
                });
        });
    }
})();
