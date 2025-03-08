# **Zenvite**  
**Simplify Events, Amplify Experiences with Zenvite.**

---

## **Team Members**
| Name                    | Roll Number   | Email                                   | Role                        |
|-------------------------|---------------|-----------------------------------------|-----------------------------|
| **Nabila Rahman**        | 20220104001   | rahman.nabilamedha@gmail.com            | Lead                        |
| **Pranto Biswas**        | 20220104018   | pb749964@gmail.com                      | Backend, Frontend           |
| **Hridoy Nandi**         | 20220104019   | hrkisdead01221@gmail.com                | Backend, Frontend           |
| **Khairun Nahar Shila** | 20220104020   | kamrunhasan12@gmail.com                 | Frontend Developer          |

---

## **Project Overview**
Zenvite is a dynamic event management platform that simplifies the process of organizing, booking, and managing events. The platform is designed to streamline attendee registration, event scheduling, and ticket booking, providing a seamless experience for both event organizers and participants.

---

## **Key Features**
### **Attendee Registration**
- Simple sign-up and registration process.
- Automated email confirmations upon successful registration.

### **Schedule Management**
- Easily create and manage event schedules.
- Real-time ticket updates to keep participants informed about event changes.

### **Admin Panel**
- Efficient tools for organizing, overseeing, and modifying event details.
- Manage attendee data, bookings, and event performance insights.

---

## **Target Audience**
Zenvite is designed for a wide range of users:
- **Event Organizers:** Simplifying event planning, registration handling, and ticket management.
- **Businesses & Organizations:** Perfect for conferences, workshops, corporate events, and more.
- **Attendees:** Providing an easy-to-use platform for exploring and registering for events.
- **Event Planners & Agencies:** Scalable solutions to manage multiple events simultaneously.

---

## **User Interface**
[View the Figma Design](https://www.figma.com/proto/4cvwCfQtVXDBs8UPXfjA7k/Zenvite?node-id=51-663&p=f&t=793CIkKft9fh1rq4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

### **Pages**
- **Home Page:**  
  Displays upcoming events with an integrated search feature for easy navigation.
  
  ![Home Page](https://github.com/user-attachments/assets/971e6305-7a4c-4e64-be6b-ea510c70a7fd)

- **Event Page:**  
  Provides detailed event information, search functionality, and ticket booking options.
  
  ![Event Page](https://github.com/user-attachments/assets/3817c497-3435-413c-aef5-15f51c537868)

- **Login and Register Page:**  
  A simple, user-friendly design for easy account creation and login.
  
  ![Register Page](https://github.com/user-attachments/assets/4dccd353-d4eb-42a3-b351-436d33145cdf)

---

## **Project Milestones**
### **Checkpoint 1**
- Design landing pages and dashboard UI using Figma.
- Implement home page frontend.
- Implement events page frontend.

### **Checkpoint 2**
- Develop user authentication (registration & login) for both frontend and backend.
- Implement the "About Us" page frontend.

### **Checkpoint 3**
- Develop backend booking functionality.
- Finalize UI/UX design with responsive capabilities.
- Integrate frontend with backend.
- Deploy the web application.

---

## **Usage Instructions**

### **Prerequisites**
Before getting started, ensure the following tools are installed:
- **PHP** (for the backend)
- **Composer** (for managing PHP dependencies)
- **Node.js** (for running the React frontend)
- **XAMPP** (for running the MySQL database and backend server)

### **Installation Steps**
1. Clone the repository.
2. Install necessary dependencies:

   - For **React Frontend**:
     ```bash
     npm install
     npm install axios
     npm install coreui
     npm install dayjs
     npm install moment
     ```
   - For **Laravel Backend**:
     ```bash
     composer install
     composer require fruitcake/laravel-cors
     ```

3. Install **Laravel Installer** globally (optional, but useful for creating Laravel projects quickly):
   ```bash
   composer global require laravel/installer
   ```

4. Configure your `.env` file for both frontend and backend.
5. Run the following Laravel commands to set up your backend:
   ```bash
   php artisan storage:link
   php artisan vendor:publish
   php artisan install:api
   ```

6. Start the development servers:
   - **React Frontend:**
     ```bash
     npm run dev
     ```
   - **Laravel Backend:**
     ```bash
     php artisan serve
     ```

7. Ensure your **XAMPP** server is running with the MySQL database configured.

### **Accessing the Platform**
Once both frontend and backend are running, access the platform via the provided local address.

- **Admin Features:**
  - Create and modify event schedules.
  - Oversee attendee data and bookings.
  
- **User Features:**
  - Register for events.
  - Book tickets for events.

