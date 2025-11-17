📘 Personal Blog Website 

A simple and elegant personal blog website built with Node.js, Express.js, EJS, and Tailwind CSS.
The project allows you to create and display blog posts with optional images, and includes a custom contact form integrated with Web3Forms for message submission without needing a backend mail server.

🚧 Note: Some features are still in progress and will be completed in upcoming updates.

📌 Features
✅ Blog System


<img width="1605" height="884" alt="image" src="https://github.com/user-attachments/assets/6ac9c00a-4257-4d80-9ed3-903fb6be3eff" />


Create new blog posts with:

Title

Content

Tags

Featured image upload

Custom font style

Posts are displayed on the home page.

Each post has its own full view page.

✅ File Uploads

Uses Multer to handle featured image uploads.

Images are stored inside /public/uploads.

✅ Modern UI

Designed with Tailwind CSS

Fully responsive

Animated buttons and clean UI layout

✅ Contact Form

Contact form connected using Web3Forms

Requires no server-side email setup

Messages are delivered directly to your email

🔐 No Password Storage

No need to store email passwords inside your backend

Safe + secure external form handling

🛠️ Tech Stack
Backend

Node.js

Express.js

Multer

EJS templating

Frontend

Tailwind CSS

EJS components

Basic JavaScript

External Services

Web3Forms (for contact form submission)

📂 Project Structure
project/
│
├── public/
│   ├── uploads/      # Uploaded blog images
│   ├── css/
│   └── js/
│
├── views/
│   ├── partials/     # Header and footer
│   ├── index.ejs     # Home page
│   ├── create.ejs    # Create post page
│   ├── blog.ejs      # Single post page
│   └── contact.ejs   # Contact page
│
├── index.js          # Main Express server
├── package.json
└── README.md

🚀 How to Run Locally
1️⃣ Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Start the server
node index.js


or (recommended)

npm start

4️⃣ Visit in browser
http://localhost:3500

📮 Contact Form Setup

The site uses Web3Forms so no backend email service is required.

Steps:

Go to https://web3forms.com

Get your API Access Key

Add it inside your contact form <form>:

<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">


✔️ Done — submissions will go directly to your email.

📌 Future Improvements (To Be Completed Later)

Here’s what will be added in future updates:

🔧 Admin panel for managing posts

🗃️ Database integration (MongoDB or PostgreSQL)

✏️ Edit and delete blog posts

🔍 Search and filter system

🏷️ Tag-based categorized posts

🌙 Dark mode

🔐 Authentication system (login/signup)

📬 Custom backend for sending emails

These will be added progressively as the project evolves.

🤝 Contributing

Contributions are welcome!
Feel free to open an issue or submit a pull request.

📜 License

MIT License © 2025
