let provider = null;
let tokens = [];
const price = 0.05;
const poapTimeContractAddress = "0xBE703c8FD6Dc1FDaa93495c1c8F14Ac4b5B81912";
const poapContractAddress = "0x22C1f6050E56d2876009903609a2cC3fEf83B415";
const poapAbi = [{ "constant": true, "inputs": [{ "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }], "name": "renounceEventMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "tokenEvent", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "account", "type": "address" }], "name": "removeEventMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "account", "type": "address" }], "name": "removeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "isAdmin", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "to", "type": "address[]" }], "name": "mintEventToManyUsers", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "account", "type": "address" }], "name": "isEventMinter", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "tokenDetailsOfOwnerByIndex", "outputs": [{ "name": "tokenId", "type": "uint256" }, { "name": "eventId", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "account", "type": "address" }], "name": "addAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "__name", "type": "string" }, { "name": "__symbol", "type": "string" }, { "name": "__baseURI", "type": "string" }, { "name": "admins", "type": "address[]" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "account", "type": "address" }], "name": "addEventMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "to", "type": "address" }], "name": "mintToken", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventId", "type": "uint256" }, { "name": "tokenId", "type": "uint256" }, { "name": "to", "type": "address" }], "name": "mintToken", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "eventIds", "type": "uint256[]" }, { "name": "to", "type": "address" }], "name": "mintUserToManyEvents", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "eventId", "type": "uint256" }, { "indexed": false, "name": "tokenId", "type": "uint256" }], "name": "EventToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "AdminAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "AdminRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "eventId", "type": "uint256" }, { "indexed": true, "name": "account", "type": "address" }], "name": "EventMinterAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "eventId", "type": "uint256" }, { "indexed": true, "name": "account", "type": "address" }], "name": "EventMinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "approved", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "operator", "type": "address" }, { "indexed": false, "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }];
const poapTimeAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "_ids",
                "type": "uint256[]"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];
const switchNetwork = async () => {
    window?.ethereum
        ?.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x64",
                    chainName: "xDAI Chain",
                    nativeCurrency: {
                        name: "xDai",
                        symbol: "xDai",
                        decimals: 18,
                    },
                    rpcUrls: ["https://rpc.xdaichain.com"],
                    blockExplorerUrls: ["https://blockscout.com/poa/xdai"],
                },
            ],
        })
        .then(() => {
            connectWallet();
        })
        .catch(() => {
            failedConnectWallet();
        });
};

const failedConnectWallet = () => {
    document.getElementById("button").innerHTML = "Error Network, switch to XDAI";
};


const displayPoaps = async (address) => {
    let poapsList = await getPoapsList(address);
    let html = '';
    for (let poap of poapsList) {
        let id = poap.id;
        html += `<li><input type="checkbox" id="${id}" value="${id}?${poap.image}?${poap.name}" name="token"/>
        <label for="${id}"><img class="poap-circles" src="${poap.image}" style="width:78px;height:78px" title="${poap.name}" /></label>
        </li>
      `
    }
    $('#poapsList').html(html);
    let checkboxes = $("input[type=checkbox][name=token]")

    checkboxes.change(function () {
        let tokensString = checkboxes
            .filter(":checked")
            .map(function () {
                return this.value;
            })
            .get();
        if (tokensString.length > 0) {
            document.getElementById("transferButton").disabled = false;

        } else {
            document.getElementById("transferButton").disabled = true;

        }
        let html = `<table class="table table-image"
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>`;
        tokens = [];
        for (let token of tokensString) {
            tokens.push(Number(token.split("?")[0]));
            let image = token.split("?")[1];
            let name = token.split("?")[2];
            html += `<tr>
                <td class="w-25">
        <img src="${image}" class="poap-circles"  style="width:78px;height:78px">
        </td>
        <td>${name}</td>
            </tr>
                `;
        }
        $("#poapsAdded").html(html + "</tbody></table>");
        document.getElementById("poapCartCount").textContent = tokens.length;

    });
}

