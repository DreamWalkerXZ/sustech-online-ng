import{_ as e,p as o,q as c,a1 as i}from"./framework-041070b5.js";const d="/assets/1-78fa3b90.png",s="/assets/2-256c459f.png",a="/assets/3-c1163488.png",t="/assets/4-ffa5021d.png",l="/assets/5-c86c4a6e.png",r="/assets/6-1967a188.png",p={},n=i('<h1 id="解决邮箱容量不足的问题" tabindex="-1"><a class="header-anchor" href="#解决邮箱容量不足的问题" aria-hidden="true">#</a> 解决邮箱容量不足的问题</h1><p>by 贾纪源</p><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><ol><li>有足够空间的 <code>个人QQ邮箱A</code></li><li>容量不足的邮箱（以下用 <code>企业邮箱B</code> 举例）提供 POP3（Post Office Protocol 3）服务</li></ol><h2 id="具体效果与配置注意事项" tabindex="-1"><a class="header-anchor" href="#具体效果与配置注意事项" aria-hidden="true">#</a> 具体效果与配置注意事项</h2><ol><li>在 <code>企业邮箱B</code> 中删除邮件，<code>个人QQ邮箱A</code> 中存储的 <code>企业邮箱B</code> 的邮件不会被删除，以达到备份邮件、清理 <code>企业邮箱B</code> 空间的效果。</li><li>在 <code>个人QQ邮箱A</code> 中收取 <code>企业邮箱B</code> 的邮件，收件人依然保持显示 “<code>企业邮箱B</code>。</li><li>在 <code>个人QQ邮箱A</code> 中发送或回复 <code>企业邮箱B</code> 的邮件，发件人将显示为 “<code>企业邮箱B</code> 发送 （以 <code>个人QQ邮箱A</code>） 代发”。</li><li>由 <code>企业邮箱B</code> 的垃圾邮箱策略，垃圾箱中的邮件可以不会被 <code>个人QQ邮箱A</code> 收取。</li><li>部分邮件服务商的POP3协议使用<strong>客户端密码</strong>，而不是网页账号密码。</li></ol><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><ol><li><p>打开 <code>个人QQ邮箱A</code>，进入设置</p><p><img src="'+d+'" alt="1"></p></li><li><p>选择其他邮箱</p><p><img src="'+s+'" alt="2"></p></li><li><p>添加其他邮箱账户（<code>企业邮箱B</code>）</p><p><img src="'+a+'" alt="3"></p></li><li><p>输入学校邮箱账号</p><p><img src="'+t+'" alt="4"></p></li><li><p>输入学校邮箱密码，点击验证</p><p><img src="'+l+'" alt="5"></p></li><li><p>输入POP服务器和端口点击验证</p><p><img src="'+r+'" alt="6"></p></li></ol>',8),h=[n];function _(m,f){return o(),c("div",null,h)}const Q=e(p,[["render",_],["__file","send-receive-email-by-proxy.html.vue"]]);export{Q as default};
