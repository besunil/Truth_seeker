/* ============================================================
   YOUR ESSAYS LIVE HERE.
   To publish a new essay, add one object to the top of this
   array. That is the whole CMS. Fields:

     slug     — the permalink: essay.html?e=your-slug
     title    — the essay's title
     date     — "YYYY-MM-DD"
     tags     — lowercase topics; they become filter chips
     excerpt  — one honest sentence (shown under the title)
     body     — the essay, as HTML. Use <p>, <h2>, <blockquote>,
                <ul>, <hr>, and footnotes via
                <sup class="fn"><a href="#fn1" id="fnr1">1</a></sup>
                + a <section class="footnotes"> at the end.

   Reading time is computed automatically. Nothing else to touch:
   the index, search, filters, prev/next links and RSS order all
   update themselves.
   ============================================================ */

const ESSAYS = [
  {
    slug: "why-write",
    title: "Why Write?",
    date: "2026-06-28",
    tags: ["writing", "thinking"],
    excerpt: "You do not write to record what you think. You write to find out what you think.",
    body: `
<p>Most people treat writing as transcription: the thinking happens in the head, and the page is where the finished thoughts go to be stored. This is backwards. The page is where the thinking happens. Until you try to write an idea down, you do not have the idea — you have a vague warm feeling about the idea.</p>

<p>That warm feeling is deceptive. It feels like understanding because it skips all the hard parts. In your head, an argument can leap from premise to conclusion in a single graceful bound. On paper, it has to take the stairs. Every gap in the reasoning, every term you never bothered to define, every contradiction you politely ignored — the page exposes all of it, immediately and without mercy.</p>

<h2>Writing is editing yourself</h2>

<p>A thought in your head is a first draft that never gets revised. Writing forces the revision. You write a sentence, and the sentence is wrong, and now — because it sits there outside you, fixed and visible — you can see exactly how it is wrong. You cannot edit what you cannot see. This is why people who write regularly seem to think more clearly: they are not smarter, they are just further into the editing process.</p>

<p>There is a second, quieter benefit. Writing makes your ideas portable. A thought locked in your skull dies with your memory of it, usually within the week. A written thought can travel — across the room, across the world, across decades. It can be read by someone you will never meet, at a moment when they need exactly it. The essay you almost did not publish is the one a stranger will email you about in five years.</p>

<h2>The cost is the point</h2>

<p>Yes, writing is slow. Yes, most of what you write will be bad, and some of it will be embarrassing. But that slowness is not a tax on thinking — it is the thinking. The resistance you feel when a sentence refuses to come is the sensation of your mind actually working on the problem, rather than gesturing at it.</p>

<blockquote><p>How do I know what I think until I see what I say? — E. M. Forster</p></blockquote>

<p>So write. Not because you have something to say — you will discover that along the way — but because writing is the most reliable machine ever built for producing things worth saying. Publish them. Let strangers find them. The internet is full of noise, but noise has never once disqualified a clear voice from being heard. Clarity is rare, and rare things travel.</p>

<p>Start before you feel ready. You will never feel ready. That feeling, too, is the writing working.</p>
`
  },
  {
    slug: "how-to-read",
    title: "How to Read",
    date: "2026-04-11",
    tags: ["reading", "thinking"],
    excerpt: "Read what you love until you love to read. Then read the old books, slowly, twice.",
    body: `
<p>Everyone wants to read more. Almost nobody asks the prior question: read more of what? The average book is not worth finishing, and the average great book is worth reading three times. Reading is not a volume game. It is a filtration game.</p>

<h2>Quit more books</h2>

<p>The most valuable reading skill is the willingness to stop. We carry a schoolroom superstition that abandoning a book is a moral failure. It is not. A book is a tool, and most tools are wrong for the job you currently have. Life is short and the unread pile is long; every hour you spend grinding through a book you do not like is an hour stolen from the book that would have changed you.</p>

<p>My rule: give a book fifty honest pages. If it has not earned the fifty-first, put it down without guilt. You are not rejecting the book forever — some books are simply waiting for the version of you that needs them. <em>Meditations</em> bored me at twenty and undid me at thirty. The book did not change. Books are patient.</p>

<h2>Prefer the old ones</h2>

<p>A book that has been in print for a hundred years has survived the harshest filter in the world: the attention of strangers who owed it nothing. New books may be great; old books have <em>proven</em> it. This does not mean never reading new work — it means letting time do your quality control whenever possible. If everyone is talking about a book this month, wait. If they are still talking about it in ten years, it deserved you.</p>

<h2>Reread the best</h2>

<p>Here is the open secret: reading a great book once is barely reading it at all. The first pass gives you the plot of the argument. The second gives you the structure — you start seeing why the author put things where they did. The third gives you the mind of the author, which was the point all along. Ten new books will entertain you. One great book read ten times will rebuild you.</p>

<blockquote><p>Read what you love until you love to read. After that, the habit runs itself.</p></blockquote>

<p>And do not hoard the good parts. Copy out the sentences that stop you. Write in the margins. Argue with the author. A book you have truly read looks like a crime scene — underlined, dog-eared, spine broken. The pristine shelf of untouched hardcovers is not a library. It is a museum of intentions.</p>

<p>Read widely, finish rarely, reread obsessively. That is the whole method.</p>
`
  },
  {
    slug: "compounding",
    title: "Compounding",
    date: "2025-11-02",
    tags: ["life", "work"],
    excerpt: "The most powerful force in a human life is getting one percent better at something you can sustain.",
    body: `
<p>Compounding is usually discussed as a fact about money, but it is really a fact about the universe: anything that grows in proportion to itself will eventually become unrecognizable. Knowledge compounds. Skill compounds. Reputation compounds. Trust compounds. So do their opposites.</p>

<h2>The flat part of the curve</h2>

<p>The cruel feature of compounding is that the early returns are invisible. Write every day for a year and almost nothing seems to happen. Save a little each month and the balance barely moves. This is the flat part of the exponential curve, and it is where nearly everyone quits — not because they failed, but because they could not yet see that they were succeeding.</p>

<p>Everything good in my life traces back to something I kept doing during a long stretch when it appeared to be pointless. The practice was the point; the results arrived later, all at once, looking to outsiders like an overnight surprise. There is no overnight. There is only the curve, doing its quiet arithmetic while you are not watching.</p>

<h2>Choose games that compound</h2>

<p>Not all effort compounds. Answering email does not compound; tomorrow brings more email. But an essay compounds — it keeps working for you while you sleep, being read in places you will never go. Code compounds. A good name compounds. A deep friendship, tended for decades, compounds into something you could never buy at any price.</p>

<p>The practical question, then, is not "how hard am I working?" but "does what I am working on accumulate?" One hour spent on an asset that keeps paying is worth ten spent on work that evaporates. This is the whole secret of leverage, and it requires no permission from anyone.</p>

<h2>Play long games with long-game people</h2>

<p>Compounding also explains the people part. Every interaction with a person is a small deposit or withdrawal. Over years, the deposits become trust, and trust becomes the ability to attempt things that are impossible alone — companies, movements, families. Pick people you could work with for twenty years, then work with them for twenty years. The returns on the twentieth year dwarf everything that came before.</p>

<p>Start small. Start now. Do not interrupt the curve to admire it.</p>
`
  },
  {
    slug: "taste",
    title: "Taste",
    date: "2025-06-19",
    tags: ["craft", "thinking"],
    excerpt: "Taste is not a gift. It is a debt you accrue by caring more than is reasonable, and it is paid off in work.",
    body: `
<p>Every beginner in every craft discovers the same humiliating fact: they can tell their work is bad long before they can make it good. Your taste develops first, sprinting ahead of your ability, and the gap between the two is the source of nearly all creative misery. It is also the source of all creative progress.</p>

<h2>The gap is the guide</h2>

<p>That gap — between what you can recognize as excellent and what you can currently produce — is not a defect. It is a compass. The discomfort you feel looking at your own work is your taste doing its job, pointing at the precise place where the work falls short. People who feel this acutely and keep going become good. People who resolve the discomfort by lowering their standards stay beginners forever, just happier ones.</p>

<p>So the embarrassing phase is not optional and cannot be skipped. You close the gap the only way anyone ever has: volume. Finish the bad essay. Ship the clumsy drawing. Record the flat song. Each finished piece teaches your hands something your taste already knew, and slowly, over years, ability catches up to judgment.</p>

<h2>How taste is built</h2>

<p>Taste is not innate. It is acquired, and the method is unglamorous: deliberate exposure to the best. Read the masters and not the middling. Study why the great sentence works — its rhythm, its cuts, what it refuses to say. When something moves you, do not just applaud it; take it apart. What exactly did the maker do? Taste is a database of solved problems, and you build it one close observation at a time.</p>

<p>Notice too that taste is specific. The critic's general pronouncements are cheap; the gold is in the small, precise reaction — <em>this</em> word is wrong, <em>this</em> transition drags, <em>this</em> detail should be cut. Train yourself to locate the feeling. "Something is off" is the beginning of taste. "The third paragraph repeats the first" is the end of it.</p>

<h2>Why it matters more now</h2>

<p>Making things has never been cheaper, which means the world is filling with adequate work. When anyone can produce the average, the scarce skill is knowing the difference between average and excellent — and refusing to ship the former. Judgment is the last moat. Guard your gap, feed your taste better material than your peers consume, and finish things.</p>

<blockquote><p>Your taste is why your work disappoints you. It is also why, eventually, it will not.</p></blockquote>
`
  },
  {
    slug: "the-busyness-trap",
    title: "The Busyness Trap",
    date: "2024-09-07",
    tags: ["life", "work"],
    excerpt: "Busy is what you are when you have surrendered your schedule to everyone but yourself.",
    body: `
<p>Ask people how they are and the most common answer is no longer "good" or "tired." It is "busy." Said with a sigh, but also — notice — with a strange little note of pride. Busyness has become our proof of importance. A full calendar is the modern status symbol, and like most status symbols, it is purchased at a ruinous price.</p>

<h2>Busy is a decision</h2>

<p>Here is the uncomfortable truth: busyness is not something that happens to you. It is something you choose, one unexamined yes at a time. Every commitment on your calendar was agreed to by a person who controls your calendar — you. When we say "I don't have time," what we mean is "I have decided this is not a priority." Usually that is fine. But say it honestly a few times and you will start making different decisions.</p>

<p>Why do we choose it? Because busyness is an excellent hiding place. Motion feels like progress. A day packed with meetings and messages produces the sensation of effort without the risk of attempting anything that could actually fail. Deep work — the essay, the product, the hard conversation — offers no such cover. You can be busy for a decade and produce nothing. Many people are, and do.</p>

<h2>The cost is not time</h2>

<p>The real price of busyness is not the hours. It is the erosion of the two things hours cannot buy back: attention and slack. Attention first — a mind that is always reacting never gets to reflect, and reflection is where every original thought you will ever have is waiting. Then slack — the empty space in a life where luck, curiosity, and other people can enter. Every interesting opportunity I have ever had arrived through a door that only existed because I had unscheduled time for it to knock on.</p>

<p>History agrees. Darwin worked a few focused hours a day and walked the rest. The mathematicians, the novelists, the scientists — the pattern is embarrassingly consistent: a small number of deep hours, protected ferociously, surrounded by a great deal of apparent idleness. The idleness was the work.</p>

<h2>A modest practice</h2>

<p>The fix is not a productivity system. It is a posture. Default to no. Hold one block of each day as sacred and unbookable — for thinking, making, or walking. Measure your weeks not by how full they were but by what exists at the end of them that did not exist before. An essay, a finished thing, a relationship deepened. Output, not activity.</p>

<p>Busy is easy. Empty the calendar and see how much harder the important questions get — and how much better the answers.</p>
`
  },
  {
    slug: "notes-on-speed",
    title: "Notes on Speed",
    date: "2024-03-15",
    tags: ["work", "craft"],
    excerpt: "Fast is not frantic. The quickest people I know are serene — they just never wait for permission to begin.",
    body: `
<p>The most productive people I know do not look busy. They look calm, almost lazy. Yet their output is five times the median. Watching them work corrected a deep error in my understanding: speed is not about moving faster. It is about removing the parts where nothing moves at all.</p>

<h2>Speed is mostly decision latency</h2>

<p>Between the birth of an idea and the start of work, most people install a queue: research, planning, asking around, waiting for the right week. Weeks pass; the idea cools; the queue wins. Fast people have deleted the queue. They act on ideas while the ideas are still warm — badly, partially, but immediately. A rough draft on day one beats a perfect plan on day ninety, because the draft can be improved and the plan cannot be anything but postponed.</p>

<p>This is not recklessness. It is an understanding of information: the fastest way to learn what an idea needs is to build the smallest version of it and listen to what it tells you. Reality answers questions that no amount of thinking can.</p>

<h2>Slow is smooth, smooth is fast</h2>

<p>The paradox: the things that make you fast look slow. Doing it once instead of five times. Writing the message carefully so it needs no follow-up. Sleeping enough to think clearly. Sharpening the axe. Frantic people redo work; calm people finish it. If you watch a true master — a chef, a surgeon, a great engineer — the striking thing is the absence of hurry. Nothing is rushed because nothing has been left in a state that requires rushing.</p>

<h2>The compounding of quick</h2>

<p>Speed compounds the way everything else does. Finish a project in a month instead of a year and you do not merely save eleven months — you get eleven more attempts. Twelve swings a year at the same problem will beat one careful swing, almost every time, because each swing teaches you something the planning phase never could. Iteration is intelligence on a schedule.</p>

<p>A practical test I use: when I notice I have thought about doing something more than twice, I do it within the hour, at whatever quality is currently available. The email, the outline, the phone call. The two-minute version sent today outperforms the two-hour version that lives forever in my head.</p>

<p>Move when the idea is warm. Finish, then improve. Let the hurry go — you will not miss it, and neither will the work.</p>
`
  }
];

/* Oldest → newest is fine here; the site sorts by date automatically. */
