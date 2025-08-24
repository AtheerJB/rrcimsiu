function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send("service_p0kri2q", "template_pexjx6g", templateParams)
    .then(() => {
      alert("تم إرسال رسالتك بنجاح! 🤍");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("فشل إرسال الرسالة 😥");
      console.error("EmailJS error:", error);
    });
}
