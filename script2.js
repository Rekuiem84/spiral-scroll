gsap.registerPlugin(ScrollTrigger);

let helixes = document.querySelectorAll(".helix");

const number_of_items_per_turn = 12;
const total_number_of_items = 24;
const num_of_cards_ratio = total_number_of_items / number_of_items_per_turn;

helixes.forEach((helix) => {
	gsap.to(helix, {
		rotateY: -360 * num_of_cards_ratio + 360 / number_of_items_per_turn,
		ease: "linear",
		scrollTrigger: {
			trigger: helix,
			start: "top 70%",
			end: "bottom 50%",
			scrub: 1,
		},
	});
});
