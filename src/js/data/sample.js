/* eslint-disable max-len */
const sample = `ABCDE
	<div class="welcometext-content">
		<div class='hello'>yaya</div>
		<h1 class='tip'>我是H1</h1>
		<div class='ansTag' rel='1' data-title='你好嗎1？'>你好嗎11？</div>
		<span class='ansTag' rel='2' data-title='你好嗎2？'>你好嗎22？</span>
		<a href='https://www.surveycake.com'>links</a>
		<p class='subtitle'>我是P <span style='color: red;'>AAA</span></p>
		<ul style="list-style-type:none; padding:0px; margin-left:0px; font-size:13.5px;">
			<li style="margin-bottom:6px;">第一個 li</li>
			<li style="margin-bottom:6px;">第二個 li</li>
			<li style="margin-bottom:6px;">第三個 li</li>
		</ul>
		<div style="font-size:88px;">有 Style 的 DIV</div>
		<img src='https://www.surveycake.com/common/images/mail/logo.png'/>
	</div>
`;

export const sampleWelcomeText = `<div class='welcometext-content'>你好，</div>\n\n<div class='welcometext-content'>&nbsp;</div>\n\n<div class='welcometext-content'>這是一份可愛的問卷，希望你會喜歡，你可以調整你的文字樣式，像是<strong>加粗</strong>，<em>斜體</em>，加<u>底線</u>，<span style='color:#f29319;'>變色</span>，或是<span style='background-color:#addae7;'>加底色</span>，甚至<a href='https://www.surveycake.com'>超連結</a>，<a href='https://www.surveycake.com'><span style='color:#ffffff;'><span style='background-color:#0d858b;'>超連結加底色</span></span></a></div>\n\n<div class='welcometext-content'>&nbsp;</div>\n\n<div class='welcometext-content'>除此之外，你也可以改變字體大小，像是<span style='font-size:18px;'>18</span>,或是<span style='font-size:26px;'>26</span>,或是<span style='font-size:72px;'>72<font face='open sans, helvetica neue, helvetica, arial, sans-serif, apple ligothic, 微軟正黑體, microsoft jhenghei'>那麼大</font></span></div>\n\n<div class='welcometext-content'>&nbsp;</div>\n\n<div class='welcometext-content'>除了這些以外的樣式應該都不支援。</div>\n`;

export const sampleStatementTitle = `<div><div>第一部分</div><div>&nbsp;</div><div><span style='font-size:28px;'>像這個地方</span>你<u>也</u>可以<span style='background-color:#addae7;'>修改</span><span style='color:#84bb43;'>樣式</span>。</div></div>`;

export const sampleQuoteContent = `<span style='color:#ffffff;'><span style='font-size:36px;'><strong><span style='background-color:#000000;'>12月30日，週六晚間7點首播</span></strong></span></span><br />\n<br />\n<strong><span style='font-size:24px;'>深入森林，在寶島中央尋找黑熊的蹤影</span></strong><br />\n<br />\n<span style='color:#666666;'>場景從玉山國家公園核心的大分「有熊國」展開；一個深刻令人著迷、匯集豐富野生動物生態及原住民人文色彩的地方。故事從1998年說起，一位還是博士生的女性動物學家與一位布農獵人，因為尋熊捉熊而在此蠻荒之境建立起深厚的革命情誼。另一方面，本是帶著神秘色彩的台灣黑熊，因著這次的研究，自此被知悉。</span>`;

