#!/bin/bash
set -e

show_main_menu() {
  echo "Please choose a programming language to install:"
  echo "1) Rust"
  echo "2) Go"
  echo "3) Node.js"
  printf "Enter the number: "
}

show_continue_menu() {
  echo ""
  echo "Do you want to continue or exit?"
  echo "0) Return to main menu"
  echo "1) Exit"
  printf "Enter your choice: "
}

install_rust() {
  echo "Installing Rust..."
  echo ""
  echo "https://www.rust-lang.org/tools/install"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo "$ url --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
  echo "$ source \$HOME/.cargo/env"
  echo "$ rustc --version"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
}

install_go() {
  echo "Installing Go..."
  echo ""
  echo "https://golang.org/dl/"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo "$ wget https://go.dev/dl/go<version>.darwin-amd64.tar.gz"
  echo "$ sudo tar -C /usr/local -xzf go<version>.darwin-amd64.tar.gz"
  echo "$ vim ~/.zshrc"
  echo "export PATH=\$PATH:/usr/local/go/bin"
  echo "$ source ~/.zshrc"
  echo "$ go version"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
}

install_node() {
  echo "Installing Node.js..."
  echo ""
  echo "https://github.com/nvm-sh/nvm"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  echo "$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/<version>/install.sh | bash"
  echo "$ source ~/.zshrc"
  echo "$ nvm ls-remote"
  echo "$ nvm install <version>"
  echo "$ node --version"
  echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
}

# Main loop
while true; do
  show_main_menu
  read choice < /dev/tty

  echo ""
  case $choice in
    1)
      install_rust
      ;;
    2)
      install_go
      ;;
    3)
      install_node
      ;;
    *)
      echo "Invalid choice. Please try again."
      continue
      ;;
    esac

    # After displaying installation steps, ask whether to continue or exit
    show_continue_menu
    read continue_choice < /dev/tty

    case $continue_choice in
      0)
        echo ""
        continue
        ;;
      1)
        echo "Exiting..."
        exit 0
        ;;
      *)
        echo "Invalid choice. Returning to main menu..."
        echo ""
        continue
        ;;
    esac
done
