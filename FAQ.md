# Frequently Asked Questions
(that we have answers to)

Also note that [@samme][gh-samme] maintains [another FAQ][samme-faq] that you can
check out!

[gh-samme]: https://github.com/samme
[samme-faq]: https://github.com/samme/phaser3-faq/wiki

## I'm new to Phaser, what should I do?

_Last Updated: 2018-05-17_

The key to learning game dev / Phaser is to _just build stuff_, it doesn't
need to be good or even complete. The more you program the more you know
and the easier it is to make what you imagine real.

That said, if having a list of things that help you get started is useful
we've compiled a bunch of introductory guides. They're ordered based on how
much you're expected to already know and we're always happy to take
suggestions about new stuff that should be added to the list.

1. [Getting Started][get-started]&mdash;This introduces you to the basics of how to
   run your game and gives provides a super simple game you can create.
2. [Making your first game][first-game]&mdash;Once you're comfortable with running
   a server and editing code work through this. It introduces some basic systems
   involved in a Phaser game.
3. [How to create a game][how-to-create]&mdash;This is a similar slice of information
   as _Making your first game_ but covers enough different information that it's
   worth reading through as well.
4. [How to structure your code][structure]&mdash;This isn't about how to program
   exactly but talks a little bit about how to organize your project so that it's
   easy to keep building on what you've got. Optional reading but I feel it's an
   important bit of information.
5. [Ask for help][community-links]&mdash;Get involved in the community! It's dangerous
   to go alone, take a friend, and don't be afraid to ask for help.
6. [How scenes work][scenes]&mdash;Goes into more detail about how scenes can work
   and can fit into your game.

_Disclaimer:_ the author of this list wrote the structure and scenes posts

The [phaser examples page][labs] is a rich source of code samples demonstrating
various aspects of the Phaser framework.

The [phaser API docs][apidocs] is an ever-improving source of information and great
for self-directed exploration.

If you'd like to help this list grow we'd like to add:

- some guides about javascript basics etc
- some simple sample projects with documentation

[get-started]: https://phaser.io/tutorials/getting-started-phaser3/index
[first-game]: https://phaser.io/tutorials/making-your-first-phaser-3-game
[how-to-create]: https://gamedevacademy.org/phaser-3-tutorial/
[structure]: https://github.com/jdotrjs/phaser-guides/blob/master/Basics/Part1.md
[scenes]: https://github.com/jdotrjs/phaser-guides/blob/master/Basics/Part3.md
[community-links]: https://phaser.io/community
[labs]: https://labs.phaser.io
[apidocs]: https://photonstorm.github.io/phaser3-docs/

## Where is the documentation and/or examples?

_Last Updated: 2018-09-16_

The [phaser examples page][labs] is a rich source of code samples demonstrating
various aspects of the Phaser framework.

The [phaser API docs][apidocs] is an ever-improving source of information and great
for self-directed exploration.

## How do I get started with multiplayer games?

_Work in progress, last updated: 2018-06-20_

Right now this is just a collection of links that potentially may be useful:

- (A great free course from Udacity / Google) https://eu.udacity.com/course/html5-game-development--cs255
- http://buildnewgames.com/real-time-multiplayer/
- http://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html
- (for phaser v2 but the theory is there) http://www.dynetisgames.com/2017/03/06/how-to-make-a-multiplayer-online-game-with-phaser-socket-io-and-node-js/
- (written in Haxe, but the theory is there) http://antriel.com/post/online-platformer-1/
- (non-code theory) https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/
- (probably not where you want to start but quality info) https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization

## Is there a ScaleManager in v3?

_Last Updated: 2018-08-13_

Not yet, but one is in the works and planned for Phaser 3.15! It won't be as complex as
the one in Phaser CE, but should do a good job in helping you scale your game to fill
the entire screen.

In the mean time it's not too bad to roll your own solution. We even have some examples
- [Example page][danny-ex] from DannyT includes functional examples built using
  some of the principles discussed in the following links
- [this gist][sm-gist] from Str1ngS bundles some scaling functionality into a class and
  demonstratse how to hook it into your game; the `orientation` and `content` references
  are HTML elements in yoru page that you cane use to implement "wrong orientation" overlays
  as described in [this post][sm-overlays]
- [this thread][sm-thread] includes a (Haxe) code sample from community member Antriel
- [a codepen][sm-cpen] sample linked from Samme includes another promising solution
- [Scaling without framework support][sm-efer] Emanuele works through the principles
  of scaling your game regardless of framework support

