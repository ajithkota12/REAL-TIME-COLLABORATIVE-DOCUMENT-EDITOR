# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR
COMPANY : CODTECH IT SOLUTIONS

NAME : KOTA AJITH KUMAR

INTERN ID : CT04WA89

DOMAIN : FULL STACK DEVELOPMENT

DURATION : 4WEEKS

MENTOR : NEELA SANTOSH

DESCRIPTION :

📌 Project Overview Introduction
In modern web applications, real-time collaboration has become a crucial feature, enabling multiple users to interact and modify data simultaneously. This project implements a real-time text editor where users can collaboratively edit text with formatting options such as bold, italic, and underline. The backend is built using Node.js, Express.js, and Socket.IO, while PostgreSQL is used for persistent data storage.

This document provides a comprehensive description of how data is stored in PostgreSQL, how users can interact with the system, and how they can view stored data using pgAdmin. The system ensures synchronization among users in real time and persists their changes even after they disconnect.
System Overview
The real-time text editor consists of the following key components:

Frontend (React.js)

Provides the user interface for editing text.

Sends updates to the backend via Socket.IO.

Displays the latest content and formatting changes in real time.

Backend (Node.js + Express.js + Socket.IO)

Handles WebSocket connections for real-time updates.

Saves and retrieves data from PostgreSQL.

Ensures multiple users see the latest document state.

Database (PostgreSQL)

Stores text content along with formatting styles.

Provides persistence so that users can resume editing after disconnecting.

Allows database administrators to monitor and modify stored data using pgAdmin.
How the System Works
1. User Connects to the Editor
The frontend connects to the backend using Socket.IO.

The server fetches the latest document state from PostgreSQL and sends it to the user.

2. User Edits the Text
When a user types in the editor, the "edit" event is triggered.

The new content is sent to the backend via WebSocket.

The backend updates the content field in PostgreSQL and broadcasts the change to all connected users.

3. User Applies Formatting
Users can toggle bold, italic, and underline.

When a formatting option is selected, the corresponding boolean field (bold, italic, underline) in the database is updated.

The server notifies all other users, ensuring they see the latest formatting changes.

4. Data Persistence
All changes are automatically saved to PostgreSQL.

Even if users refresh the page or disconnect, they receive the latest document from the database upon reconnecting.

Conclusion
This real-time collaborative text editor successfully integrates PostgreSQL for persistent data storage. Users can edit text, apply formatting, and synchronize changes across multiple clients. The backend ensures real-time updates while persisting the data in a structured database. With pgAdmin, developers can easily monitor and manage stored data.

#OUTPUT:


![Image](https://github.com/user-attachments/assets/7c3e8eb8-7ebe-4b8e-978e-e532376b55ae)



![Image](https://github.com/user-attachments/assets/1ba391e6-5281-4a39-8619-7f8a51a31029)

![Image](https://github.com/user-attachments/assets/92baf77a-fd5f-49f6-88d6-68f6c774a7ba)

![Image](https://github.com/user-attachments/assets/6f0b7516-0924-4cf3-b51d-8736a96a97c9)

