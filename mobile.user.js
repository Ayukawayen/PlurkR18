// ==UserScript==
// @name Plurk Mobile R18
// @namespace net.ayukawayen.plurk.r18.mobile
// @include *://www.plurk.com/m/
// @include *://www.plurk.com/m/*
// @exclude *://www.plurk.com/m/p/*
// ==/UserScript==

/* 加入CSS語法 */
addCsss([
	'.plurk.porn .plurk_content {opacity:0.5; filter:blur(2px);}', //透明化+模糊化
	'.plurk_meta .porn::before {transform:scale(2);}', //圖示放大
]);

/* 把內含R18 ICON的噗加上porn class */
document.querySelectorAll('.pif-porn').forEach((node)=>{
	node.parentNode.parentNode.parentNode.classList.add('porn');
});

/* */
function addCsss(csss) {
	let id = 'netAyukawayenPlurkR18Mobile';
	let styleNode = document.querySelector('#'+id);
	if(styleNode) return;
	styleNode = document.createElement('style');
	styleNode.id = id;
	styleNode.type = 'text/css';
	document.querySelector('head').appendChild(styleNode);
	styleNode.textContent += csss.join('\r\n');
}
