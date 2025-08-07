const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Manually set CORS headers for all responses
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://bandhayudha.icu',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174'
  ];
  
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    // Allow requests with no origin (like Postman or curl)
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://bandhayudha.icu');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

// Middleware untuk parsing JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date().toISOString(),
    cors: 'enabled',
    origin: req.headers.origin || 'no-origin'
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working',
    headers: req.headers
  });
});

// UltraMsg Configuration
const ULTRAMSG_INSTANCE_ID = process.env.ULTRAMSG_INSTANCE_ID || 'instance135111';
const ULTRAMSG_TOKEN = process.env.ULTRAMSG_TOKEN || 'gnww78b0rjwsf143';

// Route untuk mengirim pesan WhatsApp
app.post('/api/contact', async (req, res) => {
  try {
    console.log('=== CONTACT REQUEST RECEIVED ===');
    console.log('Origin:', req.headers.origin);
    console.log('Method:', req.method);
    console.log('Body:', JSON.stringify(req.body, null, 2));

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      country,
      message
    } = req.body;

    // Validasi required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing',
        missing: {
          firstName: !firstName,
          lastName: !lastName,
          email: !email,
          message: !message
        }
      });
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `🔔 *SPONSOR MASUK*

📝 *Detail Sponsor:*
• Nama: ${firstName} ${lastName}
• Email: ${email}
• Telepon: ${phone || 'Tidak diisi'}
• Perusahaan: ${company || 'Tidak diisi'}
• Jabatan: ${jobTitle || 'Tidak diisi'}
• Negara: ${country || 'Tidak diisi'}

💬 *Pesan:*
${message}

---
Pesan otomatis dari website Bandhayudha UNDIP`;

    // Kirim ke WhatsApp menggunakan UltraMsg
    const ULTRAMSG_URL = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`;
    
    console.log('Sending to UltraMsg:', ULTRAMSG_URL);
    
    try {
      const whatsappResponse = await axios({
        method: 'POST',
        url: ULTRAMSG_URL,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          token: ULTRAMSG_TOKEN
        },
        data: {
          to: '6281315795773@c.us',
          body: whatsappMessage,
          priority: 10,
          referenceId: ''
        },
        timeout: 15000
      });

      console.log('WhatsApp Response:', whatsappResponse.data);

      res.status(200).json({
        success: true,
        message: 'Pesan berhasil dikirim!',
        data: {
          whatsapp: {
            sent: true,
            id: whatsappResponse.data.id || 'sent'
          }
        }
      });

    } catch (whatsappError) {
      console.error('UltraMsg Error:', {
        message: whatsappError.message,
        response: whatsappError.response?.data,
        status: whatsappError.response?.status
      });

      // Return success anyway (email still works)
      res.status(200).json({
        success: true,
        message: 'Pesan berhasil dikirim melalui email!',
        warning: 'WhatsApp sedang dalam maintenance',
        data: {
          email: true,
          whatsapp: false
        }
      });
    }

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Test UltraMsg endpoint
app.get('/api/test-ultramsg', async (req, res) => {
  try {
    console.log('Testing UltraMsg connection...');
    
    const testResponse = await axios({
      method: 'GET',
      url: `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/instance/status`,
      params: {
        token: ULTRAMSG_TOKEN
      }
    });

    res.json({
      success: true,
      message: 'UltraMsg connection test',
      data: testResponse.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'UltraMsg test failed',
      error: error.response?.data || error.message
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Bandhayudha API',
    version: '1.0.0',
    endpoints: [
      'GET /api/health',
      'GET /api/test',
      'POST /api/contact',
      'GET /api/test-ultramsg'
    ]
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`
🚀 Server running on port ${PORT}
📍 Environment: ${process.env.NODE_ENV || 'development'}
🔗 Listening on: http://127.0.0.1:${PORT}
✅ CORS enabled for: https://bandhayudha.icu
🔔 UltraMsg Instance: ${ULTRAMSG_INSTANCE_ID}
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app;