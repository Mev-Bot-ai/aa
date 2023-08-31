function applyInterface(allowedChain, currentToken = null) {
    $('.imt-name').text(globalSettings.imtTokenName);
    $('.imt-earned').text(`${globalSettings.imtTokenName} Earned`);
    $('#busd-to-imt').text(`USDT TO ${globalSettings.imtTokenName}`);
    $('#eth-to-imt').text(`${allowedChain == "56" ? "BNB" : "ETH"} TO ${globalSettings.imtTokenName}`);
    $('#deposit-eth').text(`${allowedChain == "56" ? "BNB" : "ETH"}`);

    $('#eth-logo').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png");

    $('#imt-image').attr('src', globalSettings.imtImagePath);
    $('#imt-image-path').attr('src', globalSettings.imtImagePath);
    $('#select-main-image').attr('src', globalSettings.imtImagePath);
    $('#select-main-token').text(globalSettings.imtTokenName);
    $('#select-main-title').text(`Deposit ${globalSettings.imtTokenName} Tokens and earn ${globalSettings.imtTokenName}`);
    $('#select-staked-image').attr('src', globalSettings.imtImagePath)
    $('#select-staked-title').text(globalSettings.imtTokenName + ' Tokens Staked');
    $('#select-approve-title').text('Approve ' + globalSettings.imtTokenName);

    if (currentToken) {
        $('#select-main-image').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png");
        $('#select-main-token').text(allowedChain == "56" ? "BNB" : 'ETH');
        $('#select-main-title').text(`Deposit ${allowedChain == "56" ? "BNB" : "ETH"} Tokens and earn ${globalSettings.imtTokenName}`);
        $('#select-staked-image').attr('src', allowedChain == "56" ? "assets/images/Binance-coin-bnb-logo.png" : "assets/images/Ethereum-ETH-icon.png")
        $('#select-staked-title').text(`${allowedChain == "56" ? "BNB" : "ETH"} Tokens Staked`);
        $('#select-approve-title').text('Deposit');

        document.getElementById('approve-button').onclick = onDepositButtonPressed;
    }

    if (!globalSettings.imtBscContractAddress || !globalSettings.imtEthContractAddress) {
        $('#network-change-marker').hide();
    }

    if (allowedChain == "1") {
        $('#network-label').text("ETH");
    } else {
        $("#network-label").text("BSC");
    }
}