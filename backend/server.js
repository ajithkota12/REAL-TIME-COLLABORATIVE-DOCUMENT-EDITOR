require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Initialize document in DB if not exists
async function initializeDocument() {
    const res = await pool.query('SELECT * FROM documents WHERE id = 1');
    if (res.rows.length === 0) {
        await pool.query("INSERT INTO documents (id, content, bold, italic, underline) VALUES (1, '', false, false, false)");
    }
}
initializeDocument();

io.on('connection', (socket) => {
    console.log('User connected');

    // Load initial document
    socket.on('loadDocument', async () => {
        const res = await pool.query('SELECT * FROM documents WHERE id = 1');
        socket.emit('documentData', res.rows[0]);
    });

    socket.on('edit', async (content) => {
        await pool.query('UPDATE documents SET content = $1 WHERE id = 1', [content]);
        io.emit('updateContent', content);
    });

    socket.on('bold', async (bold) => {
        await pool.query('UPDATE documents SET bold = $1 WHERE id = 1', [bold]);
        io.emit('updateStyleBold', bold);
    });

    socket.on('italic', async (italic) => {
        await pool.query('UPDATE documents SET italic = $1 WHERE id = 1', [italic]);
        io.emit('updateStyleItalic', italic);
    });

    socket.on('underline', async (underline) => {
        await pool.query('UPDATE documents SET underline = $1 WHERE id = 1', [underline]);
        io.emit('updateStyleUnderline', underline);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
