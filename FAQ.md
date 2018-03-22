# Frequently Asked Questions
(that we have answers to)

## Tell me the story of Phaser v3 and Typescript

_Last Updated: 2018-03-13_

[phaser#3324][ts-ticket] is the official Phaser tracking ticket. There are two
community-driven efforts to get typescript done before Rich. They are mentioned
in threads [#1][ts-forum-link] and [#2][ts-forum-link2] on the HTML5 game dev
forums. The first thread links to [a github project][ts-gh] and the second
includes a `.d.ts` download directly.


[ts-ticket]: https://github.com/photonstorm/phaser/issues/3224
[ts-forum-link]: http://www.html5gamedevs.com/topic/35688-phaser-3-jsdoc-generated-typescript-definitions/
[ts-forum-link2]: http://www.html5gamedevs.com/topic/35740-wip-phaser-3-typescript-definitions/
[ts-gh]: https://github.com/troyedwardsjr/phaser3-tsd

## Is there a guide to porting my v2/CE project to v3?

_Last Updated: 2018-03-14_

Not yet.

The API is similiar enough that you will feel comfortable once you've figured
out where things live but there is no mechanical solution to making a CE
project run in v3. In that way it's definitely possible to make the jump for
an existing project.

That said, enough essential things are different (no `ScaleManager` yet,
`Scene` works differently than `State`, etc.) that it takes a little thinking
and the work to describe how all the old CE concepts map into v3 is planned
but currently incomplete.

## Should I user Phaser CE or v3?

_Last Updated: 2018-02-10 / 2018-03-13_

tl;dr: One of our members made a video talking about deciding whether or not
to use v3: [go watch it][wild-v3] (thanks Wild)!

That video was recorded Feb 10th. Since then we (the community at large) have
leveled up several times about how well we understand and how much we've
experimented with v3. Tutorials are beginning to emerge and several patch
releases have appeared fixing bugs and adding previosly missing features.
Broadly speaking getting into v3 is much easier than it was but still a bit
on the bleeding edge. If you're adventurous and willing to dig v3 is a good
place to be.

If you need something stable and battle worn that you can take into production,
you are new to Javascript/development, or just don't want to fight your tools
on a side project then you probably still want to stick with CE for the time
being.

[wild-v3]: https://www.youtube.com/watch?v=St_tPsG0pX0
