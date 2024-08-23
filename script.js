// Add event listener to nav links
document.querySelectorAll('nav a').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const sectionId = link.getAttribute('href').replace('#', '');
		document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
	});
});

// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	alert('Form submitted!');
});
