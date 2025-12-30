# SuDhama Farm - Modern Web Application

This project has been restructured using modern architecture and best practices. Below are the steps to set up and run the project.

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. **npm or yarn**: npm comes with Node.js. You can also use yarn if you prefer.

## Setup Instructions

### 1. Install Node.js

Download and install Node.js from the official website. Ensure that both `node` and `npm` are available in your terminal.

### 2. Install Dependencies

Navigate to the project directory and run the following command to install the dependencies:

```bash
npm install
```

### 3. Run the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application at `http://localhost:3000`.

### 4. Build for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `dist` directory with the optimized and minified assets.

### 5. Preview the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

## Project Structure

The project is organized into the following directories:

- `src/`: Main source directory
  - `components/`: Reusable components
  - `styles/`: Global and component-specific styles
  - `utils/`: Utility functions and helpers
  - `assets/`: Static assets like images and fonts
  - `pages/`: Page-level components
  - `index.js`: Entry point for the application

## Features

- **Component-Based Architecture**: The application is built using reusable components.
- **Modern JavaScript**: Uses ES6+ features and best practices.
- **Tailwind CSS**: For styling and responsive design.
- **Vite**: For fast development and production builds.
- **SEO and Accessibility**: Semantic HTML5 and proper meta tags.

## Performance Optimizations

- **Lazy Loading**: Images and components are lazy-loaded for better performance.
- **Code Splitting**: The application uses code splitting to reduce bundle size.
- **Image Optimization**: Images are optimized for web use.

## Cross-Browser Compatibility

The application is designed to work across modern browsers. Polyfills and feature detection are used to ensure compatibility.

## SEO and Accessibility

- **Semantic HTML5**: Used for better accessibility and SEO.
- **Meta Tags**: Proper meta tags are included for SEO.
- **Accessibility Features**: Skip links, ARIA labels, and keyboard navigation support.

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact the SuDhama Team.
