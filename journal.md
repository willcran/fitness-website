# Activity 1 - Research

## PureGym
### Page Layout
- Looks fine, nothing really stands out.
- Hero image at the top with a search bar makes the search function stand out
- Small menu icon in the top left isn't great, as more inexperienced users may not see or know what that button does - so may find the website difficult to navigate.
- Scrolling immediately shows you membership options (home page)
- Inconsistent design across different pages

### Nav menus
- Pretty bad. There is an overwhelming amount of options when the menu is initially opened, and some of those item could be merged for better navigation and readability
- Again, with "Memberships" there is a seperate option called "Student memberships" In the same top level menu. Student memberships could just be included in the sub-menu of memberships.
- Inconsistent across different pages

### Colour schemes
- Doesn't look great in my opinion, but it is consistent across the website.
- White backgrounds, black header/nav bar, teal blue as the primary colour

### Accessibility features
- No accessibility features I could find - So certainly no accessibility features that somebody with additional needs will be able to find easily.

### UX
- Poor. The design (shapes, structuring) is inconsistent across the whole website.
- The navigation menu, while having the same layout, design changes on different pages. Same with the footer.

## David Lloyd
### Page Layout
- Looks like a decent layout - everything is separated into different "cards", so is easy to tell where a card starts and ends.
- There are images on most of the cards, which makes the content next to it easier to understand, and also makes scrolling easy as you can take a quick glance at the image and have a decent understanding of what that section is about

### Nav menus
- Makes sense. Is a constant horizontal menu at the top.
- Has more "basic" and concise titles, so it's easier to navigate

### Colour schemes
- Consistent and looks good.
- Easy to read, as the background is white and the primary colour is a more colourful purple

### Accessibility features
- No accessibility features.

### UX
Overall, pretty good.
- Easy to understand layout and buttons
- Background of the cards are different, so it's easy to separate which are which.
- Slow and subtle animations make it feel more elegant, alongside the font


## Gymshark
### Page Layout
- Horrible. There's 2 bestsellers carousels. And inbetween them is a hero card about the bestsellers. They literally just could've done what they did with the rest of the categories on the page and have 2 filters under the title - Men and Women. That would've made it much better.
- The random hero banners in the middle of the carousels are confusing and make the page look cluttered.

### Nav menus
- Not terrible, consistent across different pages.
- Looks average. Nothing too bad, but it isn't outstanding in any way.
- It's structured in a good way.

### Colour schemes
- Consistent - it's just black and white.

### Accessibility features
- No accessibility features.

### UX
- Only for women's clothes you can search by colour.
- All of the icons on the right side of the nav bar move up a little when you hover over them, except for the search icon.
- The banner at the top displaying deals looks fine, it's just irritating.
- The massive block of text at the bottom with varying sizes of titles just looks bad and is unnecessary.

## NHS Better Health
### Page Layout
- It's simple. There's different sections of the page depending on what content is inside.
- Different colours help to distinguish the different content areas.

### Nav menus
- There is one nav bar, with only 4 items.
- Easy switching between the different topics
- Can tell which page you're on with a black underline

### Colour schemes
- Yellow as the primary, with blue as a secondary. White background.

### Accessibility features
- Allegedly there are accessibility features, but I cannot access them. There is no button to enable/disable any features.

### UX
- Simple but informative.
- Simple images next to larger blocks of text to convey the message quicker.
- Nice split of different colours to distinguish the separate sections on the pages.

# Activity 4 - Daily Development Journal
## Date: 10/08/2026
### Time Spent: 6 hours
### Activity: Creating the website

### Problem: There is no header/navbar
### Solution: Made a header/navbar
### Learning: I learned (remembered) how flexbox works in order to get the list items horizontal, rather than vertical

### Problem: Website, even though there is no content yet, looks terrible
### Solution: Make a basic theme, with custom fonts and cursors so it doesn't look terrible when I'm testing
### Learning: I learned how to add custom fonts, cursors and automatic dark themes. They're all actually pretty easy

### Problem: No footer.
### Solution: Make a basic footer, with each "category" of items (Navigation, About) has a column of items underneath
### Learning: I learned how to make a decent footer - with titles, items and a good layout

### Problem: Footer is inefficient. I was using divs for each list item, meaning that with a hover effect they would all move together
### Solution: Use lists instead - just like the header, except vertical. Also added some nice animations to it so it looks better
### Learning: I learned how footers can be made to look decent, and how to make my website more efficient


## Date: 12/08/2026
### TIme Spent: 4 hours
### Activity: Refining the website

### Problem: There's no content
### Solution: Add some placeholder content
### Learning: Not much

### Problem: The content looks bad
### Solution: Organise it, put it into boxes and play with the sizes, padding, etc
### Learning: Re-learned how flexbox works, and how to apply it in a website

### Problem: No brand identity - it's just a plain page
### Solution: Make a logo, then add it to the website
### Learning: Basic graphic design


## Date: 20/08/2026
### Time Spent: 4 hours
### Activity: Making the homepage better & Making the About page

### Problem: There are no fitness plans for the user to choose.
### Solution: Add example fitness plans at absurd prices because it's funny.
### Learning: Learned more about layouts within css flexbox, and how they can be used to create.

### Problem: About section - image won't scale properly.
### Solution: Make width the width I want - e.g. 700px, then can set height as "auto" so it automatically scales down the image.
### Learning: Learned how to scale images


## Date: 21/08/2026
### Time Spent: 3 hours
### Activity: Creating the Workouts page

### Problem: The workout icon and the text are too close together, and are centred in the middle
### Solution: Use padding and margins to position them as I wish
### Learning: How to position items using CSS

## Date: 22/08/2026
### Time Spent: 7 hours
### Activity: 
- Updating workouts page
- Creating healthy living page
- Updating header/footer

### Problem: (footer) the Email/Telephone links are on the left, next to the nav links instead of on the far right where I want them
### Solution: Create a new class called "Contact" to group all those together, then update the footer to justify content with "space between" - the same i did with the header, so that the items automatically are on the opposite side of the page.
### Learning: Learning more about how justify-content works, and where it can be applied

### Problem: (header) The 'Account' dropdown doesn't actually function as a dropdown.
### Solution: create different classes - dropdown items, dropdown, account-button. Then lay them out and sort out the css so that when the account button is hovered over, the dropdown appears. and when each dropdown item is hovered over, the background is turned white and the text inverted. 
### Learning: How dropdowns are created and layed out. 

### Problem (header) The sign out button in the account dropdown doesn't turn red when hovering like i wanted it to. I originally put the class inside of the <a> for the sign out button, but that didnt work

```
 <a href="#" class="sign-out">Sign Out<a>
```
### Solution: I decided to wrap it with a div instead of trying inline. that worked.
### Learning: Not everything can be done inline. Some things like class inheritance must be done with a wrapped function rather than trying to do it inline.

