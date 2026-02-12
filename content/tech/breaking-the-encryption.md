---
date: "2016-07-07T16:11:58+05:30"
draft: false
title: "Breaking The Encryption"
thumbnail: "matrix.jpg"
categories: [tech]
tags: [ "encryption", "forensics", "truecrypt"]
---
I was presented with a hard drive encrypted with TrueCrypt. TrueCrypt is unbreakable. Was there anything I could do? _(tl;dr: yes)_
<!--more-->

In this case I was presented with a hard drive encrypted with TrueCrypt. One litigant claims the other guessed his password and changed it so he can’t decrypt it. The other litigant claims this is a lie and the first guy doesn’t want to reveal the financial records on that hard drive. The attorney on the case told me he had spoken with “an ex-FBI guy” who said to forget it – TrueCrypt is unbreakable. Was there anything I could do?

I told him that it is true that I knew of no known flaws in TrueCrypt’s implementation. There were a few things I could try and let run for several weeks but there were no guarantees – it could take millions of years to crack TrueCrypt with a plain brute-force search for the password. I was given the go-ahead and two weeks to see what I could do.

I didn’t have access to a memory dump from the computer when TrueCrypt was running, or I may have been able to grab the encryption key from RAM. I tried finding an encryption key in the hiberfil.sys file and pagefile but had no luck.

I set up three cracking stations. The first would run a brute-force search across every character combination. This method would eventually find any password, but could take millions of years to finish searching. I used the open source software oclHashCat to use a graphics card to speed up the attempts. I had to make a lot of compromises with my settings in order to finish in any reasonable time. Some quick back of the napkin math showed me there are 1,209,600 seconds in two weeks and I could run about 3 billion password attempts in those two weeks, so I chose to brute-force only letters and digits, no punctuation, up to 6 characters using TrueCrypt’s default encryption methods. That would finish just before the two weeks was up.

For the second cracking station I scanned the entire hard drive and built a dictionary of every single word that occurred in any file, or in any slack space or any deleted fragment. This should give me a good sample of words that the user used in his documents. The second station ran a dictionary based crack using this wordlist.

For the third cracking station I downloaded the biggest password lists I could find. These included huge dictionaries, word lists from every piece of literature at Project Gutenburg and millions of passwords taken from Internet hacks and breaches over the years.

Every day I would work with those three monitors behind me endlessly scrolling password guesses down the screen like scenes from The Matrix. At the end of two weeks I had to call the attorney and tell him, ‘Sorry – the TrueCrypt cracking has been running all this time with no luck.’ He said an important court date had been rescheduled and to let it run for another week. One day I came in and one of the stations had stopped scrolling. My heart sank, assuming the software had crashed and all that time was lost. I stared dumbly at the screen for a moment until I realized that in the most anticlimactic success output ever there was a single word displayed on the screen followed by a Linux prompt: ‘#’ waiting for my instructions on what to do next.

The password had been one of the ones cracked and released online. It was a long meaningless string of letters and numbers. The brute-force would never have found it within my lifetime. The user must have used the same password for some online account that had been breached. I picked up the phone to deliver the good news!

---
Comments from old blog:

> From: @shuutech https://shuutech.wordpress.com/ March 20, 2015 at 4:05 PM  
> From what I understand, the randomness is obtained by your mouse movement. That being the case, the default config is insecure because it isn’t random enough – you need to configure it to scroll for longer to increase the entropy. Is this true?

> From: Peter Theobald March 20, 2015 at 4:06 PM  
> The default configuration I talked about in my post refers to the default choice of encryption algorithms used by Truecrypt: AES and RIPEMD-160. The Truecrypt user can choose from a variety of other encryption algorithms with different (minor) benefits and drawbacks.
> The randomness you are asking about is the source of entropy that Truecrypt uses to initialize it’s random number generator. When creating a new encrypted volume Truecrypt asks you to wiggle your mouse around inside a window and uses the microscopic movements of your mouse as extra entropy to improve it’s random number generator. If a random number generator used only deterministic mathematical operations for randomness then theoretically it could make it possible to calculate the sequence of random numbers. By incorporating real-world uncertainty into the operation the random numbers are improved.
> In the situation described in my post, better randomness would not have stopped me from breaking the encryption as I matched the password with a password reused on another online account. For better security the user should not have reused the same password on multiple websites.
