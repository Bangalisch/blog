(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{432:function(e,t,r){"use strict";r.r(t);var a=r(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("This tutorial shows you how to create a Bitcoin Point of Sale and accept BTC payments (on-chain and via the Lightning Network). When you complete it, hopefully, you'll have a web-based PoS that requires no additional hardware. It will run as a web app from a browser of your mobile phone or tablet.")]),e._v(" "),r("p",[e._v("Most importantly, there will be no fees or intermediary. Customers will be presented with an invoice they have to pay from their wallet. The BTC you receive will go straight to your wallet. Optionally, you can enable tips and customize the percentage as well as the overall appearance of the PoS.")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("BTCPay Point Of Sale - a web-based app that allows you to receive Bitcoin payments with no intermediary or fees, from any old tablet or phone:")])])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/Bitcoin-Point-Of-Sale-1024x768.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("Before we dive into the guide, here are some requirements:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server"),r("OutboundLink")],1),e._v(" (self-hosted or hosted by a third-party)")]),e._v(" "),r("li",[e._v("Phone or a tablet, PC (Digital display)")]),e._v(" "),r("li",[e._v("Internet connection")])]),e._v(" "),r("h2",{attrs:{id:"steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("ol",[r("li",[e._v("Deploy BTCPay Server")]),e._v(" "),r("li",[e._v("Configure BTCPay (Register User, Create Store, Add Wallet)")]),e._v(" "),r("li",[e._v("Create a PoS app")]),e._v(" "),r("li",[e._v("Add PoS as to a home screen of your tablet or phone")])]),e._v(" "),r("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Mz4uajz0z9Y/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=Mz4uajz0z9Y","data-id":"Mz4uajz0z9Y"}},[r("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/Mz4uajz0z9Y?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("h2",{attrs:{id:"step-1-deploying-btcpay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-deploying-btcpay"}},[e._v("#")]),e._v(" Step 1 - Deploying BTCPay")]),e._v(" "),r("p",[e._v("BTCPay Server is a free and open-source cryptocurrency payment processor (Hey, you're reading our blog!).")]),e._v(" "),r("p",[e._v("You've heard of WordPress, the Content Management System that allows people to build sites with ease.")]),e._v(" "),r("p",[e._v("BTCPay is a WordPress of finance. It allows you to become your own bank or payment processor with a complete self-hosted technology stack. It's free and the entire source code can be found on "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("There are many ways in which one can deploy BTCPay. I recommend that you check out extensive "),r("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/deployment",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Besides self-hosting, you can use someone else's server. That's called "),r("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/thirdpartyhosting",target:"_blank",rel:"noopener noreferrer"}},[e._v("third-party hosting"),r("OutboundLink")],1),e._v(". Majority of community members allow people to use their servers for free.  Make sure to understand risks that trusting a third-party brings.")]),e._v(" "),r("p",[e._v("Make sure to read our third-party documentation to understand why chose one over the other. Third-party servers come with some limitations, but you can use them for testing purposes.")]),e._v(" "),r("p",[e._v("To deploy a self-hosted BTCPay you can follow a tutorial below.")]),e._v(" "),r("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/oce_fvRdLLY/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=oce_fvRdLLY","data-id":"oce_fvRdLLY"}},[r("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/oce_fvRdLLY?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("p",[e._v("If you don't want to invest time and efforts into self-hosting a server at this point, you can just hop on to our "),r("a",{attrs:{href:"https://mainnet.demo.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo server"),r("OutboundLink")],1),e._v(" and go to step 2.")]),e._v(" "),r("h2",{attrs:{id:"step-2-registering-creating-a-store-connecting-a-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-registering-creating-a-store-connecting-a-wallet"}},[e._v("#")]),e._v(" Step 2 - Registering, creating a store, connecting a wallet")]),e._v(" "),r("p",[e._v("No matter if you decided to go with a self-hosted, a third-party host or our demo server, the rest of the setup is the same for all.")]),e._v(" "),r("h3",{attrs:{id:"21-creating-an-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#21-creating-an-account"}},[e._v("#")]),e._v(" 2.1 - Creating an account")]),e._v(" "),r("p",[e._v('Register an account on BTCPay Server by clicking the "Register" link in the top menu. Enter your credentials. Some hosts may require that you verify e-mail upon registration. For the self-hosted server, the first registered user is a server admin.')]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/Register-on-BTCPay-Server.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/Register-account-on-BTCPay-Server.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"22-creating-a-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#22-creating-a-store"}},[e._v("#")]),e._v(" 2.2 - Creating a store")]),e._v(" "),r("p",[e._v("Now that you're logged in, create a store. In BTCPay you can create an unlimited amount of stores. Each stores is unique entity and can be customized. The store is later tied to your wallet and whatever app you're creating.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/Snag_141f090.png",alt:""}})]),e._v(" "),r("p",[e._v("Create a new store and give it a name. You'll see the message that the store is successfully created. If you wish, you can configure your store settings. For most people, the default setup is okay. Do not navigate away from the store settings, scroll down to configure your wallet.")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Create a store and give it a name:")])])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-Create-A-store.png",alt:""}})]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Store successfully created. If you wish you can customize basic settings, or just scroll down to connect your wallet:")])])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-Creating-A-store.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"23-connecting-a-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#23-connecting-a-wallet"}},[e._v("#")]),e._v(" 2.3 - Connecting a wallet")]),e._v(" "),r("p",[e._v("As I already said, the beauty of using BTCPay is that there will be no fees on transaction, registration or membership. Furthermore, BTCPay does not require your private key. You're just adding an xpub key from your wallet.")]),e._v(" "),r("ul",[r("li",[e._v("BTCPay does not know nor has access to your private key")]),e._v(" "),r("li",[e._v("You're uploading xpubkey from external Bitcoin wallet - Electrum for example")])]),e._v(" "),r("p",[e._v("There are two ways in which you can connect your BTCPay to your wallet:")]),e._v(" "),r("ol",[r("li",[e._v("Automatic with Ledger Nano")]),e._v(" "),r("li",[e._v("Manual with any wallet supporting xpub ("),r("a",{attrs:{href:"https://electrum.org/#home",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum"),r("OutboundLink")],1),e._v(" recommended)")])]),e._v(" "),r("p",[e._v("Input your xpub, then on the second screen, if you see a wrong address, input the first address of your wallet so that BTCPay can help you to configure correctly.")]),e._v(" "),r("p",[e._v("The video below explains how to connect your wallet to your BTCPay store.")]),e._v(" "),r("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/xX6LyQej0NQ/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=xX6LyQej0NQ","data-id":"xX6LyQej0NQ"}},[r("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/xX6LyQej0NQ?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("p",[e._v("If your BTCPay is self-hosted, you can "),r("a",{attrs:{href:"https://docs.btcpayserver.org/features/lightningnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("enable Lightning Network payments"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"step-3-creating-point-of-sale-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-creating-point-of-sale-app"}},[e._v("#")]),e._v(" Step 3 - Creating Point of Sale app")]),e._v(" "),r("p",[e._v("Once you created a store and connected a wallet to it, the fun part begins. In this step, we'll be creating a Point of Sale web-app.")]),e._v(" "),r("ol",[r("li",[e._v("Go to > Apps")]),e._v(" "),r("li",[e._v("Create a new App")]),e._v(" "),r("li",[e._v("Add the name of your app and associate it with a store you created earlier")]),e._v(" "),r("li",[e._v("Customize your PoS by adding your own items with prices, photos, and a description.")]),e._v(" "),r("li",[e._v('Click "Submit query".')]),e._v(" "),r("li",[e._v('Click "View" to preview your app (Your customers can access the PoS through that link).')])]),e._v(" "),r("p",[e._v("When creating a PoS app, it is essential that you "),r("strong",[e._v("enable cart option.")])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-1.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-2.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-3.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-4.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-5.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-6.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/BTCPay-PoS-App-7.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"step-4-adding-link-as-a-desktop-shortcut"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4-adding-link-as-a-desktop-shortcut"}},[e._v("#")]),e._v(" Step 4 - Adding link as a desktop shortcut")]),e._v(" "),r("p",[e._v("Now that the PoS is created, the last step is to add it to the home screen. This allows you to quickly access your app.")]),e._v(" "),r("p",[e._v("You can further "),r("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-modify-the-checkout-page",target:"_blank",rel:"noopener noreferrer"}},[e._v("customize the checkout"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://docs.btcpayserver.org/development/theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("change the theme of the PoS"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Add PoS to homescreen iOS:")])])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/PoS-iOS-add-to-homescreen.jpg",alt:""}})]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Add PoS to homescreen Android:")])])]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/PoS-Android-add-to-homescreen.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"dont-buy-bitcoin-earn-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dont-buy-bitcoin-earn-it"}},[e._v("#")]),e._v(" Don't buy Bitcoin - earn it")]),e._v(" "),r("p",[e._v("There you have it. I really hope that this quick tutorial enabled you to create a Point Of Sale app and accept Bitcoin in your store or online. Payments go directly to your wallet with no fees and if you self-host BTCPay, you're increasing "),r("a",{attrs:{href:"https://en.bitcoin.it/wiki/Privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacy"),r("OutboundLink")],1),e._v(" and security for yourself and customers by "),r("a",{attrs:{href:"https://en.bitcoin.it/wiki/Full_node",target:"_blank",rel:"noopener noreferrer"}},[e._v("running a full node"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If require more information, please refer to our extensive documentation. For questions, visit our "),r("a",{attrs:{href:"https://chat.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);