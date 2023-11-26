# The Wild Oasis - React Project with Vite

Welcome to The Wild Oasis React project with Vite from Jonas's react Course! This is a custom application designed for a small boutique hotel called The Wild Oasis. The application serves as an internal tool for hotel employees to manage bookings, cabins, and guests. Additionally, it includes a customer-facing website where guests can book their stays using the same API.

## Live Server :

- https://the-wild-oasis-black.vercel.app/

## Project Requirements :

### Users and Authentication

- Only hotel employees can use the application, requiring authentication to perform tasks.
- New users can only sign up within the application to ensure that only actual hotel employees can create accounts.
- Users have the ability to upload an avatar, change their name, and update their password.

### Cabins

- The application provides a table view with all the cabins, displaying cabin photos, names, capacity, price, and current discounts.
- Users can update or delete existing cabins, as well as create new cabins with the option to upload a photo.

### Bookings

- The application includes a table view with all bookings, showing arrival and departure dates, status, paid amount, and cabin/guest data.
- The booking status can be "unconfirmed" (booked but not checked in), "checked in," or "checked out." The table should be filterable by these statuses.
- Additional booking data includes the number of guests, number of nights, guest observations, and breakfast options.
- Users can delete bookings, check guests in/out, and confirm payment receipt.
- Guests can add breakfast for their entire stay during check-in.

### Guests

- Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

### Dashboard

- The initial app screen is a dashboard displaying important information for the last 7, 30, or 90 days.
- The dashboard lists guests checking in and out on the current day, allowing users to perform these tasks.
- It provides statistics on recent bookings, sales, check-ins, and occupancy rate.
- A chart shows daily hotel sales, including both "total" sales and "extras" sales (currently only breakfast).
- Another chart displays statistics on stay durations.

### App Settings

- Users can define application-wide settings such as breakfast price, minimum/maximum nights per booking, and maximum guests per booking.

### Dark Mode

- The application supports a dark mode theme.

## Feature Categories

1. Bookings
2. Cabins
3. Guests
4. Dashboard
5. Check-in and Check-out
6. App Settings
7. Authentication

## Necessary Pages

1. Dashboard
2. Bookings
3. Cabins
4. Booking Check-in
5. App Settings
6. User Sign Up
7. Login
8. Account Settings

## Technology Decisions

To implement this project, the following technology decisions have been made:

- **Routing**: React Router will be used for managing application routing.
- **Styling**: Styled Components will be utilized for styling components.
- **Remote State Management (API)**: React Query will handle remote state management and API interactions.
- **UI State Management**: The Context API will be used for managing UI-specific state.
- **Form Management**: React Hook Form will handle form management.
- **Other Tools**:
  - React Icons for easy integration of icons.
  - React Hot Toast for displaying toast notifications.
  - Recharts for creating interactive charts.
  - date-fns for date manipulation and formatting.
  - Supabase for handling authentication and data persistence.
- **Error Handling**: Error Boundary will be implemented to handle errors gracefully.

## Some Advanced Patterns

The project will incorporate advanced patterns, such as the compound component pattern, in the modal component.

## Getting Started

To get started with the project, follow the steps below:

1. Clone the project repository.
2. Install the project dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm run dev` or `yarn dev`.
4. Access the application in your browser at `http://localhost:3000`.
