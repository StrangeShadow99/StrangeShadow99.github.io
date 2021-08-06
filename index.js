document.querySelector(".contactForm").addEventListener("submit",submitForm);
function submitForm(e){
   
  e.preventDefault();

  let name = document.querySelector("#NameInput").value;
  let email = document.querySelector("EmailInput").value;
  let message = document.querySelector("MessageInput").value;
  let subject = document.querySelector("SubjectInput").value;

  saveContatInfo(name, email, message, subject);

  document.querySelector(".contactForm").rest();

  sendEmail(name, email, message, subject)
}
function sendEmail(name, email, message, subject){
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'nkaley99@gmail.com',
    password: "pbyeiiimsaolzgeb",
    To: "nkaley99@gmail.com",
    From: "nkaley99@gmail.com",
    Subject: $(subject),
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

  }).then((message)=> alert("mail sent successfully"))
}