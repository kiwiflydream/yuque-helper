# yuque-helper 1.0 发布了

![](https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&a=0.5370183293516069)
## 什么是 yuque-helper


  yuque-helper 是一个开源免费的语雀 chrome 小插件. 目前功能如下: 


![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608641868668-b69e058f-dbfb-492c-b06b-46e3f5149323.png#align=left&display=inline&height=366&margin=%5Bobject%20Object%5D&name=image.png&originHeight=366&originWidth=232&size=30301&status=done&style=none&width=232)


  另外还有一个在配置项里的自定义字体功能. 


  具体功能的细节与使用方法见下文. 


## 为什么会有 yuque-helper


  语雀可能是我这几年使用过的最惊艳的笔记工具了, 大概是 18 年 5 月开始入坑, 一见如故, 把自己所有笔记的工作全部迁移到了语雀. 语雀的公共空间大概已经有了 530 篇文档. 


![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608643595469-846464ca-ba8d-4d55-a88d-e7b953db09d7.png#align=left&display=inline&height=217&margin=%5Bobject%20Object%5D&name=image.png&originHeight=217&originWidth=315&size=11540&status=done&style=none&width=315)




  在不断使用的过程中, 也见证着语雀功能变得的更加丰富与强大. 但是每个人的使用场景不同, 语雀也无法面面俱到. 对于一些我个人觉得很有用的小功能, 在语雀的排期应该很靠后, 甚至没有排期. 很早就萌生写插件去实现我想要的功能, 但是一直没有实施. 


直到，语雀经过通盘考虑删除了原来的 markdown 视图的功能。


![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608643993026-dbfd12f6-9409-4bed-b9c1-1aa7978855f1.png#align=left&display=inline&height=960&margin=%5Bobject%20Object%5D&name=image.png&originHeight=960&originWidth=1082&size=170514&status=done&style=none&width=1082)


  有些东西真的是拥有的时候, 你不知道哪里好, 直到失去才感受到他的重要. 


  没有这个功能后, 真的给我带了很大的不便, 以前只要点击一下按钮就可以的操作, 我现在不得不先下载 markdown 文件, 再到文件夹找到他, 然后打开文件, 再复制. 操作的步骤大大的延长, 全是摩擦阻力. 


  直到有一天, 看到语雀团队的仙森ᵒᵏ大佬的这篇文章


  发现, 只是隐藏了相关按钮, 但是功能还是在的, 只在要网页后面拼接相应参数即可. 


  这的确解决了燃眉之急, 但是我还是想要之前点一下就打开的快捷, 所以就有了这个插件雏形. 


## 如何使用 yuque-helper
### 如何安装


  目前只支持, 通过压缩包安装, 这种方式的好处是, 你不需要会科学上网. 按下面的步骤操作即可, 坏处是没办法升级, 下次有更新, 你还需手动下载, 重新安装, 不过我已经提交到 chrome 的官方插件市场审核了, 顺利的话, 本周就可以直接在官方插件市场直接安装了. 


  压缩包安装: 


[yuque-helper-v1.0.0.zip](https://www.yuque.com/attachments/yuque/0/2020/zip/119443/1608645487731-07a5d33f-aca4-4c13-9951-c09ce7e43f00.zip?_lake_card=%7B%22uid%22%3A%221608645484786-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fzip%2F119443%2F1608645487731-07a5d33f-aca4-4c13-9951-c09ce7e43f00.zip%22%2C%22name%22%3A%22yuque-helper-v1.0.0.zip%22%2C%22size%22%3A623958%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22w4C5O%22%2C%22card%22%3A%22file%22%7D)


  首先下载上面的 zip 文件到你的本地, 然后放在一个不会被不小心删除的地方, 解压好. 


  按如下图所示菜单进件选择, 打开 扩展程序 页面
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608359004415-c649c96b-fe21-4c76-b7a1-cfd3dfc5259d.png#align=left&display=inline&height=628&margin=%5Bobject%20Object%5D&name=image.png&originHeight=628&originWidth=729&size=333918&status=done&style=none&width=729)


  点击 加载已解压的扩展程序 按钮
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608645690310-f8a2c70c-8658-4b4d-9b52-bb53caa53c95.png#align=left&display=inline&height=250&margin=%5Bobject%20Object%5D&name=image.png&originHeight=250&originWidth=1054&size=24879&status=done&style=none&width=1054)


  选择你刚刚解压 zip 文件的目录, 点击选择即可
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608359131799-e73ac1f2-26c5-4717-8016-036e4aed1fab.png#align=left&display=inline&height=376&margin=%5Bobject%20Object%5D&name=image.png&originHeight=376&originWidth=728&size=48747&status=done&style=none&width=728)


  如果操作正常, 你会看到你的 扩展程序面板 多了一个 yuque-helper 的卡片, 说明你安装成功了. 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608359149077-05abd223-047f-4e75-9465-d6f299a210c0.png#align=left&display=inline&height=234&margin=%5Bobject%20Object%5D&name=image.png&originHeight=234&originWidth=417&size=17367&status=done&style=none&width=417)


  不知道 chrome 哪版开始, 安装的插件默认不会在地址栏显示, 为了方便使用, 你可以按如下图所示, 固定本插件, 当然本步非必须操作, 看个人喜好. 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608359452502-a64235ec-1631-42b4-9380-b8980e9dd388.png#align=left&display=inline&height=582&margin=%5Bobject%20Object%5D&name=image.png&originHeight=582&originWidth=383&size=84209&status=done&style=none&width=383)


### 功能介绍
#### 1. Markdown 视图


  上文也说了, 快捷显示 markdown 视图是本插件的初衷, 所以他是第一个, 功能很简单, 只是在点击时, 自动跳到当前页面地址 + markdown 参数的页面, 当然, 如果你不是在语雀文章面点击此按钮, 应该会看到 404
![markdown.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608366730274-1818b3fb-c6e6-4364-9570-04ac0ae6edd6.gif#align=left&display=inline&height=1029&margin=%5Bobject%20Object%5D&name=markdown.gif&originHeight=1029&originWidth=1851&size=2312929&status=done&style=none&width=1851)


#### 2. Html 视图


  与 markdown 类似, 只是打开的 html 视图页面
![html.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608366745533-64146ac0-3921-47fc-8188-9c3e231d08e6.gif#align=left&display=inline&height=1072&margin=%5Bobject%20Object%5D&name=html.gif&originHeight=1072&originWidth=1846&size=17895175&status=done&style=none&width=1846)


#### 3. 复制 Url


  这个功能, 主要是在文章时需要引用一些页面, markdown  通过语法需要这样写


```bash
[网页标题](https://www..com)
```


  所以要引用一个网页的地址, 我至少要复制一次网页的标题, 再复制一次网页地址. 我觉得太麻烦, 加了一个小功能, 点击按钮后, 会自动生成当前页面的 markdown 链接引用到你的粘贴板. 




![copy_url.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608366753210-7725d6b7-abd7-4ee5-afee-82581d2a8805.gif#align=left&display=inline&height=1080&margin=%5Bobject%20Object%5D&name=copy_url.gif&originHeight=1080&originWidth=1918&size=650376&status=done&style=none&width=1918)


#### 4. 生成 TOC


  如果对于 markdown 比较熟悉的同学, 应该见过有些编辑器是支持 toc 语法的, 可以首页生成本文的大纲, 不过语雀有侧边栏大纲, 此功能聊胜于无. 
![toc.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608641394070-62c9f7b7-6ea6-4efb-9f5f-236151bde854.gif#align=left&display=inline&height=1074&margin=%5Bobject%20Object%5D&name=toc.gif&originHeight=1074&originWidth=1919&size=334245&status=done&style=none&width=1919)


#### 5. 插入 bing 图片


  我写文章时, 因为有些会发到个人的公众号上, 所以喜欢在文章开始配个首图. 通常使用 bing 的随机图就够了. 此按钮功能就是在文首接入一张随机的 bing 的配图.  (配图要在外网获取, 看个人网速, 可能加载缓慢) 
![bing.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608641408226-4a8eab13-7fd9-42bd-be15-3bdbfdd4d024.gif#align=left&display=inline&height=1076&margin=%5Bobject%20Object%5D&name=bing.gif&originHeight=1076&originWidth=1918&size=479648&status=done&style=none&width=1918)


#### 6. 首行缩进


  顾名思义, 给每段开头加两个空格. 


![2020-12-22 20.52.43.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608641692095-18921f06-80a8-41e7-af49-d5222ccc1fa9.gif#align=left&display=inline&height=652&margin=%5Bobject%20Object%5D&name=2020-12-22%2020.52.43.gif&originHeight=652&originWidth=874&size=128539&status=done&style=none&width=874)


#### 7. 文本格式化


  本功能还不太完善, 使用前请先学会语雀的历史版本功能, 在出现问题时, 自行恢复历史版本. 


  本功能主要是为了一键格式化文本, 比如在中文与英文或者数字之前自动加个空格, 使阅读体验更好, 或修复一些标点符号错误的用法等. 


![2020-12-22 20.53.58.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608641726708-dda9376e-a023-4698-ab18-a7028a83772c.gif#align=left&display=inline&height=491&margin=%5Bobject%20Object%5D&name=2020-12-22%2020.53.58.gif&originHeight=491&originWidth=851&size=137737&status=done&style=none&width=851)


#### 8. 获得目录列表


  此功能一般没啥用, 初衷是语雀出了个人页面, 有些同学喜欢把个人页面上列出自己的文章列表, 但是一个一个复制又太麻烦了, 此功能就是在目录页面生成当前展开的文章到你的剪切板, 减少一定的重复劳动. 
![book.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608641426368-1da03a9e-7c6b-48f4-83e1-4a0456fdf9c9.gif#align=left&display=inline&height=1079&margin=%5Bobject%20Object%5D&name=book.gif&originHeight=1079&originWidth=1920&size=15582858&status=done&style=none&width=1920)


#### 9. 插入表情


  写这个功能的时候, 语雀还没有在表情按钮, 写完之后, 发现语雀上线这个功能, 不过, 还好表情重复的不多, 不然就白写了😂 . 而且不光支持评论框插入还支持文章. 


  这些表情及插件的图标均来自下文
  不过写本文的时候, 好像删除了...


![mood1.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608366769884-8fee8377-bad5-4261-98ab-64e2b13e58c3.gif#align=left&display=inline&height=1039&margin=%5Bobject%20Object%5D&name=mood1.gif&originHeight=1039&originWidth=1584&size=347305&status=done&style=none&width=1584)




![mood2.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608366787135-6f07e7a3-de2b-4c37-b7ac-7420e93e3862.gif#align=left&display=inline&height=1013&margin=%5Bobject%20Object%5D&name=mood2.gif&originHeight=1013&originWidth=1692&size=373803&status=done&style=none&width=1692)


#### 10. 自定义字体


  语雀毕竟是用来看的, 一种字体看多了, 难免审美疲劳, 加了一个自定义设置字体的功能, 当然你设置的字体必须要是你本地安装过的. 


  注意看演示图, 此设置需在选项页内设置, 需右击插件图标, 打开选项页面进行设置. 可以同时设置多个字体, 建议先配置一个英文的, 再配置一个中文的. 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608689788099-068aff17-d255-42d7-b80d-d8ca18b07c09.png#align=left&display=inline&height=237&margin=%5Bobject%20Object%5D&name=image.png&originHeight=237&originWidth=321&size=16528&status=done&style=none&width=321)


![font.gif](https://cdn.nlark.com/yuque/0/2020/gif/119443/1608372757318-ea2f1458-0ff2-4a20-b7e8-70cf0c40abfc.gif#align=left&display=inline&height=1064&margin=%5Bobject%20Object%5D&name=font.gif&originHeight=1064&originWidth=1911&size=17458069&status=done&style=none&width=1911)


## 其它
### 开源地址


  温馨提示: 如果你是抱着学习的目的去看这个项目, 这明显不是一个好主意, 我其实是一个后端开发, 本插件都是我贫瘠的散装前端知识写成的, 希望各位前端大佬一起帮忙完善它. 


[kiwiflydream/yuque-helper: yuque-helper 是一个开源免费的语雀 chrome 小插件](https://github.com/kiwiflydream/yuque-helper)


### 联系我


  如果使用上有问题, 可以加我的微信, 当然如果你有好的想法, 想教我做产品, 想教我写代码, 或者仅仅只是想多交一个朋友都欢迎. 


![image.png](https://cdn.nlark.com/yuque/0/2020/png/119443/1608700862146-31cbfa9d-b9a9-47f3-a35b-8c8a08dd70aa.png#align=left&display=inline&height=430&margin=%5Bobject%20Object%5D&name=image.png&originHeight=430&originWidth=430&size=52117&status=done&style=none&width=430)



