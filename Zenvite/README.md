# Zenvite
**Simplify Events, Amplify Experiences with Zenvite.**

## Team Members
| Name                | Roll Number   | Email                                   | Role                   |
|---------------------|---------------|-----------------------------------------|------------------------|
| **Nabila Rahman**    | 20220104001   | rahman.nabilamedha@gmail.com            | Lead                    |
| **Pranto Biswas**    | 20220104018   | pb749964@gmail.com                      | Backend, Frontend       |
| **Hridoy Nandi**     | 20220104019   | hrkisdead01221@gmail.com                | Backend, Frontend       |
| **Khairun Nahar Shila** | 20220104020 | kamrunhasan12@gmail.com                 | Frontend Developer      |

## Project Overview
Zenvite is a powerful event management platform that simplifies the process of organizing and booking events. It provides tools for attendee registration, schedule management, and seamless ticket booking to ensure an organized and efficient experience for both organizers and participants.

## Key Features
- **Attendee Registration:**
  - Simple sign-up and registration process.
  - Automated email confirmations for successful registrations.

- **Schedule Management:**
  - Create and manage detailed event schedules.
  - Real-time ticket updates to keep participants informed.

- **Admin Panel:**
  - Organize, oversee, and modify event details efficiently.
  - Manage attendee data, bookings, and event performance insights.

## Target Audience
Zenvite is designed for:
- **Event Organizers:** Ensuring smooth planning, registration handling, and ticket management.
- **Businesses & Organizations:** Ideal for conferences, workshops, and corporate events.
- **Attendees:** Offering an easy-to-use platform to explore and register for events.
- **Event Planners & Agencies:** Providing scalable solutions for managing multiple events simultaneously.

## User Interface
**[Figma Design Link](https://www.figma.com/proto/4cvwCfQtVXDBs8UPXfjA7k/Zenvite?node-id=51-663&p=f&t=793CIkKft9fh1rq4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)**

### Pages
- **Home Page:**
  Displays upcoming events with an integrated search feature for quick navigation.

![Desktop - 1](https://github.com/user-attachments/assets/971e6305-7a4c-4e64-be6b-ea510c70a7fd)

- **Event Page:**
  Provides detailed event information, search functionality, and ticket booking options.

![events](https://github.com/user-attachments/assets/3817c497-3435-413c-aef5-15f51c537868)

- **Login and Register Page:**
  Simple, user-friendly design for easy account creation and login.

![Register](https://github.com/user-attachments/assets/4dccd353-d4eb-42a3-b351-436d33145cdf)

## Project Milestones
### Checkpoint 1
- Design landing pages and dashboard UI using Figma.
- Implement home page frontend.
- Implement events page frontend.

### Checkpoint 2
- Develop user authentication (registration & login) in frontend and backend.
- Implement the "About Us" page frontend.

### Checkpoint 3
- Develop backend booking functionality.
- Finalize UI/UX with responsive design.
- Integrate backend and frontend.
- Deploy the web application.

## Usage Instructions
1. Clone the repository.
2. Install dependencies using:
   ```bash
   npm install   # For React Frontend
   composer install  # For Laravel Backend
   npm install axios
   npm install coreui
   npm install dayjs
   npm install moment
   composer require fruitcake/laravel-cors
   ```
3. Configure your `.env` file for both frontend and backend as required.
4. Run the necessary Laravel commands:
   ```bash
   php artisan storage:link
   php artisan vendor:publish
   php artisan install:api
   ```
5. Run the development servers:
   ```bash
   npm start  # React Frontend
   php artisan serve  # Laravel Backend
   ```
6. Ensure your XAMPP server is running with the MySQL database configured.
7. Access the platform at the provided local address.
8. Navigate the platform to:
   - Register attendees (users)
   - Book tickets (users)
   - Create and modify event schedules (admins)

