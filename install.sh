#!/bin/bash

# Text colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print header
echo -e "${BLUE}=== Development Environment Installation Script ===${NC}\n"

# Print available options
echo "Please select a programming language to install:"
echo "1) Go"
echo "2) Rust"
echo "3) Node.js"
echo "4) Ruby"
echo "5) Python"
echo -n "Enter your choice (1-5): "

# Read user input
read choice

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Installation instructions based on OS
get_os_specific_instructions() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macOS detected"
        case $1 in
            "go")
                echo "brew install go"
                ;;
            "rust")
                echo "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
                ;;
            "node")
                echo "brew install node"
                ;;
            "ruby")
                echo "brew install ruby"
                ;;
            "python")
                echo "brew install python"
                ;;
        esac
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Linux detected"
        case $1 in
            "go")
                echo "sudo apt update && sudo apt install golang"
                ;;
            "rust")
                echo "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
                ;;
            "node")
                echo "curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt install -y nodejs"
                ;;
            "ruby")
                echo "sudo apt update && sudo apt install ruby-full"
                ;;
            "python")
                echo "sudo apt update && sudo apt install python3 python3-pip"
                ;;
        esac
    else
        echo "Unsupported operating system"
        exit 1
    fi
}

# Process user choice
case $choice in
    1)
        echo -e "\n${GREEN}=== Go Installation Instructions ===${NC}"
        if command_exists go; then
            echo -e "${GREEN}Go is already installed!${NC}"
            go version
        else
            get_os_specific_instructions "go"
        fi
        ;;
    2)
        echo -e "\n${GREEN}=== Rust Installation Instructions ===${NC}"
        if command_exists rustc; then
            echo -e "${GREEN}Rust is already installed!${NC}"
            rustc --version
        else
            get_os_specific_instructions "rust"
        fi
        ;;
    3)
        echo -e "\n${GREEN}=== Node.js Installation Instructions ===${NC}"
        if command_exists node; then
            echo -e "${GREEN}Node.js is already installed!${NC}"
            node --version
        else
            get_os_specific_instructions "node"
        fi
        ;;
    4)
        echo -e "\n${GREEN}=== Ruby Installation Instructions ===${NC}"
        if command_exists ruby; then
            echo -e "${GREEN}Ruby is already installed!${NC}"
            ruby --version
        else
            get_os_specific_instructions "ruby"
        fi
        ;;
    5)
        echo -e "\n${GREEN}=== Python Installation Instructions ===${NC}"
        if command_exists python3; then
            echo -e "${GREEN}Python is already installed!${NC}"
            python3 --version
        else
            get_os_specific_instructions "python"
        fi
        ;;
    *)
        echo -e "\n${RED}Invalid choice. Please run the script again and select a number between 1 and 5.${NC}"
        exit 1
        ;;
esac

echo -e "\n${BLUE}=== Post Installation ===${NC}"
echo "After running the installation command, you may need to restart your terminal."
echo "To verify the installation, run the version command for your installed language."