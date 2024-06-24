document.addEventListener("DOMContentLoaded", (event) => {
	const titles = document.querySelectorAll("#bio p");
	const tl = gsap.timeline({ repeat: -1 });

	titles.forEach((title) => {
		const splitTitle = title.textContent.split("");
		title.innerHTML = "";
		splitTitle.forEach((char) => {
			title.innerHTML += `<span>${char}</span>`;
		});

		const chars = title.querySelectorAll("span");
		tl.from(chars, {
			opacity: 0,
			y: 40,
			rotateX: -90,
			stagger: 0.02,
		});

		tl.to(
			chars,
			{
				opacity: 1,
				y: -40,
				rotateX: 90,
				stagger: 0.02,
			},
			"+=2"
		);
	});
});
