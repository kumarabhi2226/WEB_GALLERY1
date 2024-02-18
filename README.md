# Web Gallery App

This is a web gallery application that allows users to browse through different types of image galleries.

## Features

- **Cover Image Landing Page**: The landing page consists of a cover image that occupies the complete screen size.
- **Multiple Types of Image Galleries**: The application includes pages containing at least three different types of image galleries, such as collage, staged scrolling, carousel, etc.

## Installation

To set up and run the Web Gallery App locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd web-team-task
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your web browser and go to `http://localhost:3000` to view the application.

## Gallery Pages

### Collage Gallery

The Collage Gallery page displays images in a collage layout, allowing users to see multiple images at once in an aesthetically pleasing arrangement.

### Staged Scrolling Gallery

The Staged Scrolling Gallery page features images displayed in a staged scrolling format, where users can scroll horizontally or vertically to view different images.

### Carousel Gallery

The Carousel Gallery page presents images in a carousel format, enabling users to navigate through images using navigation arrows or pagination dots.

## Technologies Used

- React.js
- Tailwind CSS (or CSS-in-JS library for styling)
- React Router (for navigation between gallery pages)

## Project Structure

```
web-gallery-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── CoverImage.js
│   │   ├── CollageGallery.js
│   │   ├── StagedScrollingGallery.js
│   │   └── CarouselGallery.js
│   ├── App.js
│   ├── index.js
│   └── styles.css (or styled components)
│
└── package.json
```

## License

This project is licensed under the [MIT License](LICENSE).
