#!/bin/bash

# Display a menu for language selection
echo "Please choose a programming language to install:"
echo "1) Go"
echo "2) Rust"
echo "3) Node.js"
echo "4) Ruby"
echo "5) Python"
echo "Enter the number corresponding to your choice: "

# Read user input
read choice < /dev/tty

# Function to display installation steps for Go
install_go() {
    echo "Installing Go..."
    echo "1. Download Go: https://golang.org/dl/"
    echo "2. Install it: sudo tar -C /usr/local -xzf go<version>.tar.gz"
    echo "3. Add Go to your PATH: export PATH=\$PATH:/usr/local/go/bin"
}

# Function to display installation steps for Rust
install_rust() {
    echo "Installing Rust..."
    echo "1. Run the following command: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    echo "2. Follow the on-screen instructions."
}

# Function to display installation steps for Node.js
install_node() {
    echo "Installing Node.js..."
    echo "1. Download and install Node.js: https://nodejs.org"
    echo "2. Verify installation: node -v"
}

# Function to display installation steps for Ruby
install_ruby() {
    echo "Installing Ruby..."
    echo "1. Install Ruby using a package manager: sudo apt install ruby-full (Ubuntu)"
    echo "2. Verify installation: ruby -v"
}

# Function to display installation steps for Python
install_python() {
    echo "Installing Python..."
    echo "1. Install Python using a package manager: sudo apt install python3 (Ubuntu)"
    echo "2. Verify installation: python3 --version"
}

# Choose action based on user input
case $choice in
    1)
        install_go
        ;;
    2)
        install_rust
        ;;
    3)
        install_node
        ;;
    4)
        install_ruby
        ;;
    5)
        install_python
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac
