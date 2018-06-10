webpackJsonp([56932394960959],{526:function(e,t){e.exports={pathContext:{group:[{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-04-01-dwarf-fortress-systems.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Cats, taverns and cleaning systems",date:"2016-04-01",readableDate:"01 April 2016",redirectFrom:null,excerpt:null,excerptQuote:{name:"Tarn Adams",quote:"It’s funny how I have popular bugs, right? You shouldn’t have popular bugs."}},fields:{path:"/2016/04/dwarf-fortress-systems/",slug:"/2016/04/dwarf-fortress-systems/"},html:"<p><a href=\"http://www.pcgamer.com/dwarf-fortress-creator-on-how-hes-42-towards-simulating-existence/\">Tarn Adams</a>:</p>\n<blockquote>\n<p>It’s funny how I have popular bugs, right? You shouldn’t have popular bugs. […] I added taverns to fortress mode, so the dwarves will go to a proper establishment, get mugs, and make orders, and they’ll drink in the mug. And, you know, things happen, mugs get spilled, there’s some alcohol on the ground.</p>\n<p>Now, the cats would walk into the taverns, right, and because of the old blood footprint code from, like, eight years ago or something, they would get alcohol on their feet. It was originally so people could pad blood around, but now any liquid, right, so they get alcohol on their feet. And then I wanted to add cleaning stuff so when people were bathing, or I even made eyelids work for no reason, because I do random things sometimes. So cats will lick and clean themselves, and on a lark, when I made them clean themselves I’m like, ‘Well, it’s a cat. When you do lick cleaning, you actually ingest the thing that you’re cleaning off, right? They make hairballs, so they must swallow something, right?' And so the cats, when they cleaned the alcohol off their feet, they all got drunk. Because they were drinking.</p>\n<p>But the numbers were off on that. I had never thought about, you know, activating inebriation syndromes back when I was adding the cleaning stuff. I was just like, ‘Well, they ingest it and they get a full dose,’ but a full dose is a whole mug of alcohol for a cat-sized creature, and it does all the blood alcohol size-based calculations, so the cats would get sick and vomit all over the tavern.</p>\n<p>The original bug report is, ‘There’s cat vomit all over my tavern, and there’s a few dead cats,’ or whatever, and they’re like, ‘Why? This is broken.’</p>\n<p>People helped me with this. We were all looking and figuring out, ‘What the heck is going on here?’, and that was the chain of events. It’s like doing the detective work to figure out that entire chain of events is what happened. You can see how adding just a tavern that gave the opportunity for spilling alcohol, which was really uncommon before, now all the spilled alcohol starts to, form in one location where something could start to happen. You activate bugs and little parts of code from eight, six years ago where you just didn’t balance the numbers because it didn’t matter. […]</p>\n<p><strong>PC Gamer: So the cats’ inebriation system was just based on any organism would have the potential to get drunk.</strong></p>\n<p>Yeah, right now it’s any creature that has blood, and that includes, like, an octopus. I don’t know if an octopus can get drunk or not.</p>\n</blockquote>\n<p>The way the different systems are all interacting together is so fascinating. Especially when the outcome becomes something like this. :)</p>\n<hr>\n<blockquote>\n<p>I don’t even use version control. If you don’t know what that is then you’re not gonna yell at me. If you even know what version control is you’re gonna be like, ‘You don’t use version control? You don’t use source control? What is wrong with you? How can you even work?’</p>\n</blockquote>\n<p>I'm still baffled to know that many game developers (or other developers) work without version control. It seems so dangerous, but… well.</p>"}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-03-19-delight.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Delight",date:"2016-03-19",readableDate:"19 March 2016",redirectFrom:null,excerpt:null,excerptQuote:{name:"Craig Mod",quote:"And what is delight? For me, delight is born from a tool’s intuitiveness. Things just working without much thought or fiddling."}},fields:{path:"/2016/03/delight/",slug:"/2016/03/delight/"},html:"<p><a href=\"http://craigmod.com/sputnik/leica_q/\">Craig Mod in his beautiful essay about the Leica Q</a>:</p>\n<blockquote>\n<p>And what <em>is</em> delight? For me, delight is born from a tool’s intuitiveness. Things just working without much thought or fiddling. Delight is a simple menu system you almost never have to use. Delight is a well-balanced weight on the shoulder, in the hand. Delight is the just-right tension on the aperture ring between stops. Delight is a single battery lasting all day. Delight is being able to knock out a 10,000 iso image and know it'll be usable. Delight is extracting gorgeous details from the cloak of shadows. Delight is firing off a number of shots without having to wait for the buffer to catch up. Delight is constraints, joyfully embraced.</p>\n</blockquote>\n<p>Bonus:</p>\n<blockquote>\n<p>It should not exist. It is one of those unicorn-like consumer products that so nails nearly every aspect of its being — from industrial to software design, from interface to output — that you can’t help but wonder how it clawed its way from the R&#x26;D lab. Out of the meetings. Away from the committees. How did it manage to maintain such clarity in its point of view?</p>\n</blockquote>\n<p>And:</p>\n<blockquote>\n<p>The Q — like most recent Leicas — is engraved with the softly geometric, proprietary LG 1050 typeface. It feels so, totally, completely at home, stamped into the camera body in all caps. It's highly legible and precisely designed. Minimal, functional, but with a bit of quirky character. Like the Q itself. This is the perfect camera typeface used in the perfect way. Mic dropped. Case closed.</p>\n</blockquote>"}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-03-17-java.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Why do many software engineers hate Java?",date:"2016-03-17",readableDate:"17 March 2016",redirectFrom:null,excerpt:null,excerptQuote:null},fields:{path:"/2016/03/java/",slug:"/2016/03/java/"},html:"<p><a href=\"https://www.quora.com/Why-do-many-software-engineers-not-like-Java/answer/Michael-O-Church\">Michael O. Church</a>:</p>\n<blockquote>\n<p>First, let's cover the technical issues. It's verbose, combines the worst of both worlds between static and dynamic typing by having a hobbled but extremely clunky type system, and mandates running on a virtual machine (VM) that has a macroscopic startup time (not an issue for long-running servers, but painful for command-line applications). […]</p>\n<p>The VM itself has a lot to recommend it. It offers concurrency and garbage collection at a level of quality that, until recently, wasn't found anywhere else. […] Much important software in the early 2000s was written in Java because, at the time, it was the best choice, even taking the mediocrity of the language itself into account. It had Unicode (albeit, UTF-16) from the start and a strong concurrency story, and it was a notch above C++ in terms of user experience. […]</p>\n<p>If you put Java on a technical trial, it doesn't do so bad. The <em>language</em> sucks, the platform is pretty good for most purposes. I do hate the dominant interpretation of \"object-oriented programming\" with a passion, because it objectively sucks. […]</p>\n<p>So let's talk about the political and cultural issues. First, the dominant Java culture is one of mediocrity and bad taste, with MetaModelVibratorVisitorFactory classes dominating. I've heard a number of experts on \"the Java issue\" argue that Java's biggest problem is the community, and that comes directly from the fact that good programmers don't want to deal with the bastardization of OOP that has entrenched itself in mainstream corporate development. You have a lot of people who trained up as \"Java programmers\", haven't seen a command line ever, and have no clue how the computer actually works. Most of them have never actually written a program; they just write classes and some Senior Chief Architect (who makes $246,001 per year and hasn't written a line of code since the 1990s) figures out how to stitch them together, and then tells some other clueless junior how to implement the glue in the gutshot hope that one will actually have the talent to make an actual working program out of the mess.</p>\n<p>This isn't inherent to the JVM, because Clojure (currently hosted on the JVM, although its endgame seems to be language-agnosticism) has a radically different (and better) community. Scala's community is more mixed, but the top Scala engineers (the ones making tools like Spark and Kestrel) are really fucking good.</p>\n<p>[…]</p>\n<p>So, the short answer is: it's mostly not about the underlying platform (which is generally of high quality) and its only partly about the language (which is mediocre but can't be blamed directly for community problems). It goes a lot deeper than that, and not all of it is Java's fault. However, Java takes its share of the blame for its clear favoritism toward large programs (technically, established by its long startup time) and by its support of a very ugly (and counterproductive) variety of object-oriented programming.</p>\n</blockquote>\n<p><a href=\"https://www.quora.com/Why-do-many-software-engineers-not-like-Java/answer/Stanley-Idesis\">Stanley Idesis</a>:</p>\n<blockquote>\n<p>I’ve read the popular answers and will claim no contest to a majority of the complaints I found. […] However, here’s why I <em>love</em> it. […]</p>\n<p>In the Android world, developers use Java because they <em>have</em> to. However, much creativity has sprung from that limitation. People have written many excellent OS libraries in Java for Android. The platform continues to be a hotbed of Java activity which developers contribute to from all over the world. […]</p>\n<p>Android’s open nature, wide distribution, and powerful support from Google are almost enough to make Java hip again. […] Sure, some may argue that other runtimes and languages can enable the same capabilities of the device, but for whatever reason, Android chose Java.</p>\n<p>Until Google changes its mind, Java will remain relevant and the source of fascinating developments in the software community as long as Android remains popular.</p>\n</blockquote>"}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-03-17-virtual-reality.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"VR is not the future",date:"2016-03-17",readableDate:"17 March 2016",redirectFrom:null,excerpt:"Right now, journalists and tech companies are all buzzing and craving for VR. When the first officially released headsets will be available, I expect a massive flop. As soon as the novelty wears off, people will just forget it. Because outside of some narrow use cases, it's just not practical or invisible enough.",excerptQuote:null},fields:{path:"/2016/03/virtual-reality/",slug:"/2016/03/virtual-reality/"},html:'<small>\n  <em>This is a prediction. I may (must?) be completely wrong—after all, I hold an unpopular opinion and many tech companies seem to think otherwise. We\'ll see.</em>‍ 🤷\n  <br><br>\n</small>\n<p><a href="https://en.wikipedia.org/wiki/Virtual_reality">Virtual Reality</a> (or VR) is a fantasy that many geeks love. It\'s in books, in movies, in games. In our collective mind, virtual reality is like flying cars: it\'s a dream that we always envisioned for our future as an high tech society.</p>\n<p>Well, we all remember that we didn\'t get flying cars for the new millenium.</p>\n<p>Incredible technologies portrayed in science-fiction books or movies are generally not really that relevant in reality. Or they are so hard to build that we can\'t even fathom to create them now. In our history, the way our society evolved was often very different to how we imagined it in our fictions. When you confront with the reality, many dreams are just what they are: dreams. I would need to dig up some sociology courses that I had—but I remember that this is a recurrent theme in our evolution.</p>\n<p>For VR, it\'s a bit different: we (almost) have the technology. However, I do think that it\'s just a fad. A fad that excites many marketers or entrepreneurs. <em>Real-world applications are so narrow.</em></p>\n<hr>\n<p>VR is a cool demo. VR is impressive. Even with our primitive VR technologies, it\'s still incredible to try.<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup></p>\n<p>VR is also making people sick—yes, many people suffer from motion sickness.</p>\n<p>VR is pretty boring for games, its main application right now. Yes, the immersion is better. Nop, the controls are worse. You can\'t move in a game without hitting a wall. You can\'t use your hands without complex gloves or other utensils. The possibility are not that huge: okay, it might be great for some first-person games where you don\'t move. But that\'s just a small subset of all the games we can create.</p>\n<p>VR is ugly. VR is cumbersome. VR is like Google Glass (remember that?) in so many ways.</p>\n<figure>\n  <img\n    src="/images/posts/2016-03-17-virtual-reality.png"\n    alt="Men and women sitting with a VR headset, Mark Zuckerberg marching among them."\n    title="The future?"\n  >\n  <figcaption>The future? Really?</figcaption>\n</figure>\n<p>If you\'re at home, it might be fine, although that wearing another thing on your head is not that comfy. I already wear glasses, I really don\'t want to add something more on my head, I assure you. Especially if it means that I might hit a wall someway.<sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup></p>\n<p>Outside? At work? We are going to need many years to be okay with that.</p>\n<p>The day we\'ll be able to have VR headsets the size of a regular pair of glasses is far. We might be already destroying our eyes by viewing screens all day—I can\'t wait to wear VR headsets a few centimeters from my retinas all the time!</p>\n<hr>\n<p>VR is not completely useless. There\'s some fields where virtual reality might be useful. Want to visit a new flat in a town far far away? You\'re a future surgeon and you need to practice during your school years? There\'s a myriad of applications outside of gaming and home uses.</p>\n<p>Unfortunately, right now, people imagine that VR will be used to handle and manipulate softwares, computers or playing games. That\'s absurd.</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Using VR to work on scenes in the Unity Editor: <a href="https://twitter.com/timoni">@timoni</a>&#39;s demo on-stage at <a href="https://twitter.com/hashtag/GDC16?src=hash">#GDC16</a>: <a href="https://t.co/tbUmVAemBU">https://t.co/tbUmVAemBU</a> <a href="https://twitter.com/hashtag/unity3d?src=hash">#unity3d</a> <a href="https://t.co/T1EH8MsLWb">pic.twitter.com/T1EH8MsLWb</a></p>&mdash; Ben Pitt (@robotduck) <a href="https://twitter.com/robotduck/status/709810463886934016">March 15, 2016</a></blockquote>\n<p>Seriously? Who would do that? What the point? Who in their right mind thought it was a good idea!?</p>\n<p>When I say that VR is not the future, I don\'t mean that VR will disappear completely. But we need to take a step back and really think about it. We need to stop to try to put VR everywhere—it\'s just a waste of time.</p>\n<p>The only application that will make VR a general use product might be porn. Honestly, except for that, I don\'t see a future where VR is ubiquitous. That just doesn\'t make any sense.</p>\n<hr>\n<p>Virtual reality is a fad. And right now, journalists and tech companies are all buzzing and craving for that. When the first officially released headsets will be available, I expect a massive flop. As soon as the novelty wears off, people will just forget it. <strong>Because outside of some narrow use cases, it\'s just not practical or invisible enough.</strong></p>\n<p><a href="https://twitter.com/hyperisland/status/710052291315965953">F*** it, I give up.</a></p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>VR is the new <a href="https://en.wikipedia.org/wiki/Augmented_reality">AR</a>? I\'m still inclined to think there\'s a slight chance that AR might come back in a way or another and be pertinent.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n<li id="fn-2">\n<p>It\'s like 3D glasses in theaters, but worse. And 3D glasses are already an aberration, we all agree, right?</p>\n<a href="#fnref-2" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>'}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-03-15-doing-a-ted-talk.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Inside the mind of a master procrastinator",date:"2016-03-15",readableDate:"15 March 2016",redirectFrom:null,excerpt:null,excerptQuote:{name:"Tim Urban",quote:"[My rehearsal] was three days before my talk—and it was pretty rough, confirming to me and everyone present that I was officially not a fraud when it came to my topic. The irony of a guy rehearsing his TED Talk about how he’s a bad procrastinator, and being clearly underprepared while doing so, was not lost on anyone."}},fields:{path:"/2016/03/doing-a-ted-talk/",slug:"/2016/03/doing-a-ted-talk/"},html:'<p><a href="http://waitbutwhy.com/2016/03/doing-a-ted-talk-the-full-story.html">Tim Urban about rehearsing for his TED Talk</a>:</p>\n<blockquote>\n<p> I’ve mentioned before that we all have this problem where we’re weirdly obsessed with what other people think of us, so it makes sense that public speaking should be our collective phobia.</p>\n<p>But then we also live in a world where public speaking can happen to any of us at any time. […]</p>\n<p>"Hey TED Staff,</p>\n<p>I\'ve decided to do my talk on procrastination. It\'s the thing I\'m best at.</p>\n<p>Best,</p>\n<p>November Tim"</p>\n<p>[…]</p>\n<p>[My rehearsal] was three days before my talk—and it was pretty rough, confirming to me and everyone present that I was officially not a fraud when it came to my topic. The irony of a guy rehearsing his TED Talk about how he’s a bad procrastinator, and being clearly underprepared while doing so, was not lost on anyone.</p>\n</blockquote>\n<p><strong>UPDATE</strong>: and <a href="http://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator">the talk is up on TED</a>. No surprise: it\'s great.</p>'}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2016-02-16-invention-center.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Invention Centers",date:"2016-02-16",readableDate:"16 February 2016",redirectFrom:null,excerpt:null,excerptQuote:{name:"Alan Kay",quote:"Innovation is the process of taking something that’s already been invented and packaging it nicer. […] Problem-finding is about how to get something out of almost nothing in some new area."}},fields:{path:"/2016/02/invention-center/",slug:"/2016/02/invention-center/"},html:'<p><a href="http://www.fastcodesign.com/3046437/5-steps-to-recreate-xerox-parcs-design-magic-from-the-guy-who-helped-make-it">Alan Kay</a>:</p>\n<blockquote>\n<p>Invention centers are 20 to 40 people doing odd things. Innovation is the process of taking something that’s already been invented and packaging it nicer.</p>\n<p>Problem-finding is about how to get something out of almost nothing in some new area. You\'re by definition not doing something incremental. There’s a lot of playful stuff going on. The probability of a good idea is pretty low. Most of the ideation that happens [in an invention center] are things that get rejected, which is normal in this line of work. Very few people understand that.</p>\n</blockquote>\n<p>Later:</p>\n<blockquote>\n<p>The shortest lived group at Xerox PARC was "Office of the Future," because Xerox executives would not leave them alone.</p>\n<p>I chose the most innocuous name for my own group, the Learning Research Group. Nobody knew what it meant, so they left us alone to invent-object oriented programming and the GUI.</p>\n</blockquote>\n<p>So weird that something like CDG is backed by SAP.</p>\n<p>(via <a href="http://us1.campaign-archive2.com/?u=53a12bfed319e2ce36b906532&#x26;id=49acf1cd18">Avdi Grimm</a>)</p>'}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2015-10-13-sad-state-web-deployment.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"The sad state of web app deployment",date:"2015-10-13",readableDate:"13 October 2015",redirectFrom:null,excerpt:null,excerptQuote:{name:"Eevee",quote:"We’ve been doing this for 20 years. We should have this by now. It should work, it should be pluggable and agnostic, and it should do everything right. […] Instead, we stack layer after layer of additional convoluted crap on top of what we’ve already got because we don’t know how to fix it."}},fields:{path:"/2015/10/sad-state-web-deployment/",slug:"/2015/10/sad-state-web-deployment/"},html:'<p><a href="http://eev.ee/blog/2015/09/17/the-sad-state-of-web-app-deployment/">Eevee on Fuzzy Notepad</a>:</p>\n<blockquote>\n<p>We’ve been doing this for 20 years. We should have this by now. It should work, it should be pluggable and agnostic, and it should do everything right. […]</p>\n<p>Instead, we stack layer after layer of additional convoluted crap on top of what we’ve already got because we don’t know how to fix it. Instead, we flit constantly from Thin to Mongrel to Passenger to Heroku to Bitnami to Docker to whatever new way to deploy trivial apps came out yesterday. Instead, we obsess over adding better Sass integration to our frameworks.</p>\n<p>And I’m really not picking on Ruby, or Rails, or this particular app. I hate deploying my own web software, because there are so many parts all over the system that only barely know about each other, but if any of them fail then the whole shebang stops working.</p>\n</blockquote>\n<p>See also: <a href="http://solarsailer.net/2015/01/something-slightly-less-terrible/">Something Slightly Less Terrible</a>.</p>'}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2015-09-27-semicolon-comma-programming.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Compilation by a thousand semicolons and commas",date:"2015-09-27",readableDate:"27 September 2015",redirectFrom:null,excerpt:"Something I like in most modern programming languages is that they tend to ditch semicolons completely — semicolons are a nuisance, a waste of time, a source of (easily fixable) errors, ugly and unnecessary.",excerptQuote:null},fields:{path:"/2015/09/semicolon-comma-programming/",slug:"/2015/09/semicolon-comma-programming/"},html:'<p>Something I like in most modern programming languages is that they tend to ditch semicolons completely.</p>\n<p>Semicolons are a nuisance, a waste of time, a source of (easily fixable) errors, ugly and unnecessary.</p>\n<p>Compilers can easily work without them. Keeping them in old languages is, most of the time, simply a question of backward-compatibility.</p>\n<p>And that\'s fine, after all. In modern languages though, this is something that must be avoided. It\'s wrong and useless.</p>\n<p>Consider this snippet of Swift:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">"Hello!"</span>\n\n<span class="token keyword">if</span> <span class="token keyword">let</span> name <span class="token operator">=</span> optionalName <span class="token punctuation">{</span>\n    greeting <span class="token operator">=</span> <span class="token string">"Hello, <span class="token interpolation"><span class="token delimiter variable">\\(</span>name<span class="token delimiter variable">)</span></span>"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>No semicolon.</strong> Great. Now, consider a similar snippet of Go:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>x <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"i"</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It\'s pretty nice, isn\'t it?</p>\n<p>Go <strong>does</strong> use semicolons in its grammar. However, it\'s the lexer\'s role to add them, not the developer. <a href="http://zachholman.com/posts/shit-work/">Let the machines do the shit work.</a></p>\n<p>Here\'s the extract from <a href="https://golang.org/doc/effective_go.html#semicolons">Effective Go</a>:</p>\n<blockquote>\n<p>Like C, Go\'s formal grammar uses semicolons to terminate statements, but unlike in C, those semicolons do not appear in the source. Instead the lexer uses a simple rule to insert semicolons automatically as it scans, so the input text is mostly free of them.</p>\n</blockquote>\n<p>And unlike in an extremely <a href="http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding">popular</a> <a href="http://mislav.uniqpath.com/2010/05/semicolons/">language</a>, Go imposes some formatting rules to its programmers and nobody has a problem with <a href="http://inimino.org/~inimino/blog/javascript_semicolons">ASI</a>.</p>\n<p>However, there\'s still one perfectly valid case where semicolons are not optional:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">if</span> v <span class="token operator">:=</span> math<span class="token punctuation">.</span><span class="token function">Pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> limit <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> v\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Between <code class="language-text">math.Pow(x, n)</code> and <code class="language-text">v &lt; limit</code>, you will find a semicolon. Because the two statements are on the same line, the compiler needs a semicolon to know where to end a statement and start the next one.</p>\n<p>Basically, the rule is simple:</p>\n<ul>\n<li>Do not use a semicolon when a statement ends with a newline.</li>\n<li>Use a semicolon when a statement is followed by another statement on the same line.</li>\n</ul>\n<p>That\'s the basic consensus in new languages.</p>\n<hr>\n<p>So, here\'s my question: <strong>why don\'t we do the same thing with commas?!</strong></p>\n<p>Let\'s look at the following snippet of Swift:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>As you can see, each value of the array is separated by a comma. Same rule as the semicolons: if you are on the same line, use a separator. <em>In this case, it\'s a comma instead of the semicolon because the semantic is different.</em> Fine.</p>\n<p>Now, let\'s look at the same snippet with a multi-lines notation — this example might seem contrived, but this kind of notation is clearer when the values are more complex and/or numerous:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> example <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"a"</span><span class="token punctuation">,</span>\n  <span class="token string">"b"</span><span class="token punctuation">,</span>\n  <span class="token string">"c"</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Wait. What. <strong>It\'s exactly like in the one-line declaration just above.</strong> Which is not surprising, because almost any language will do that.</p>\n<p>That\'s inconsistent though. For semicolons, we omit them when there\'s a newline, but here, for a comma, we do not.</p>\n<p>The correct syntax should be:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"a"</span>\n  <span class="token string">"b"</span>\n  <span class="token string">"c"</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Simpler, prettier. And it gives a few bonuses beyond the cosmetic aspect:</p>\n<ol>\n<li>\n<p>It\'s less error-prone.</p>\n</li>\n<li>\n<p>It\'s more practical for versioning tool\'s diffs:</p>\n<p><img src="/images/posts/2015-09-27-diff.png" alt="Diff"></p>\n</li>\n<li>\n<p>It\'s consistent with the semicolon behavior.</p>\n</li>\n</ol>\n<p>I would apply the same rule to functions definition, maps or anything which needs commas, like I wrote in this example:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token comment">// One-line, comma.</span>\n<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// Or:</span>\n\n<span class="token comment">// Multi-lines, no comma.</span>\n<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>\n  x<span class="token punctuation">:</span> <span class="token builtin">Int</span>\n  y<span class="token punctuation">:</span> <span class="token builtin">Int</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In Go, those notations are not frequent because the formatting rules are stricter. However, in a struct definition, you must write this:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n  X <span class="token builtin">int</span><span class="token punctuation">,</span>\n  Y <span class="token builtin">int</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>(Note the trailing comma on the last line.)</em></p>\n<p>It\'s better than what Swift does (at least, diffs are not impacted and you don\'t have to think to add or remove a comma — you just have to).</p>\n<p>But why did they choose to keep the commas? No comma at all would have been way better AND coherent with the semicolon rule.</p>\n<p>And you know what is even more inconsistent? This, which is perfectly valid Go code:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">var</span> <span class="token punctuation">(</span>\n  x <span class="token operator">=</span> <span class="token number">1</span>\n  y <span class="token operator">=</span> <span class="token number">2</span>\n  z <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Yep, this time, there is nothing at all.</p>'
}},{node:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2015-09-15-quantum-post-mortem.md absPath of file >>> MarkdownRemark",frontmatter:{path:null,title:"Quantum post-mortem",date:"2015-09-15",readableDate:"15 September 2015",redirectFrom:null,excerpt:null,excerptQuote:{name:"Eric Zimmerman",quote:"My goal was that every card should feel incredibly powerful – a potential game winner in the right situation. I loved seeing my playtesters' faces grow greedy as they read the cards, astonished at how good the powers seemed to be."}},fields:{path:"/2015/09/quantum-post-mortem/",slug:"/2015/09/quantum-post-mortem/"},html:'<p><a href="http://boardgamegeek.com/blogpost/24083/designer-diary-cruel-cruel-galaxy-or-designing-qua">Fascinating post-mortem of Quantum, by its designer, Eric Zimmerman</a>:</p>\n<blockquote>\n<p>Quantum is a strategy game for two through four players that incorporates elements of tactics, resource management, and empire building. Players each begin the game with a small fleet of three starships on a customizable map built of modular tiles. Your goal is to expand by building Quantum Cubes on planets, along the way growing your fleet and evolving its abilities. […]</p>\n<p>Another element that opened up the possibilities of the game during this early prototyping period was the addition of special power cards. While I was working on it, I remember seeing a talk at the Game Developers Conference by Rob Pardo, one of the lead designers of World of Warcraft. According to Rob, one of the philosophies at his company Blizzard was to make the player feel overpowered. According to Rob, special abilities and power-ups should feel mighty and spectacular, rather than just being some kind of incremental stat improvement.</p>\n<p>As I started adding the advance cards to the game, I tried to have them embody this approach, especially when it came to the permanent card powers. My goal was that every card should feel incredibly powerful – a potential game winner in the right situation. I loved seeing my playtesters\' faces grow greedy as they read the cards, astonished at how good the powers seemed to be.</p>\n<p>The challenge of powerful cards, of course, is balancing them. […]</p>\n<p>Designing the right mix of cards came down to good old-fashioned balancing and testing. There are a number of heuristics I tried to use in designing the cards to be balanced. For example, no card simply gives players an extra fourth action each turn; instead, some cards give you an extra action, but that action is limited, such as a free move that is only one space. There are also cards that do give you a completely open-ended extra action, but only if certain conditions are met, such as if you have more ships on the map than any other player. […]</p>\n<p> It seemed hopeless; I had designed a game with a combat system that no one wanted to use! The solution to this problem was to directly link combat to winning the game. […]</p>\n<p>One strong focus of our work was the language of Quantum: the terms in the rules, the names of the cards and units, and the other words we used in the game. In early prototypes, the titles of the advance cards were more technological: "Ferocious", the card that gives you a combat bonus, was originally called "Armor", while "Energetic", which gives you a movement bonus, was titled "Propulsion".</p>\n<p>The names of the card were clear, but they felt generic. Thinking about how to emphasize the player-as-commander, I changed the names from nouns to adjectives. Rather than describing the player\'s fleet, the cards now described the player. Instead of "Fuel", "Evasion", and "Engineering", the cards now had names like "Brilliant", "Cruel", and "Stubborn".</p>\n</blockquote>\n<p><a href="http://www.funforge.fr/US/?portfolio=quantum">Quantum</a> is one of the best boardgames I recently played. It was unavailable for a year but I finally got my hand on the re-edition. The post-mortem shows all the history behind the game and how some concepts were found and implemented.</p>\n<p>The game is really fast, complex and deep. There\'s a bit of chance in the game through the roll of the dices (<em>obviously</em>), but I don\'t think it matters that much in the end. Your decisions are way more important than your luck.</p>'}}],pathPrefix:"articles",first:!0,last:!1,index:1,pageCount:9,additionalContext:{}}}}});
//# sourceMappingURL=path---articles-44d4f7a6b5be97ad7109.js.map