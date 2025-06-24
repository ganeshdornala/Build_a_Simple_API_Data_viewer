# Build_a_Simple_API_Data_viewer

# Dog API Viewer

This is a simple web application that fetches and displays random dog images using the Dog CEO Dog API. It allows users to explore random dog photos, refresh the images, and filter them based on breed names.

## Features

- Displays 5 random dog images on the screen
- A button to load new sets of random images
- A search box to filter images by dog breed
- Clean and responsive layout using HTML, CSS, and JavaScript
- Uses only vanilla JavaScript (no external libraries or frameworks)

## Live Demo

You can view the live version of this project here:  
[https://ganeshdornala.github.io/Build_a_Simple_API_Data_viewer/]

## About the API

This project uses the free and public [Dog CEO Dog API](https://dog.ceo/dog-api/). It provides access to random dog images and information about various dog breeds.
In this application, the following endpoint was used:
https://dog.ceo/api/breeds/image/random/10
This endpoint returns 10 random dog image URLs. The application then extracts the breed name from the image URL and displays it along with the image.

## How It Works

1. When the page loads, a request is made to fetch 10 random dog images.
2. The first 5 images are displayed on the screen with their corresponding breed names.
3. Users can click the "Load More Dogs" button to fetch a new set of random images.
4. Users can also type a breed name into the search box to filter the images by breed.

## Folder Structure

Build_a_Simple_API_Data_viewer/
├── index.html
├── style.css
├── script.js
└── README.md

## How to Run Locally

1. Clone this repository:
   git clone https://github.com/ganeshdornala/Build_a_Simple_API_Data_viewer.git
2. Open the folder in your code editor.
3. Open `index.html` in your browser.
   That's it! The app should now be running locally.

## License

This project is open source and free to use for educational or personal purposes.
