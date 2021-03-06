const webdriver = require('selenium-webdriver')
const { By } = webdriver
module.exports = {
  elements: {
    buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
    errorClose: By.css('.send-screen > div:nth-child(3) > div:nth-child(1)'),
    error: By.className('error'),
    loader: By.css('#app-content > div > div.full-flex-height > img'),
    poaABI: '[{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"abstractStorageAddr","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"getCrowdsalesForUser","inputs":[{"type":"address","name":"deployer"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"countCrowdsalesForUser","inputs":[{"type":"address","name":"deployer"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"changeMintedCappedIdx","inputs":[{"type":"address","name":"newMintedCappedIdxAddr"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"changeDutchIdxAddr","inputs":[{"type":"address","name":"newDutchIdxAddr"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"dutchIdxAddr","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"mintedCappedIdxAddr","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"changeAbstractStorage","inputs":[{"type":"address","name":"newAbstractStorageAddr"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"trackCrowdsale","inputs":[{"type":"address","name":"proxyAddress"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"_newOwner"}],"constant":false},{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"address","name":"_abstractStorage"},{"type":"address","name":"_mintedCappedIdx"},{"type":"address","name":"_dutchIdx"}]},{"type":"event","name":"Added","inputs":[{"type":"address","name":"sender","indexed":true},{"type":"address","name":"proxyAddress","indexed":true},{"type":"bytes32","name":"appExecID","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipRenounced","inputs":[{"type":"address","name":"previousOwner","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}]',
  },
  menus: {
    token: {
      menu: By.id('token-cell_dropdown_0'),
      items: By.className('dropdown-menu-item'),
      send: By.css('#token-cell_dropdown_0 > div > div > li:nth-child(2)'),
      view: By.css('#token-cell_dropdown_0 > div > div > li:nth-child(3)'),
      copy: By.css('#token-cell_dropdown_0 > div > div > li:nth-child(4)'),
      remove: By.css('#token-cell_dropdown_0 > div > div > li:nth-child(5)'),
      sendText: 'Send',
      viewText: 'View token on block explorer',
      copyText: 'Copy address to clipboard',
      removeText: 'Remove',
    },
    sandwich: {
      menu: By.css('.sandwich-expando'),
      settings: By.css('#app-content > div > div.full-width > div:nth-child(3) > span > div > li:nth-child(2)'),
      logOut: By.css('#app-content > div > div.full-width > div:nth-child(3) > span > div > li:nth-child(3)'),
      textLogOut: 'Log Out',
      textSettings: 'Settings',
      info: By.css('li.dropdown-menu-item:nth-child(4)'),
    },
    account: {
      item: By.className('dropdown-menu-item'),
      account1: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(2) > span'),
      account2: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(3) > span'),
      account3: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(4) > span'),
      account4: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(5) > span'),
      menu: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div'),
      delete: By.className('remove'),
      createAccount: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(3) > span'),
      // import: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(5) > span'),
      import: By.css('li.dropdown-menu-item:nth-child(5) > span:nth-child(1)'),
      import2: By.css('#app-content > div > div.full-width > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(6)'),
      label: By.className('keyring-label'),
    },
    dot: {
      menu: By.className('account-dropdown'),
      showQRcode: By.css('#app-content > div > div.app-primary.from-right > div > div > div:nth-child(1) > flex-column > div.name-label > div > span > div > div > div > li:nth-child(3)'),
      exportPR: By.css('#app-content > div > div.app-primary.from-right > div > div > div:nth-child(1) > flex-column > div.name-label > div > span > div > div > div > li:nth-child(5)'),
      item: By.className('dropdown-menu-item'),
    },
    networks: {
      addedCustomRpc: By.className('custom-rpc'),
      customRpc: By.css('#app-content > div > div:nth-child(2) > span > div > li:nth-child(9)'),
    },
  },
  screens: {
    hdWallet: {
      buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      error: By.className('error'),
      title: By.className('section-title flex-row flex-center'),
      buttonConnect: {
        enabled: By.className('hw-connect__connect-btn'),
        disabled: By.className('hw-connect__connect-btn disabled'),
      },
      image: By.className('hw-connect__btn__img'),
      imageSelected: By.className('hw-connect__btn selected'),
    },
    chooseContractExecutor: {
      title: By.className('flex-center send-header'),
      titleText: 'Choose contract executor',
      buttonNext: By.css('.choose-contract-next-button'),
      account: By.className('account-data-subsection flex-row flex-grow'),
      addressExecutor: By.className('flex-row flex-center'),
      selectedAccount: By.className('executor-cell-container-selected'),
      buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),

    },
    executeMethod: {
      copy: By.className('clipboard cursor-pointer'),
      title: By.className('flex-center send-header'),
      titleText: 'Execute Method',
      selectArrow: By.className('Select-arrow-zone'),
      item0: By.css('.Select-input > input:nth-child(1)'),
      items: By.className('Select-option'),
      item11: By.css('#react-select-2--option-11'),
      buttonCall: By.css('.section > button:nth-child(1)'),
      fieldOutput: By.className('input large-input output'),
      fieldParameter: By.className('input large-input output'),
      buttonNext: By.css('.section > div:nth-child(1) > button:nth-child(2)'),
      buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      buttonCopyABI: By.className('btn-violet'),
      buttonExecuteMethod: By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/button'),
    },
    eventsEmitter: {
      button: By.className('btn btn-default'),
      event: By.className('Toastify__toast-body'),
    },
    signMessage: {
      buttons: {
        sign: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row.flex-space-around > button:nth-child(2)'),
        cancel: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row.flex-space-around > button:nth-child(1)'),
      },
      title: By.css('#app-content > div > div.app-primary.from-right > div > div > h3'),
      error: By.className('error'),
      accountName: By.css('#app-content > div > div.app-primary.from-right > div > div > div:nth-child(3) > div.identity-panel.flex-row.flex-space-between > div.identity-data.flex-column.flex-justify-center.flex-grow.select-none > h2'),
      message: By.css('#app-content > div > div.app-primary.from-right > div > div > div:nth-child(3) > div.tx-data.flex-column.flex-justify-center.flex-grow.select-none > div > span'),
    },
    sendTokens: {
      error: By.className('error'),
      errorText: {
        invalidAmount: 'Invalid token\'s amount',
        address: 'Recipient address is invalid',
        largeAmount: 'Insufficient token\'s balance',
        tooPrecise: 'Token\'s amount is too precise',
        negativeAmount: 'Can not send negative amounts of ETH',
      },
      title: By.className('flex-center'),
      balance: By.className('hide-text-overflow token-balance__amount'),
      symbol: By.className('token-balance__symbol'),
      field: {
        address: By.name('address'),
        addressPlaceholder: 'Recipient Address',
        amount: By.name('amount'),
        amountPlaceholder: 'Amount',
      },
      button: {
        next: By.xpath('//*[@id="app-content"]/div/div[2]/div/section[2]/button'),
        arrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      },
    },
    yourPR: {
      key: By.css('#app-content > div > div.app-primary.from-right > div > div.privateKey > div.flex-row > p'),
      copy: By.className('clipboard cursor-pointer'),
      button: {
        save: By.className('btn-violet'),
        done: By.css('#app-content > div > div.app-primary.from-right > div > div.privateKey > div:nth-child(3) > button:nth-child(2)'),

      },
    },
    exportPR: {
      error: By.className('error'),
      warningText: 'Export private keys at your own risk',
      errorText: 'Incorrect Password.',
      button: {
        cancel: By.className('btn-violet'),
        submit: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)'),
      },
      fieldPassword: By.id('exportAccount'),

    },
    addToken: {
      title: By.className('page-subtitle'),
      titleText: 'Add Token',
      tab: {
        custom: By.className('inactiveForm pointer'),
        search: By.className('inactiveForm pointer'),
      },
      search: {
        fieldSearch: By.id('search-tokens'),
        results: By.className('token-list__token-data'),
        token: {
          unselected: By.className('token-list__token'),
          selected: By.className('token-list__token token-list__token--selected'),
          name: By.className('token-list__token-name'),
          icon: By.className('token-list__token-icon'),
        },
        button: {
          next: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(3) > div.page-container__footer > div > button:nth-child(2)'),
          cancel: By.className('btn-violet'),
        },
        confirm: {
          label: By.className('confirm-label'),
          labelText: By.className('Would you like to add these tokens?'),
          button: {
            add: By.className('btn-primary'),
            back: By.className('btn-default btn-violet'),
          },
          token: {
            item: By.className('confirm-add-token__token-list-item'),
            balance: By.className('confirm-add-token__balance'),
            name: By.className('confirm-add-token__name'),
            icon: By.className('confirm-add-token__token-icon identicon'),
          },
        },
      },
      custom:
        {
          fields: {
            contractAddress: By.id('token-address'),
            tokenSymbol: By.id('token_symbol'),
            decimals: By.id('token_decimals'),
          },
          buttons: {
            add: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(7) > button:nth-child(2)'),
            cancel: By.className('btn-violet'),
          },
        },
    },
    deleteCustomRPC: {
      buttons: {
        yes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
        no: By.className('btn-violet'),
      },
      titleText: 'Delete Custom RPC',
    },
    confirmTransaction: {
      titleText: 'Confirm Transaction',
      title: By.className('flex-row flex-center'),
      amount: By.css('#pending-tx-form > div:nth-child(1) > div.table-box > div:nth-child(2) > div.ether-balance.ether-balance-amount > div > div > div > div:nth-child(1)'),
      symbol: By.css('#pending-tx-form > div:nth-child(1) > div.table-box > div:nth-child(2) > div.ether-balance.ether-balance-amount > div > div > div > div:nth-child(2)'),
      button: {
        submit: By.css('#pending-tx-form > div.flex-row.flex-space-around.conf-buttons > input'),
        reject: By.css('.cancel'),
        rejectAll: By.css('#pending-tx-form > div:nth-child(4) > button'),
        buyEther: By.css('#pending-tx-form > div.flex-row.flex-space-around.conf-buttons > button.btn-green'),
      },
      fields: {
        gasLimit: By.css('#pending-tx-form > div:nth-child(1) > div.table-box > div:nth-child(3) > div.cell.value > div > div > input'),
        gasPrice: By.css('#pending-tx-form > div:nth-child(1) > div.table-box > div:nth-child(4) > div.cell.value > div > div > input'),
      },
    },
    sendTransaction: {
      title: By.css('#app-content > div > div.app-primary.from-right > div > h3:nth-child(2)'),
      titleText: 'Send Transaction',
      field: {
        address: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(3) > div > input'),
        amount: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(4) > input'),
      },
      buttonNext: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(4) > button'),
    },
    restoreVault: {
      textArea: By.css('#app-content > div > div.app-primary.from-left > div > div.initialize-screen.flex-column.flex-center.flex-grow > textarea'),
      fieldPassword: By.id('password-box'),
      fieldPasswordConfirm: By.id('password-box-confirm'),
      buttos: {
        ok: By.css('#app-content > div > div.app-primary.from-left > div > div.initialize-screen.flex-column.flex-center.flex-grow > div > button:nth-child(2)'),
      },
    },
    deleteImportedAccount: {
      title: By.css('#app-content > div > div.app-primary.from-left > div > div.section-title.flex-row.flex-center > h2'),
      titleText: 'Delete Imported Account',
      buttons: {
        no: By.css('#app-content > div > div.app-primary.from-left > div > div.flex-row.flex-right > button.btn-violet'),
        yes: By.css('div.flex-row:nth-child(4) > button:nth-child(2)'),
        arrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      },
    },
    importAccounts: {
      iconCopy: By.className('clipboard cursor-pointer'),
      warning: By.className('error'),
      error: By.css('span.error'),
      selectArrow: By.className('Select-arrow-zone'),
      selectType: By.name('import-type-select'),
      itemContract: By.id('react-select-4--option-2'),
      itemProxyContract: By.id('react-select-3--option-3'),
      contractAddress: By.id('address-box'),
      contractABI: By.id('abi-box'),
      title: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div.flex-row.flex-center > h2'),
      textTitle: 'Import Accounts',
      fieldPrivateKey: By.id('private-key-box'),
      buttonImport: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div:nth-child(4) > button'),
    },
    QRcode: {
      address: By.className('ellip-address'),
      buttonArrow: By.className('fa-arrow-left'),
      iconCopy: By.className('clipboard cursor-pointer'),
    },
    settings: {
      currentNetwork: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(1) > span:nth-child(2)'),
      fieldNewRPC: By.id('new_rpc'),
      buttonSave: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(2) > button'),
      titleText: 'Settings',
      title: By.css('#app-content > div > div.app-primary.from-right > div > div.section-title.flex-row.flex-center > h2'),
      buttons: {
        arrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
        changePassword: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(10) > button:nth-child(5)'),
        delete: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(1) > button'),
      },
      error: By.className('error'),
      errors: {
        invalidHTTP: 'URIs require the appropriate HTTP/HTTPS prefix.',
        invalidRpcEndpoint: 'Invalid RPC endpoint',
        invalidRpcUrl: 'Invalid RPC URI',
      },
    },
    main: {
      accountAddress: By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[1]/flex-column/div[2]/div/span'),
      identicon: By.className('identicon-wrapper select-none'),
      fieldAccountName: By.className('sizing-input'),
      accountName: By.className('font-medium color-forest'),
      edit: By.className('edit-text'),
      iconCopy: By.className('clipboard cursor-pointer white'),
      transactionList: By.css('#app-content > div > div.app-primary.from-left > div > section > section > div > div > div > div.ether-balance.ether-balance-amount > div > div > div > div:nth-child(1)'),
      buttons: {
        send: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > button:nth-child(4)'),
        buy: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > button:nth-child(3)'),
        sendText: 'Send',
        save: By.className('editable-button'),
      },
      network: By.className('network-name'),
      sent: {
        menu: By.className('wallet-view__tab-history'),
        tokens: By.className('activeForm right'),
      },
      // balance: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > div.ether-balance.ether-balance-amount > div > div > div:nth-child(1) > div:nth-child(1)'),
      balance: By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div[1]'),
      balanceUSD: By.xpath('//*[@id="app-content"]/div/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div[1]'),
      address: By.css('#app-content > div > div.app-primary.from-left > div > div > div:nth-child(1) > flex-column > div.flex-row > div'),
      tokens: {
        menu: By.id('wallet-view__tab-tokens'),
        token: By.className('token-cell'),
        balance: By.css('#token-cell_0 > h3'),
        amount: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > div:nth-child(1) > span'),
        textNoTokens: 'No tokens found',
        textYouOwn1token: 'You own 1 token',
        buttonAdd: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > div:nth-child(1) > button'),
        buttonAdd2: By.css('#app-content > div > div.app-primary.from-right > div > section > div.full-flex-height > div > div:nth-child(1) > button'),
        buttonAddText: 'Add Token',
        counter: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > div:nth-child(1) > span'),
        counterFF: By.css('div.full-flex-height:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)'),
      },
    },
    buyEther: {
      title: By.className('flex-center buy-title'),
      buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
    },
    info: {
      title: By.className('section-title flex-row flex-center'),
      titleText: 'Info',
      label: By.className('info'),
      buttonArrow: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
    },
    removeToken: {
      title: By.className('page-subtitle'),
      titleText: 'Remove Token',
      label: By.className('confirm-label'),
      labelText: 'Are you sure you want to remove token "',
      buttons: {
        back: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
        no: By.className('btn-violet'),
        yes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
      },
    },

    changePassword: {
      title: By.className('page-subtitle'),
      titleText: 'Change Password',
      fieldOldPassword: By.id('old-password-box'),
      fieldNewPassword: By.id('new-password-box'),
      fieldConfirmNewPassword: By.id('password-box-confirm'),
      buttonNo: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button.btn-violet'),
      buttonYes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
      label: By.className('confirm-label'),
      arrowLeft: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      error: By.className('error'),
      labelText: 'Are you sure you want to change the password for unlocking of your wallet?',
      errorText: {
        differ: 'New password should differ from the current one',
        notLong: 'Password not long enough',
        dontMatch: 'Passwords don\'t match',
        incorrectPassword: 'Error: Incorrect password',
      },
    },
    lock: {
      fieldPassword: By.id('password-box'),
      error: By.className('error'),
      errorText: 'Error: Incorrect password',
      buttonLogin: By.className('cursor-pointer'),
      linkRestore: By.css('#app-content > div > div.app-primary.from-left > div > div.flex-row.flex-center.flex-grow > p'),
      linkRestoreText: 'Restore from seed phrase',
    },

    TOU: {
      agreement: By.className('notice-box'),
      titleText: 'Terms of Use',
      title: By.className('terms-header'),
      button: By.css('button'),
      linkTerms: By.linkText('Terms of Service'),
      linkTermsText: 'Terms of Service',
    },
    create: {
      fieldPassword: By.id('password-box'),
      fieldPasswordConfirm: By.id('password-box-confirm'),
      button: By.css('button'),
    },
    seedPhrase: {
      fieldPhrase: By.className('twelve-word-phrase'),
      buttonIveCopied: By.css('#app-content > div > div.app-primary.from-right > div > button:nth-child(4)'),
      textButtonIveCopied: 'I\'ve copied it somewhere safe',
    },
  },
  NETWORKS: {
    POA: 'poa',
    DAI: 'dai',
    SOKOL: 'sokol',
    MAINNET: 'mainnet',
    CLASSIC: 'classic',
    ROPSTEN: 'ropsten',
    KOVAN: 'kovan',
    RINKEBY: 'rinkeby',
    GOERLI: 'goerli',
    LOCALHOST: 'localhost',
    CUSTOM: 'http://test.com',
  },
}


