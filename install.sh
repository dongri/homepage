#!/bin/bash

echo "どの言語をインストールしますか？"
echo "1) Go"
echo "2) Rust"
echo "3) Node.js"
echo "4) Ruby"
echo "5) Python"
echo -n "番号を選択してください (1-5): "

read choice

case $choice in
  1)
    echo "Goのインストール手順:"
    echo "1. 公式サイトから最新のGoをダウンロードしてください: https://golang.org/dl/"
    echo "2. ダウンロードしたアーカイブを解凍し、適切なディレクトリに配置してください。"
    echo "3. 環境変数PATHにGoのbinディレクトリを追加してください。"
    echo "4. ターミナルで 'go version' を実行し、インストールが成功したことを確認してください。"
    ;;
  2)
    echo "Rustのインストール手順:"
    echo "1. 以下のコマンドを実行して、Rustをインストールしてください:"
    echo "   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    echo "2. 指示に従ってインストールを完了してください。"
    echo "3. ターミナルで 'rustc --version' を実行し、インストールが成功したことを確認してください。"
    ;;
  3)
    echo "Node.jsのインストール手順:"
    echo "1. 公式サイトから最新のNode.jsをダウンロードしてください: https://nodejs.org/"
    echo "2. ダウンロードしたインストーラを実行し、指示に従ってインストールを完了してください。"
    echo "3. ターミナルで 'node --version' を実行し、インストールが成功したことを確認してください。"
    ;;
  4)
    echo "Rubyのインストール手順:"
    echo "1. 以下のコマンドを実行して、Rubyをインストールしてください:"
    echo "   sudo apt install ruby-full"
    echo "2. ターミナルで 'ruby --version' を実行し、インストールが成功したことを確認してください。"
    ;;
  5)
    echo "Pythonのインストール手順:"
    echo "1. 以下のコマンドを実行して、Pythonをインストールしてください:"
    echo "   sudo apt install python3"
    echo "2. ターミナルで 'python3 --version' を実行し、インストールが成功したことを確認してください。"
    ;;
  *)
    echo "無効な選択肢です。1から5の番号を選択してください。"
    ;;
esac
