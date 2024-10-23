#!/bin/bash

# Text colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print instructions
print_instructions() {
    local lang=$1
    echo -e "\n${GREEN}=== $lang Installation Instructions ===${NC}"
    if command_exists $2; then
        echo -e "${GREEN}$lang is already installed!${NC}"
        $2 --version
    else
        get_os_specific_instructions $3
    fi
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

# Function to show menu and get choice
show_menu() {
    printf "${BLUE}=== Development Environment Installation Script ===${NC}\n\n"
    printf "Please select a programming language to install:\n"
    printf "1) Go\n"
    printf "2) Rust\n"
    printf "3) Node.js\n"
    printf "4) Ruby\n"
    printf "5) Python\n"
    printf "Enter your choice (1-5): "
}

# Show the menu
show_menu

# Read input with timeout
if [ -t 0 ]; then
    # Interactive mode
    read choice
else
    # Non-interactive mode (pipe)
    read -t 1 choice
    if [ $? -ne 0 ]; then
        # If no input received, show menu again and wait for input
        show_menu
        read choice
    fi
fi

# Process user choice
case $choice in
    1)
        print_instructions "Go" "go" "go"
        ;;
    2)
        print_instructions "Rust" "rustc" "rust"
        ;;
    3)
        print_instructions "Node.js" "node" "node"
        ;;
    4)
        print_instructions "Ruby" "ruby" "ruby"
        ;;
    5)
        print_instructions "Python" "python3" "python"
        ;;
    *)
        echo -e "\n${RED}Invalid choice. Please run the script again and select a number between 1-5.${NC}"
        exit 1
        ;;
esac

echo -e "\n${BLUE}=== Post Installation ===${NC}"
echo "After running the installation command, you may need to restart your terminal."
echo "To verify the installation, run the version command for your installed language."