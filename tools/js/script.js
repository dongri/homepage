const $result = (text) => {
  document.getElementById('result').innerHTML = text
}

// ----------------------------------------------------------------------------
// Wallet sign
const setupWeb3 = async () => {
  try {
    let currentProvider = null
    if (window.ethereum) {
      await window.ethereum.enable()
      currentProvider = window.ethereum
    } else if (window.web3) {
      currentProvider = window.web3.currentProvider
    } else {
      window.open('https://metamask.app.link/dapp/dongri.org', '_blank');
    }
    if (currentProvider) {
      const web3 = new Web3(currentProvider)
      const chainId = await web3.eth.getChainId()
      const accounts = (await web3.eth.getAccounts()) || web3.eth.accounts
      const account = accounts[0]
      return {web3, chainId, account}
    }
  } catch (err) {
    console.log(err)
  }
}

const personal_sign = async () => {
  const {web3, chainId, account} = await setupWeb3()
  const message = document.getElementById('message').value
  web3.eth.personal.sign(message, account, (err, signature) => {
    if (err) {
      $result(err.message)
    } else {
      $result(signature)
    }
  })
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Base64
const unicodeToBase64 = (str) => {
  const utf8Bytes = new TextEncoder().encode(str);
  const base64String = btoa(String.fromCharCode(...utf8Bytes));
  return base64String;
}

const base64ToUnicode = (base64) => {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const decodedStr = new TextDecoder().decode(bytes);
  return decodedStr;
}

const encode_base64 = () => {
  const message = document.getElementById('message').value
  const base64 = unicodeToBase64(message)
  $result(base64)
}

const decode_base64 = () => {
  const base64 = document.getElementById('message').value
  const message = base64ToUnicode(base64)
  $result(message)
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// JSON Lint
const json_lint = () => {
  const message = document.getElementById('message').value
  try {
    const json = JSON.parse(message)
    $result(JSON.stringify(json, null, 2))
  } catch (err) {
    $result(err.message)
  }
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Secure Token
const generateSecureToken = (length) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];,./`~';
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => charset[byte % charset.length]).join('');
}

const secure_token = () => {
  const length = document.getElementById('length').value
  const count = 10
  let result = ''
  for (let i = 0; i < count; i++) {
    const token = generateSecureToken(length)
    result += token + '\n'
  }
  $result(result)
}
// ----------------------------------------------------------------------------
