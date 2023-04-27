This is a personal repository to test various styling and animations in the react format, each react app has a very simple but specific use
and will be used by me in the future as a reference for other web projects.

1. Fade
    a simple fade in of a div on page load, attempt at using react-spring (most likely come back to this dependency, figuring out base animation 
    first)
    dependencies: react, react-spring.

2. move_box
    a simple transition and moving of a box sized div over the page, done with several different
    speeds using the translation property in CSS
    dependencies: react

3. expandable_text_box
    This was an issue with animation that was a large problem for me for a while but now i have figured out how to properly expand a box with actual
    content inside using smooth animation.
    dependencies: react

4. on_render_move_box
    First attempt at having animations begin when a specific part 
    of the page is observed instead of immediatley on website 
    launch or on the click of a button.
    dependencies: react

5. percentage_observation_box
    A box displaying percentages in text of how much of the box is 
    observed by the user at any given time, first use of functions 
    like setInterval which are used to rerun code within a 
    useEffect hook to constantly monitor the observation
    dependencies: react

6. offscreen_box_transition
    A box initially offscreen that slides in from offscreen onto a parent div
    first look at negative position (in this case position: relative; right: -200%)
    negative relative positions are positions that begin outside of the parent div box.
    additional use of overflow-x:hidden; to ensure the box is not rendered on page and can't be scrolled to
    giving the illusion of it appearing from offscreen
    dependencies: react

7. bounding_client_rect_box_transition
    first attempt at using getBoundingClientRect() function in order to simulate a box transition, in a more modern
    way than using the intersectionObserver object.