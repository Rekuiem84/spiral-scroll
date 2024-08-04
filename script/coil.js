gsap.registerPlugin(ScrollTrigger);

let coils = document.querySelectorAll(".coil");

const number_of_items_per_turn = 6;
const total_number_of_items = 12;
const num_of_cards_ratio = total_number_of_items / number_of_items_per_turn;

coils.forEach((coil) => {
	gsap.to(coil, {
		rotateY: -360 * num_of_cards_ratio + 360 / number_of_items_per_turn,
		ease: "linear",
		scrollTrigger: {
			trigger: coil,
			start: "top 100%",
			end: "bottom 0%",
			scrub: 2,
		},
	});
});
