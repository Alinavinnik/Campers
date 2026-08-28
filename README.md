# 🚐 TravelTrucks

TravelTrucks is a modern web application for browsing and booking
campervans.

The application allows users to explore available campers, filter them
by different characteristics, view detailed information and reviews, and
submit a booking request.

## 🔗 [Live Demo](https://campers-ten-eta.vercel.app/)

## 📌 Features

- Browse a catalog of available campervans
- Filter campers by:
  - Location
  - Camper form
  - Engine type
  - Transmission type
- Load more campers using pagination
- View detailed information about each camper
- Browse camper images in an interactive gallery
- View camper characteristics and amenities
- Read customer reviews and ratings
- Submit a camper booking request
- Form validation with user-friendly error messages
- Clear selected filters
- Responsive and user-friendly interface
- Loading and error states

## 🛠 Technologies

The project was built using:

- **Next.js**
- **React**
- **TypeScript**
- **TanStack Query**
- **Axios**
- **Formik**
- **Yup**
- **Swiper**
- **React Hot Toast**
- **React Icons**
- **CSS Modules**

## 🌐 API

The application uses the TravelTrucks API to retrieve camper
information, filters, reviews, and other related data.

API base URL:

`https://campers-api.goit.study`

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1.  Clone the repository:

```bash
git clone https://github.com/Alinavinnik/Campers.git
```

2.  Navigate to the project directory:

```bash
cd Campers
```

3.  Install dependencies:

```bash
npm install
```

4.  Start the development server:

```bash
npm run dev
```

5.  Open your browser and go to:

```text
http://localhost:3000
```

## 📖 Usage

Open the catalog page to browse available campervans.

Use the filters to narrow the results by location, camper form, engine,
or transmission.

Click **Search** to apply selected filters or **Clear filters** to reset
them.

Use the **Load more** button to load additional campers.

Click **Show more** on a camper card to open its details page, where you
can:

- View the camper gallery
- Check vehicle specifications and amenities
- Read customer reviews
- Submit a booking request

## 📁 Project Structure

```text
Campers/
├── app/                  # Next.js pages and layouts
├── components/           # Reusable React components
├── services/             # API requests
├── types/                # TypeScript types and interfaces
├── utils/                # Utility functions and validation schemas
├── public/               # Static assets
└── README.md
```

## 👩‍💻 Author

**Alina Luzhniak**

GitHub: [Alinavinnik](https://github.com/Alinavinnik)

Repository: [Campers](https://github.com/Alinavinnik/Campers)

## 📄 License

This project was created for educational purposes.