const connectWallet = async () => {
    await window.ethereum.enable();
    if (Number(window.ethereum.chainId) !== 100) {
        return failedConnectWallet();
    }
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts");
    document.getElementById("button").innerHTML = accounts[0].substring(0, 6) + "..." + accounts[0].slice(-4);
    let address = ethers.utils.getAddress(accounts[0]);
    displayPoaps(address)
};

const transfer = async (contract, account, to, tokens, amount) => {
    const response = await contract.transfer(account, to, tokens, {
        value: amount,
        gasLimit: 200000
    });
    $.toast({
        heading: "Transfering",
        text: "Start to transferring!",
        position: "top-center",
        showHideTransition: "fade",
        hideAfter: 10000,
        icon: "info",
    });
    await response.wait();
    $.toast().reset("all");
    $.toast({
        heading: "Success",
        text: "Transfer Success!",
        showHideTransition: "slide",
        position: "top-center",
        icon: "success",
    });
    setTimeout(function () {
        location.reload(true);
    }, 3000);
}

const approve = async (contract) => {
    let response = await contract.setApprovalForAll(poapTimeContractAddress, true, {
        gasLimit: 200000
    });
    $.toast({
        heading: "Approving",
        text: "Start to Approving!",
        position: "top-center",
        showHideTransition: "fade",
        hideAfter: 10000,
        icon: "info",
    });
    await response.wait();
    $.toast().reset("all");
    $.toast({
        heading: "Success",
        text: "Approval Success!",
        showHideTransition: "slide",
        position: "top-center",
        icon: "success",
    });
}

const handleTransfer = async (to) => {
    if (!provider) {
        connectWallet();
    } else {
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        const poapTimeContract = new ethers.Contract(poapTimeContractAddress, poapTimeAbi, signer);
        const poapContract = new ethers.Contract(poapContractAddress, poapAbi, signer);
        const amountRaw = ethers.utils.parseUnits(`${price}`, 18).toString();
        const balanceRaw = await provider.getBalance(account);
        const balance = ethers.utils.formatUnits(balanceRaw, 18);
        let hasApproved = await poapContract.isApprovedForAll(account, poapTimeContractAddress);
        console.log(tokens)
        if (hasApproved) {
            transfer(poapTimeContract, account, to, tokens, amountRaw);
        } else {
            approve(poapContract);
            transfer(poapTimeContract, account, to, tokens, amountRaw);


        }
    }
}

function getPoapsList(address) {
    return new Promise((resolve, reject) => {
        let poapList = [];
        axios.post(`https://epor.io/api/graph/xdai`,
            { "query": `\n  query getTokens {\n    tokens(\n      where: {\n        owners_contains: [\"${address}\"] \n      }\n      skip: 0\n      first: 1000\n      orderBy: timestamp\n      orderDirection: desc\n    ) {\n\t\t\tid\n\t\t\ttokenType\n\t\t\ttokenAddress\n\t\t\ttokenId\n\t\t\tbps\n\t\t\turi\n\t\t\tbids\n\t\t\towners\n\t\t\tamounts\n\t\t\tsales(where: {\n\t\t\t\tseller: \"0x5241aa99a776866296D1d695C02bB2E31B3Ff998\" \n\t\t\t})\n      likes { user }\n      likeCount\n\t\t\ttimestamp\n    }\n  }\n` }
        ).then(async (res) => {
            for (let token of res.data.data.tokens) {
                await axios.get(token.uri).then(res => {
                    poapList.push({ id: token.tokenId, image: res.data.image_url, name: res.data.name })
                });
            }
            resolve(poapList)
        }).catch(err => {
            reject(err)
        });
    });
}



connectWallet();
$(document).ready(async function () {
    document.getElementById("button").addEventListener("click", switchNetwork);
    $('#transfer').submit(async function (e) {
        e.preventDefault();
        let to = $("#to").val().trim();
        if (to === '') {
            alert("Please enter recipient address!");
            $("#to").focus();
            return;
        }
        handleTransfer(to);
        $('#transferModal').modal('toggle');
    });


});