gsap.registerPlugin(ScrollTrigger);

let cont = document.querySelector(".cont");

const number_of_items_per_turn = 6;
const total_number_of_items = 12;
const num_of_cards_ratio = total_number_of_items / number_of_items_per_turn;

gsap.to(cont, {
	rotateY: -360 * num_of_cards_ratio + 360 / number_of_items_per_turn,
	ease: "linear",
	scrollTrigger: {
		trigger: cont,
		start: "top 40%",
		end: "bottom 80%",
		scrub: true,
	},
});
