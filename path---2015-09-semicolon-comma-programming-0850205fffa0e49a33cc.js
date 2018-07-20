webpackJsonp([0x84f6614cafd8],{772:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Solar Sailer",description:"I am a developer, designer and product manager from France. Co-founder of Pixelnest Studio.",author:"Matthieu Oger",siteUrl:"https://solarsailer.net/"}},markdownRemark:{html:'<p>Something I like in most modern programming languages is that they tend to ditch semicolons completely.</p>\n<p>Semicolons are a nuisance, a waste of time, a source of (easily fixable) errors, ugly and unnecessary.</p>\n<p>Compilers can easily work without them. Keeping them in old languages is, most of the time, simply a question of backward-compatibility.</p>\n<p>And that\'s fine, after all. In modern languages though, this is something that must be avoided. It\'s wrong and useless.</p>\n<p>Consider this snippet of Swift:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">"Hello!"</span>\n\n<span class="token keyword">if</span> <span class="token keyword">let</span> name <span class="token operator">=</span> optionalName <span class="token punctuation">{</span>\n    greeting <span class="token operator">=</span> <span class="token string">"Hello, <span class="token interpolation"><span class="token delimiter variable">\\(</span>name<span class="token delimiter variable">)</span></span>"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>No semicolon.</strong> Great. Now, consider a similar snippet of Go:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">func</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>x <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"i"</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It\'s pretty nice, isn\'t it?</p>\n<p>Go <strong>does</strong> use semicolons in its grammar. However, it\'s the lexer\'s role to add them, not the developer. <a href="http://zachholman.com/posts/shit-work/">Let the machines do the shit work.</a></p>\n<p>Here\'s the extract from <a href="https://golang.org/doc/effective_go.html#semicolons">Effective Go</a>:</p>\n<blockquote>\n<p>Like C, Go\'s formal grammar uses semicolons to terminate statements, but unlike in C, those semicolons do not appear in the source. Instead the lexer uses a simple rule to insert semicolons automatically as it scans, so the input text is mostly free of them.</p>\n</blockquote>\n<p>And unlike in an extremely <a href="http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding">popular</a> <a href="http://mislav.uniqpath.com/2010/05/semicolons/">language</a>, Go imposes some formatting rules to its programmers and nobody has a problem with <a href="http://inimino.org/~inimino/blog/javascript_semicolons">ASI</a>.</p>\n<p>However, there\'s still one perfectly valid case where semicolons are not optional:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">if</span> v <span class="token operator">:=</span> math<span class="token punctuation">.</span><span class="token function">Pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> limit <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> v\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Between <code class="language-text">math.Pow(x, n)</code> and <code class="language-text">v &lt; limit</code>, you will find a semicolon. Because the two statements are on the same line, the compiler needs a semicolon to know where to end a statement and start the next one.</p>\n<p>Basically, the rule is simple:</p>\n<ul>\n<li>Do not use a semicolon when a statement ends with a newline.</li>\n<li>Use a semicolon when a statement is followed by another statement on the same line.</li>\n</ul>\n<p>That\'s the basic consensus in new languages.</p>\n<hr>\n<p>So, here\'s my question: <strong>why don\'t we do the same thing with commas?!</strong></p>\n<p>Let\'s look at the following snippet of Swift:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>As you can see, each value of the array is separated by a comma. Same rule as the semicolons: if you are on the same line, use a separator. <em>In this case, it\'s a comma instead of the semicolon because the semantic is different.</em> Fine.</p>\n<p>Now, let\'s look at the same snippet with a multi-lines notation — this example might seem contrived, but this kind of notation is clearer when the values are more complex and/or numerous:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> example <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"a"</span><span class="token punctuation">,</span>\n  <span class="token string">"b"</span><span class="token punctuation">,</span>\n  <span class="token string">"c"</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Wait. What. <strong>It\'s exactly like in the one-line declaration just above.</strong> Which is not surprising, because almost any language will do that.</p>\n<p>That\'s inconsistent though. For semicolons, we omit them when there\'s a newline, but here, for a comma, we do not.</p>\n<p>The correct syntax should be:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"a"</span>\n  <span class="token string">"b"</span>\n  <span class="token string">"c"</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Simpler, prettier. And it gives a few bonuses beyond the cosmetic aspect:</p>\n<ol>\n<li>\n<p>It\'s less error-prone.</p>\n</li>\n<li>\n<p>It\'s more practical for versioning tool\'s diffs:</p>\n<p><img src="/images/posts/2015-09-27-diff.png" alt="Diff"></p>\n</li>\n<li>\n<p>It\'s consistent with the semicolon behavior.</p>\n</li>\n</ol>\n<p>I would apply the same rule to functions definition, maps or anything which needs commas, like I wrote in this example:</p>\n<div class="gatsby-highlight" data-language="swift">\n      <pre class="language-swift"><code class="language-swift"><span class="token comment">// One-line, comma.</span>\n<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// Or:</span>\n\n<span class="token comment">// Multi-lines, no comma.</span>\n<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>\n  x<span class="token punctuation">:</span> <span class="token builtin">Int</span>\n  y<span class="token punctuation">:</span> <span class="token builtin">Int</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In Go, those notations are not frequent because the formatting rules are stricter. However, in a struct definition, you must write this:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n  X <span class="token builtin">int</span><span class="token punctuation">,</span>\n  Y <span class="token builtin">int</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>(Note the trailing comma on the last line.)</em></p>\n<p>It\'s better than what Swift does (at least, diffs are not impacted and you don\'t have to think to add or remove a comma — you just have to).</p>\n<p>But why did they choose to keep the commas? No comma at all would have been way better AND coherent with the semicolon rule.</p>\n<p>And you know what is even more inconsistent? This, which is perfectly valid Go code:</p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">var</span> <span class="token punctuation">(</span>\n  x <span class="token operator">=</span> <span class="token number">1</span>\n  y <span class="token operator">=</span> <span class="token number">2</span>\n  z <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Yep, this time, there is nothing at all.</p>',frontmatter:{date:"2015-09-27",readableDate:"27 September 2015",title:"Compilation by a thousand semicolons and commas",showPageTitle:null,excerptLine:"Something I like in most modern programming languages is that they tend to ditch semicolons completely — semicolons are a nuisance, a waste of time, a source of (easily fixable) errors, ugly and unnecessary.",excerptQuote:null},fields:{path:"/2015/09/semicolon-comma-programming/"}}},pathContext:{id:"/Users/ashen/Code/solarsailer.net/content/posts/2015-09-27-semicolon-comma-programming.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---2015-09-semicolon-comma-programming-0850205fffa0e49a33cc.js.map