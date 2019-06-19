---
title: Bitcoin Storage Best Practices
date: '2019-06-19'
thumbnail: hacker.jpg
tags:
  - bitcoin
  - crypto
  - security
draft: false
---

![hacker](/images/hacker.jpg#floatright "I'm in your junk drawer stealing your Bitcoins...") Imagine keeping your life savings in cash in your kitchen junk drawer. This is effectively how some people are storing their Bitcoins and cryptocurrency from a security perspective. Bitcoin is a 'bearer instrument' like cash, meaning if you hold it you own it. Anyone who gets a peek at your private keys or recovery seed could take everything with practically no recourse.

I find most of the security advice out there is too vague, full of unhelpful comments that list all the things you should never do without explaining a practical guideline for what you *should* do. Here is an overview of what I'd consider a safe but practical method for storing your Bitcoins as of this writing in 2019.

<!-- more -->

If it's too late for you and you've lost your Bitcoin wallet or your private keys, contact me to help you recover it! I've helped many people who thought all hope was lost.

The most secure operational plan would be so burdensome nobody would actually follow it or it would be so expensive it wouldn't be worth it for anyone but the wealthiest or an institution. I have to consider what is practical, reasonable cost and defends against the three threats we face holding Bitcoins.

My recommendation is to keep your Bitcoins in two forms:

1. On a hardware Bitcoin wallet like a Ledger or Trezor protected by a PIN code for daily use. You plug it into your USB port when you want to trade. Cost: $40-$150
2. A backup Recovery Seed written on paper or punched on a steel plate kept in 2 or 3 secure places and protected by a passphrase for long term disaster recovery. You will create this once when you first set up your wallet. You will only use this to recover a lost wallet. Cost: $5 (paper) - $50 (steel plates)

The Threats: (1) Getting robbed (hacked), (2) Losing your keys, (3) Passing on your coins if you die

Threat 1: Getting robbed (hacked)

[![Ledger Nano S](/images/ledger nano.jpg#floatright "Ledger Nano S")](/images/ledger nano-lg.jpg)Our plan has to protect against a hacker or thief getting hold of our private keys. Our wallet software needs to be encrypted with a strong password so even if a hacker gets a copy of the wallet file he can't get in. A strong password is at least 12 characters randomly selected by a password manager. Anything that your brain could ever think up a hacker has already listed in their multi-billion-entry password cracking database. Even with an encrypted wallet, our Bitcoin is vulnerable when we are conducting a transaction. The best solution here is to use a hardware wallet like a Trezor or Ledger. The hardware wallet handles all of the private keys and transaction signing internally in secret. Even a virus or hacker cannot see the private keys because they are never seen by your computer. You should set up a PIN code to use the device so even if you drop the device in a parking lot or someone finds your device and takes it in the so-called "Evil Maid" attack it will do them no good. After several attempts to crack your PIN the device erases itself.

Why not just leave the Bitcoins on an exchange? It has been shown over and over that [exchanges get hacked](https://www.google.com/search?q=exchanges+hacked) or go out of business. Exchanges that have been hacked include Mt. Gox, Poloniex, BitPay, Cryptsy, Mintpal, Bitstamp, Bitfinex, Youbit, Coincheck, Bitgrail, Coinsecure, Bithumb, Binance, Cryptopia and more. It is safer to hold the Bitcoins in your own wallet and transfer the coins to an exchange only for trading.

Threat 2: Losing your keys

Hard drives crash, human memory falters, dementia, fires and floods... there seems to be an endless variety of ways we can lose our wallets or forget our passwords. Unless we want to end up like [the man digging through a UK landfill looking for his old computer with $100 million in Bitcoin](https://www.newsweek.com/man-accidentally-threw-bitcoin-worth-108m-trash-says-theres-no-point-crying-726807), we need a way to backup our Bitcoin wallets without introducing a new way for thieves and hackers to get at our Bitcoins. Hardware and software wallets can give you a "Recovery Seed", [![Recovery Seed](/images/recovery seed.jpg#floatright "Recovery Seed 24 words")](/images/recovery seed-lg.jpg) which is a list of 12 or 24 words which can be used later with any compatible device or software to recover your wallet and find all of your Bitcoin. To protect against fire and flood, we should keep a copy of this Recovery Seed in 2 or 3 secure places like a safe and a bank safety deposit box. But anyone who sees the Recovery Seed can take all the Bitcoins! There is no place secure enough that I would leave the keys to everything against the hope that over decades no bank employee looks in the box and no repairman in my house every finds a way in to my safe. The solution is we are allowed to add a passphrase to the Recovery Seed. The passphrase, also sometimes called 'extra word, 25th word, or extension word' is not written down with the Recovery Seed and without it the Recovery Seed will not work to recover our Bitcoin wallet.

[![Steel plate](/images/steel plate.jpg#floatright "Recovery Seed eched onto steel plate")](/images/steel plate-lg.jpg) Here is an important point: The Recovery Seed can be used to rebuild the entire wallet so it can never be typed in to a computer, phone or any digital device that could be hacked. Not ever. Don't even say it in front of your Alexa or iPhone. When the wallet is first created the Recovery Seed will be shown to you once and you will write it down on paper, not in your password manager, not in a file, not even on a thumbdrive. For long term storage there are many options to keep the Recovery Seed in a form that will endure over time. The most popular ones are letters punched or etched onto steel plates. Personally since I don't have much Bitcoin to protect I am using archival pencil on archival acid-free paper sealed with archival tape and stored in three different locations. I also included this warning with the Recovery Seed:

>IMPORTANT! SECRET! DO NOT THROW OUT!
>These 24 words are the RECOVERY SEED to recover a wallet with valuable BITCOINS
>Be careful access to this RECOVERY SEED could lead to someone STEALING all the BITCOINS
>Follow the instructions in my will to recover the Bitcoins
>If the sealed tape has been tampered with transfer the Bitcoins to a new wallet immediately

I think it would be acceptable to store your hardware wallet PIN and your Recovery Seed *passphrase* (not the Seed itself) in your password manager. That way you only have one master password to remember and you never have everything needed to access your Bitcoin in one place. Personally I don't keep my my Recovery Seed passphrase in a password manager, I told it to several trusted loved ones who do not have access to my backed up Recovery Seeds but can be counted on to remember the passphrase in case I am hurt or have memory problems in the future.

Threat 3: Dying

As unpleasant as it is to contemplate, sooner or later we all die. Right now if you got hit by a meteor, would your family have any idea how to gain access to your Bitcoin? If your family is like most they are not very technical and wouldn't be able to figure out a complicated security scheme. You should tell your family that you have Bitcoins, and keep an occasionally updated inventory of how many coins you own with your important papers or with your will. You should also include detailed instructions on how to access the Bitcoins, without any passphrases, passwords or PINs in the instructions. The instructions would explain that you have Bitcoins, where the Recovery Seed is kept (safe, bank, parents house etc), and explain that they will need to set up Bitcoin wallet software or hardware and enter the Recovery Seed and the passphrase that you have either kept in your password manager or told them directly. The LastPass password manager let's you assign an "Emergency Contact" that can request access to your passwords. You'll have 24 hours (or any period you set) to reject the request if you're still alive. Unless they are technical, it is probably best to recommend they sell the coins and explain how to transfer the coins to an exchange and sell them.

Note: I am aware that this scheme doesn't work if you don't trust your own family. In that case perhaps use a sealed letter with the passphrase kept with an attorney to be given to your family if you die. I don't know.

Now after you've set this up, TEST IT. Follow the instructions as if you are incapacitated and make sure it works!

(Everywhere I talked about Bitcoin applies equally to other cryptocurrencies such as Ethereum, Litecoin and others)

Instructions to go with your will or important papers; modify this to fit your circumstances:
>** IMPORTANT. I HAVE VALUABLE BITCOINS. THESE ARE THE INSTRUCTIONS TO RECOVER THOSE BITCOINS **
>As of 2019 I have 0.25 Bitcoins.
>To recover these Bitcoins follow these instructions. If someone technical helps you never show them the PIN or RECOVERY SEED or passphrase.
>1. If you have my Ledger Nano S hardware wallet and you know my PIN code, plug the Ledger Nano S into your computer and run the wallet software. Enter the PIN code and the SEED passphrase when asked. You should see the balance of Bitcoins. Unless you really know what you're doing here I recommend you open an account on Coinbase.com, transfer all of the Bitcoin to Coinbase and sell it for dollars.
>2. If you don't have my Ledger Nano S hardware wallet or you don't know my PIN code, purchase a Ledger Nano S or compatible hardware wallet such as another model Ledger or a Trezor. Find the RECOVERY SEED in the safe or bank safety deposit box that we have previously discussed. Carefully cut away the tape sealing the RECOVERY SEED at the edges so you can open and view the RECOVERY SEED. On your new hardware wallet, enter the RECOVERY SEED and the passphrase that we have previously discussed. It is important that you remember this passphrase, without it there is no way to recovery the Bitcoin. That is why I have told the RECOVERY SEED only to only very few very trusted people in the family and never written it down. You should see the balance of Bitcoins. Unless you really know what you're doing here I recommend you open an account on Coinbase.com, transfer all of the Bitcoin to Coinbase and sell it for dollars.
