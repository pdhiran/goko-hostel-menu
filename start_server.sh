#!/bin/bash
# Simple web server for Goko Hostel Menu

echo "=========================================="
echo "  Goko Hostel Menu - Local Web Server"
echo "=========================================="
echo ""
echo "Starting server..."
echo ""

# Get local IP address
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)

echo "✓ Server is running!"
echo ""
echo "📱 Access on this device:"
echo "   http://localhost:8000"
echo "   http://127.0.0.1:8000"
echo ""
echo "🌐 Share with others on same WiFi:"
echo "   http://$IP:8000"
echo ""
echo "📋 Share this URL with your team for review!"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Start Python HTTP server
python3 -m http.server 8000