[danny-ex]: http://phaser3.danny-t.co.uk/scaling/
[sm-gist]: https://gist.github.com/AleBles/697d703e89eecae5a350c1453a32861e
[sm-thread]: http://www.html5gamedevs.com/topic/33206-scalemanagershow_all/
[sm-cpen]: https://codepen.io/samme/pen/paOjMO
[sm-overlays]: https://www.creativebloq.com/web-design/master-screen-orientation-html5-101517371
[sm-efer]: http://www.emanueleferonato.com/2018/02/16/how-to-scale-your-html5-games-if-your-framework-does-not-feature-a-scale-manager-or-if-you-do-not-use-any-framework/

## Tell me the story of Phaser v3 and Typescript

_Last Updated: 2018-05-08_

Typescript defs are now available at [photonstorm/phaser3-docs][ts-defs]. That file
is the one you want to use. Previously, [phaser#3224][ts-ticket] was the official
Phaser tracking ticket.

[ts-defs]: https://github.com/photonstorm/phaser3-docs/tree/master/typescript
[ts-ticket]: https://github.com/photonstorm/phaser/issues/3224

## Is there a guide to porting my v2/CE project to v3?

_Last Updated: 2018-03-14_

Not yet. There is a partial guide in [Newsletter issue 116][iss116] in the
section named _Moving from Phaser 2 to Phaser 3 (Part 1)_. Part 2 is in
[issue 118][iss118].

[iss116]: https://madmimi.com/p/a022cb
[iss118]: https://madmimi.com/p/ff68db

The API is similar enough that you will feel comfortable once you've figured
out where things live but there is no mechanical solution to making a CE
project run in v3. In that way it's definitely possible to make the jump for
an existing project.

That said, enough essential things are different (no `ScaleManager` yet,
`Scene` works differently than `State`, etc.) that it takes a little thinking. 
The work to describe how all the old CE concepts map into v3 is planned
but currently incomplete.

## Should I use Phaser CE or v3?

_Last Updated: 2018-02-10 / 2018-10-28_

tl;dr: One of our members made a video talking about deciding whether or not
to use v3: [go watch it][wild-v3] (thanks Wild)! For production stuff, Phaser CE
is still a good choice, but if you're learning Phaser and/or feeling adventurous
then v3 is a pretty good bet, and it's becoming better every day.

That video was recorded Feb 10th. Since then we (the community at large) have
leveled up several times about how well we understand and how much we've
experimented with v3. Tutorials are beginning to emerge and several patch
releases have appeared fixing bugs and adding previosly missing features.
Broadly speaking getting into V3 is much easier than it was but still seeing
quite a bit of development. If you're adventurous and willing to dig v3 is a
good place to be. The API is cleaner than CE and it's definitely the future of
Phaser so learning it to start with is probably a good move.

If you need something exceptionally stable and battle worn that you can take
into production _right now_ then you probably still want to stick with CE for
the time being. By the numbers most deployed Phaser games are CE which means
more time has been spent understanding it's edge cases. You're not going to
see as many bugs or API changes than working off V3 but you're also not going
to see any improvements.

[wild-v3]: https://www.youtube.com/watch?v=St_tPsG0pX0

## My game behaves inconsistent/stops running while in the background
_Last Updated: 2018-10-26_

Modern browsers place several restrictions on websites that run in the background. This usually means background tabs, but can also influence windows that are unfocused or partly hidden by another window. When in the background, requestAnimationFrame is not triggered, and it may be throttled when the website is unfocused. This means that Phaser's update loop won't run. Additionally, timers in background tabs may run less frequently than they normally would. Chrome only executes timers once per second, while Firefox has similar policies. The timers may be throttled even more in some cases. Playing audio or using websockets are usually an exception to this additional throttling.

More details:
- [Background tabs in chrome][chr-back-tabs]
- [MDN page about background page policies][mdn-back-policy]

[chr-back-tabs]: https://developers.google.com/web/updates/2017/03/background_tabs
[mdn-back-policy]: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#Policies_in_place_to_aid_background_page_performance

## How do I post code?
_Last Updated: 2018-12-06_

If you have a small bit of code (less than about 15-20 lines) to share the easiest approach
is using the formatting support built into Discord. This means using ` ```javascript ` on
a line by itself then entering your code:

![code format sample](https://i.imgur.com/OzQ4KtS.png)

If you have a longer or multi-file segment of code you should create a new
[gist](https://gist.github.com/) or [codepen](https://codepen.io/).
