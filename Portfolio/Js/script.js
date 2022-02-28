
var className = "sticky";
var scrollTrigger = 60;

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".navbar").classList.add(className);
    }else {
        document.querySelector(".navbar").classList.remove(className);
    }
}

// Active Navbar Script

var sections = document.querySelectorAll('section');

onscroll = function() {
	var scrollPosition = document.documentElement.scrollTop;

	sections.forEach( section => {
		if(scrollPosition >= section.offsetTop - section.offsetHeight*0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.25) {
			var currentId = section.attributes.id.value;
			removeAllActiveClasses();
			addActiveClass(currentId);
			removeAllFootClasses();
			addFootClass(currentId);
		}
	});
};

var removeAllActiveClasses = function() {
	document.querySelectorAll('#navlinks a').forEach((ele) => {
		ele.classList.remove("active");
	});
};

var removeAllFootClasses = function() {
	document.querySelectorAll('#foonavlinks a').forEach((el) => {
		el.classList.remove("active");
	});
};

var addActiveClass = function(id) {
	var selector1 = `#navlinks a[href="#${id}"]`;
	document.querySelector(selector1).classList.add("active");
}

var addFootClass = function(id) {
	var selector2 = `#foonavlinks a[href="#${id}"]`;
	document.querySelector(selector2).classList.add("active");
}

// Typing Effect Animation Script

var typed = new Typed(".typing", {
	strings: ["Ethical Hacker","Frontend developer", "Freelancer", "Content creator"],
	typeSpeed: 100,
	backSpeed: 40,
	loop: true
});

// Contact Form Validation Script

var form = document.getElementById("my-form");
async function handleSubmit(event) {
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	event.preventDefault();
	document.querySelector("#submitBtn").innerHTML = "SENDING ...";
	if (document.querySelector("#NAME").value.trim().length == 0) {
		isMessage("Please Fill out your Name", "red");
	} else if (!emailRegEx.test(document.querySelector("#EMAIL").value)) {
		isMessage("Please Check your Email Address", "red");
	} else if (document.querySelector("#MESSAGE").value.trim().length == 0) {
		isMessage("Please Fill out your Message", "red");
	} else {
		var data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				isMessage("Thanks for your submission!", "#17ad11");
				form.reset();
			})
			.catch((error) => {
				isMessage(
					"Oops! There was a problem submitting your form",
					"red"
				);
			});
	}
}
function isMessage(Value, Color) {
	var status = document.querySelector("#form-status");
	status.innerHTML = Value;
	status.style.display = "block";
	status.style.backgroundColor = Color;
	document.querySelector("#submitBtn").innerHTML = "SEND";
}
form.addEventListener("submit", handleSubmit);