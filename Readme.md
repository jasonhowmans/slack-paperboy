# What am I?
A slack bot named after the video game [paperboy](https://en.wikipedia.org/wiki/Paperboy_(video_game)) from 1984. The idea is to consume email newsletters and spit out nice, digestible slack messages.

# Why?
Since there's been a shift away from RSS readers, newsletters have filled the space for discovering good content online. And slack bots are cool, so why not?

# Installation

## Setting up your environment
There are a some environment variables the application needs before it can run. The best way of doing this is to add a file at `./env/default.sh` and use the `npm start` method to boot the app. This will automatically run the `default.sh` file first, making the vars available to node.

A sample of a environment file:
```
GMAIL_API_KEY="<YOUR GMAIL API KEY HERE>";
```
