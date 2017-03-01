/**
 * Created by QW on 2017/2/28.
 */

window.onload=function(){
    var logo=document.querySelector('.logo');
    var toptel=document.querySelector('.toptel');
    var contact=document.querySelector('.contact');
    var copy=document.querySelector('.copyright');
    var leftcon=document.querySelector('.leftcon_list');
    var title=document.getElementsByTagName('title')[0];
    logo.innerHTML='<a style="font-size: 30px;display: block;margin-top: 25px;" href="index.php.htm" tppabs="http://www.huaqiangtong.com/index.php" title="河北华强科技开发有限公司">河北隆康玻璃钢有限公司</a>';
    toptel.innerHTML=' <div class="tel" style="position: absolute;top: 0;">全国服务热线：<span style="font-size: 19px;"></span><span style="font-size: 19px;"> 王　超 18831837229</span><span style="font-size: 19px;"> </span></div>'
    leftcon.innerHTML=' <dl><dt>地址：</dt><dd>河北省衡水市枣强县城</dd></dl><dl><dt></dt><dd></dl></dd><dl><dt>王　超</dt><dd> 18831837229</dd></dl><dl><dt></dt><dd></dd></dl><div class="clear"></div>'
    copy.innerHTML='<div class="copyrightnr">地址：河北省衡水市枣强县　 王　超 18831837229 版权所有：河北隆康科技开发有限公司</div>';
    title.innerHTML='河北隆康玻璃钢有限公司'
}