const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
// 输出 lorem  ipsum 
// 正则  replace splice 规则
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');