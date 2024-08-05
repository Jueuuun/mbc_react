import React from 'react'

const Footer = () => {
	return (
		<footer id='footer' role='contentinfo'>
			<div className="footer_inner">
				<div className="footer_text">
					<span>HanJuEun</span> 
					<span>h.p:010-0000-0000</span>
				</div>
				<div className="footer_info">
					<div className="left">
						<div className="title">
							<a href="/">포트폴리오 마무리 영역</a>
						</div>
						<p>그동안 너무 고생하셨습니다.</p>
					</div>
					<div className="right">
						<h3>목록</h3>
						<ul>
							<li>
								<a href="/">l차 포트폴리오</a>
								<em>패션 쇼핑몰 사이트</em>
							</li>
							<li>
								<a href="/">팀프로젝트</a>
								<em>게임회사 사이트</em>
							</li>
							<li>
								<a href="/">2차 포트폴리오</a>
								<em>금융회사 사이트</em>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer_bottom">
					&copy; 2024 Jueun <br/>
					개인 포트폴리오입니다. 
					상업 목적으로 사용하지 않습니다.
				</div>
				

			</div>
		</footer>
	)
}

export default Footer
