import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-e4242b7e.js";const p={},o=t(`<h1 id="exercicio-08-matriz-01" tabindex="-1"><a class="header-anchor" href="#exercicio-08-matriz-01" aria-hidden="true">#</a> Exercício 08 Matriz 01</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">perguntaQuantidadeEntrevistados</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> quantidadePessoas<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Quantas pessoas serão entrevistadas?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>quantidadePessoas<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Quantas pessoas serão entrevistadas %d\\n&quot;</span><span class="token punctuation">,</span> quantidadePessoas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> quantidadePessoas<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> quantidadePessoas <span class="token operator">=</span> <span class="token function">perguntaQuantidadeEntrevistados</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> nome<span class="token punctuation">[</span>quantidadePessoas<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> idades<span class="token punctuation">[</span>quantidadePessoas<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> quantidadePessoas<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Informe nome do %dº entrevistado\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>nome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Informe idade do %dº entrevistado\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>idades<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> quantidadePessoas<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Nome do %dº entrevistado %s e idade %d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> nome<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> idades<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(i,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","09_matriz.html.vue"]]);export{r as default};
