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

# Main menu function
show_menu() {
    PS3="Enter your choice (1-5): "
    options=("Go" "Rust" "Node.js" "Ruby" "Python")
    
    printf "${BLUE}=== Development Environment Installation Script ===${NC}\n\n"
    printf "Please select a programming language to install:\n\n"
    
    select opt in "${options[@]}"; do
        case $opt in
            "Go")
                if command_exists go; then
                    echo -e "\n${GREEN}Go is already installed!${NC}"
                    go version
                else
                    get_os_specific_instructions "go"
                fi
                break
                ;;
            "Rust")
                if command_exists rustc; then
                    echo -e "\n${GREEN}Rust is already installed!${NC}"
                    rustc --version
                else
                    get_os_specific_instructions "rust"
                fi
                break
                ;;
            "Node.js")
                if command_exists node; then
                    echo -e "\n${GREEN}Node.js is already installed!${NC}"
                    node --version
                else
                    get_os_specific_instructions "node"
                fi
                break
                ;;
            "Ruby")
                if command_exists ruby; then
                    echo -e "\n${GREEN}Ruby is already installed!${NC}"
                    ruby --version
                else
                    get_os_specific_instructions "ruby"
                fi
                break
                ;;
            "Python")
                if command_exists python3; then
                    echo -e "\n${GREEN}Python is already installed!${NC}"
                    python3 --version
                else
                    get_os_specific_instructions "python"
                fi
                break
                ;;
            *) 
                echo -e "${RED}Invalid option. Please select a number between 1 and 5.${NC}"
                ;;
        esac
    done
}

# Ensure we're running interactively
if [ ! -t 0 ]; then
    # If we're not in a terminal, rerun the script in a new terminal
    exec </dev/tty
fi

# Show the menu and get user input
show_menu

echo -e "\n${BLUE}=== Post Installation ===${NC}"
echo "After running the installation command, you may need to restart your terminal."
echo "To verify the installation, run the version command for your installed language."