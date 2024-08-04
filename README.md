# 3 unique and custumizable scrolling effects

This project uses SCSS to reduce the amount of manually written CSS needed.

## Very customizable

#### With the SCSS you can :

- set the number of cards needed to make a full turn in the spiral
- set the range of colors used for the gradient
- set the distance between the container and the cards
- show a helper for the spiral using the background of the container

#### With the JS you can :

- control how fast the spiral rotates on scroll
- where the animation should start and end, relative to the bottom of the screen

_Note :_

It is recommended to have the SCSS and JS values match so that `$num_of_cards_per_turn` equals `const number_of_items_per_turn`