export const sampleCustomizeText = `<p>邀您填寫【<span style="color:#FF0000"><u>XXXXXXXXXXXX</u></span>】網路問卷！只要符合資格且完整填答此份問卷，即可獲得互動網點數 &nbsp;<span style="color:#FF0000"><u>XXX</u></span> &nbsp; 點！</p>
	<ul style="list-style-type:none; padding:0px; margin-left:0px; font-size:13.5px;">
		<li style="margin-bottom:6px;">
			<div style="font-size:12px; border-radius:4px; width:48px; border:#159DAB 1px solid; color:#159DAB; font-weight:bold; padding:0px 4px;">活動期間</div>
			<div style="padding-bottom:4px; padding-left:64px; margin-top:-21px; display:block; width:100%; box-sizing:border-box;">即日起至 <span style="color:#FF0000"><u>20XX</u></span> 年 <span style="color:#FF0000"><u>XX</u></span> 月 <span style="color:#FF0000"><u>XX</u></span> 日止
			</div>
		</li>
		<li style="margin-bottom:6px;">
			<div style="font-size:12px; border-radius:4px; width:48px; border:#159DAB 1px solid; color:#159DAB; font-weight:bold; padding:0px 4px;">活動方式</div>
			<div style="padding-bottom:4px; padding-left:64px; margin-top:-21px; display:block; width:100%; box-sizing:border-box;">凡登入會員，可透過電腦、平板、手機連結QRCode或活動網址進入問卷開始填答。完整填答後，即可到會員中心確認並兌換【<span style="color:#FF0000"><u>精品禮券</u></span>】喔！
			</div>
		</li>
	</ul>
	<p style="font-size:13px; color:#999999;">(在調查結束後，我們會透過系統進行可信度管理作業，檢定結果如有應答內容邏輯不符、答非所問或非可判斷之文字、不實情況等，將不予贈點，盼您見諒！)</p>
	<div style="text-align:center;">
		<div class="info-block info-block-bonus" style="font-size:14px; border:#dedede 1px solid; border-radius:4px; padding:6px; width:auto; min-width:70px; height:70px; margin:0px 5px; text-align:center; display:inline-block;">
			<img src="https://whostone.svy.do/assets/theme/whostone/template-benifit.png" style="width:42px; height:42px; border:0px !important; outline:none;"/><br/>
			<span style="color:#F78F12;">紅利點數 <span class="replace-bonus">N</span></span>
		</div>
		<div class="info-block info-block-draw" style="font-size:14px; border:#dedede 1px solid; border-radius:4px; padding:6px; width:auto; min-width:70px; height:70px; margin:0px 5px; text-align:center; display:inline-block;">
			<img src="https://whostone.svy.do/assets/theme/whostone/template-gift.png" style="width:42px; height:42px; border:0px !important; outline:none;"/><br/>
			<span style="color:#F78F12;">抽獎機會 <span class="replace-draw">N</span> 次</span>
		</div>
		<div class="info-block info-block-regneed" style="font-size:14px; border:#dedede 1px solid; border-radius:4px; padding:6px; width:auto; min-width:70px; height:70px; margin:0px 5px; text-align:center; display:inline-block;">
			<img src="https://whostone.svy.do/assets/theme/whostone/template-vip.png" style="width:42px; height:42px; border:0px !important; outline:none;"/><br/>
			<span style="color:#F78F12;">會員獨享</span>
		</div>
	</div>
`;

export const sampleCustomizeNewText = `<p>邀您填寫【<u style="color: rgb(255, 0, 0);">XXXXXXXXXXXX</u>】網路問卷！只要符合資格且完整填答此份問卷，即可獲得互動網點數&nbsp;<u style="color: rgb(255, 0, 0);">XXX</u>&nbsp;點！</p>
<p>
    <br>
</p>
<ul>
    <li><strong style="color: rgb(21, 157, 171); font-size: 12px;">活動期間：</strong>即日起至 <u style="color: rgb(255, 0, 0);">20XX</u> 年 <u style="color: rgb(255, 0, 0);">XX</u> 月 <u style="color: rgb(255, 0, 0);">XX</u> 日止</li>
    <li><strong style="color: rgb(21, 157, 171); font-size: 12px;">活動方式：</strong>凡登入會員，可透過電腦、平板、手機連結QRCode或活動網址進入問卷開始填答。完整填答後，即可到會員中心確認並兌換【<u style="color: rgb(255, 0, 0);">精品禮券</u>】喔！</li>
</ul>
<p>(在調查結束後，我們會透過系統進行可信度管理作業，檢定結果如有應答內容邏輯不符、答非所問或非可判斷之文字、不實情況等，將不予贈點，盼您見諒！)</p>
<div class="info-block info-block-bonus">
	<img src="https://whostone.svy.do/assets/theme/whostone/template-benifit.png">
	<span style="color: rgb(247, 143, 18);">紅利點數 N</span>
</div>
<div class="info-block info-block-draw">
	<img src="https://whostone.svy.do/assets/theme/whostone/template-gift.png">
	<span style="color: rgb(247, 143, 18);">抽獎機會 N 次</span>
</div>
<div class="info-block info-block-regneed">
	<img src="https://whostone.svy.do/assets/theme/whostone/template-vip.png">
	<span style="color: rgb(247, 143, 18);">會員獨享</span>
</div>
`;
/* eslint-enable max-len */

export default sample;
