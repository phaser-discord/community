# Frequently Asked Questions
(that we have answers to)

## Is there a ScaleManager in v3?

_Last Updated: 2018-05-08_

Nope! But luckily for some common cases it's not too bad to roll your own solution.
Check [this thread][sm-thread] for a code sample from community member Antriel!
Additionally, Samme, provides [this codepen][sm-cpen] sample that shows some
promising resize behavior.

[sm-thread]: http://www.html5gamedevs.com/topic/33206-scalemanagershow_all/
[sm-cpen]: https://codepen.io/samme/pen/paOjMO

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

The API is similiar enough that you will feel comfortable once you've figured
out where things live but there is no mechanical solution to making a CE
project run in v3. In that way it's definitely possible to make the jump for
an existing project.

That said, enough essential things are different (no `ScaleManager` yet,
`Scene` works differently than `State`, etc.) that it takes a little thinking. 
The work to describe how all the old CE concepts map into v3 is planned
but currently incomplete.

## Should I user Phaser CE or v3?

_Last Updated: 2018-02-10 / 2018-05-08_

tl;dr: One of our members made a video talking about deciding whether or not
to use v3: [go watch it][wild-v3] (thanks Wild)! For production stuff it's
probably not ready but if you're learning Phaser and/or adventurous then v3
is a pretty okay bet.

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
