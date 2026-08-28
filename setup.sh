#!/bin/bash

# Wood Work & Craft - Setup Script
# This script automates the initial setup

echo "🎨 Wood Work & Craft - Setup Script"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node --version) found"
echo "✅ npm $(npm --version) found"
echo ""

# Check if npm dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "===================================="
echo "✨ Setup Complete!"
echo "===================================="
echo ""
echo "To start your website, run:"
echo "  npm start"
echo ""
echo "To build for production, run:"
echo "  npm run build"
echo ""
echo "Visit http://localhost:3000 after running npm start"
echo ""
echo "For deployment help, read DEPLOYMENT_GUIDE.md"
echo ""