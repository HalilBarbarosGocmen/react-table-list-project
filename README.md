
**Project Documentation:**

This documentation pertains to a project developed using Vite, React, and Tailwind CSS. It contains the following information to understand, develop, and maintain the project.

**Project Setup**
- Clone the project.
- Navigate to the project directory.
- Run the following commands:
    1. `npm i`
    2. `npm run dev`
    Running these commands will start the project.

**Project Overview**
- **Project Structure**
  The project is structured in a modular format, containing the following subfolders within the main `src` folder:

- **Technologies**
  - React: Used to create the user interface and manage components.
  - Tailwind CSS: Employed for rapid and flexible styling.
  - API: The application fetches product information from an external API.

**Features**
- **Product Listing and Filtering**
  Product information fetched from the API is displayed in a list with category and price filtering options. Users can filter products by category, select specific price ranges, and quickly search for desired products using a search bar.

- **Pagination**
  Users can navigate through large product lists using pagination, displaying a certain number of products per page.

- **Product Addition, Editing, and Deletion**
  Users can add new products, edit existing ones, and delete products. When adding or updating a product, users are prompted to fill in all necessary information. Informative messages are displayed in case of input errors.

- **Routing and Home Page Options**
  The home page includes two options for switching between products and users, each directing to the respective page.

- **Visual Error Handling**
  For products without images fetched from the API, a default "image not found" graphic is included. Error messages and notifications are used to communicate faulty states to users.

- **Information Screens and Animations**
  Information screens appear at the top right of the screen upon successful product addition or update. Animations are utilized to enhance the user experience.

**Development and Sustainability**
The application's modular structure facilitates easy addition of new features or updates to existing ones. The style files are created with Tailwind CSS, enabling quick and flexible modifications. The API service, located in a separate file, ensures resilience against API changes.

