// sendmail

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#uname");
const emailInput = document.querySelector("#uemail");
const phoneInput = document.querySelector("#uphno");
const messageInput = document.querySelector("#umessage");
const cnameInput = document.querySelector("#ucname");
const cityInput = document.querySelector("#ucity");
const counInput = document.querySelector("#ucont");

const pubkey = "X3kfhXretl4Bh1NBk";
const serkey = "service_nlwmmsz";
const temkey = "template_sk9z8rf";

emailjs.init(pubkey);

contactForm.addEventListener("submit", e => {
	e.preventDefault();
	submitBtn.innerText = "Just a moment...";

	const inputfields = {
		fname: nameInput.value,
		cname: cnameInput.value,
		city: cityInput.value,
		country: counInput.value,
		email: emailInput.value,
		phone: phoneInput.value,
		message: messageInput.value,
		// toem: "legendlong200@gmail.com",
		toem: "info@impelexports.com",
		site: "Impel Exports"
	}

	emailjs.send(serkey, temkey, inputfields)
		.then(() => {

			swal("Submitted!", "Your application reached us, soon our team will get back to you", "success")
				.then((value) => {
					location.reload();
				});

		})
})