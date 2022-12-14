const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<h2>🔨 Taro项目使用示例</h2>
<p>安装依赖</p>
<pre><code class="hljs language-bash">yarn add corn-taro corn-cons
</code></pre>
<p>再入口scss文件中，引用样式</p>
<pre><code class="hljs language-css"><span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~corn-taro/styles/index&#x27;</span>;
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~corn-cons/style&#x27;</span>;
</code></pre>
<p>使用组件</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;corn-taro&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = (<span class="hljs-params"></span>) =&gt; (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
<br />
<br />
<br />
<h2>🔨 React项目中使用示例</h2>
<p>安装依赖</p>
<pre><code class="hljs language-bash">yarn add corn-h5 corn-cons
</code></pre>
<p>使用组件</p>
<pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;corn-h5&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;corn-h5/dist/styles/base.css&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;corn-h5/dist/styles/index.mini.css&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = (<span class="hljs-params"></span>) =&gt; (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>
)
</code></pre>
<h2>使用375单位规范的UI组件</h2>
<pre><code class="hljs language-css"><span class="hljs-comment">/** @import &#x27;~corn-taro/styles/index&#x27;; */</span>
<span class="hljs-comment">/** 替换引入 */</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#x27;~corn-taro/styles-375/index&#x27;</span>
</code></pre>
`,
      }}
    />
  )
}

export default Page
