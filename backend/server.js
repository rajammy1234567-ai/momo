const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://chaowmomo.com',
    'https://www.chaowmomo.com',
    process.env.FRONTEND_URL  // Vercel deployment URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/momo_brand';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Schemas
const franchiseSchema = new mongoose.Schema({
    name: String,
    age: String,
    contactNumber: String,
    email: String,
    currentOccupation: String,
    city: String,
    pincode: String,
    investmentRange: String,
    proposedLocation: String,
    propertySize: String,
    googleLocation: String,
    hoursPerDay: String,
    responsibility: String,
    createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Franchise = mongoose.model('Franchise', franchiseSchema);
const Contact = mongoose.model('Contact', contactSchema);

const nodemailer = require('nodemailer');

// Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/franchise', async (req, res) => {
    try {
        console.log('Received Franchise form data:', req.body.email);
        const newFranchise = new Franchise(req.body);
        const savedDoc = await newFranchise.save();
        console.log('Successfully saved to MongoDB:', savedDoc._id);

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: 'New Franchise Application - ChaowMomo',
            html: `
                <h2>New Franchise Application</h2>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Age:</strong> ${req.body.age}</p>
                <p><strong>Contact:</strong> ${req.body.contactNumber}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Occupation:</strong> ${req.body.currentOccupation}</p>
                <p><strong>City:</strong> ${req.body.city}</p>
                <p><strong>Pincode:</strong> ${req.body.pincode}</p>
                <p><strong>Investment Range:</strong> ${req.body.investmentRange}</p>
                <p><strong>Proposed Location:</strong> ${req.body.proposedLocation}</p>
                <p><strong>Property Size:</strong> ${req.body.propertySize}</p>
                <p><strong>Google Location:</strong> ${req.body.googleLocation}</p>
                <p><strong>Hours Commitment:</strong> ${req.body.hoursPerDay}</p>
                <p><strong>Responsibility:</strong> ${req.body.responsibility}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('NODEMAILER ERROR (Franchise):', error.message);
            } else {
                console.log('EMAIL SENT (Franchise):', info.response);
            }
        });

        res.status(201).json({ message: 'Franchise request submitted successfully!' });
    } catch (err) {
        console.error('MONGODB ERROR (Franchise):', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        console.log('Received Contact form data:', req.body.email);
        const newContact = new Contact(req.body);
        const savedDoc = await newContact.save();
        console.log('Successfully saved to MongoDB:', savedDoc._id);

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Message: ${req.body.subject}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Subject:</strong> ${req.body.subject}</p>
                <p><strong>Message:</strong> ${req.body.message}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('NODEMAILER ERROR (Contact):', error.message);
            } else {
                console.log('EMAIL SENT (Contact):', info.response);
            }
        });

        res.status(201).json({ message: 'Contact message sent successfully!' });
    } catch (err) {
        console.error('MONGODB ERROR (Contact):', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Momo Brand API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
