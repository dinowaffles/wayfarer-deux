# Wayfarer Travel Community

## A Note on Development
This project was originally started in [THIS REPOSITORY](https://github.com/dinowaffles/wayfarer). However, I made a mistake when initializing and the application was nested inside the respository. This wasn't a huge issue until deployment when I was trying to get the package.json file into the root directory, and somehow ended up with another level of nesting. In order to get out of this matryoshka doll from hell file structure, I recreated the application in this directory. Please refer to the link above for all previous development history. 

## Project Description
A travel community for users to share city-specific tips about their favorite locations around the world.

## Deployed Site
Check it out [HERE](https://wayfarer-abby-avantika.herokuapp.com/) !!

## Planning

### User Stories

#### Sprint 1: Landing Page

**A user should be able to:**

1. Navigate to "/" and see a basic splash page with the name of the website.
2. See the site-wide header on every page with a link to home page with list of cities.

#### Sprint 2: HomePage

**A user should be able to:**

1. View the "San Francisco" page (at "/cities/1") including:
  * The site-wide header.
  * The name of the city.
  * An iconic photo of the city.
2. View a list of posts on the San Francisco page:
  * Sorted by newest first.
  * With the post titles linked to the individual post "show" pages.
3. Use the search bar to search through the posts' title and/or content.
4. Click on the title of one of their posts and be redirected to a "show" page for that post.
5. View post "show" pages with title, author, and content.


#### Sprint 3: Validations

**A user should be able to:**

1. View city pages for "London" and "Gibraltar".
2. A post's title must be between 1 and 200 characters.
3. A post's content must not be empty.

#### Sprint 4: Weather API

1. Call [Open Weather API](https://openweathermap.org/current) for each city to display the current weather on each city's page.

### Wireframes
![wireframes](https://user-images.githubusercontent.com/79819338/150401609-d6de9700-c4f0-403d-855e-bfe597e2256d.png)

## Technology Used
- Angular
- Bootstrap

## Installation Instructions
