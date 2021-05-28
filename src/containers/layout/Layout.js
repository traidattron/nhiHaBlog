import React from 'react'
import Navigation from '../../components/Navigation/Navigation'

const LayoutBlog = (props) => {
  const { children } = props
  return (
    <div id='page'>
      <div class="container">
        <header id="masthead" class="site-header">
          <div class="site-branding">
            <h1 class="site-title"><a href="index.html" rel="home">2 NGƯỜI ĐI KHẮP THẾ GIAN</a></h1>
            <h2 class="site-description">Follow your heart</h2>
          </div>

          <Navigation />
        </header>
        {children}
        <footer id="colophon" class="site-footer">
          <div class="container">
            <div class="site-info">
              {/* <h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">Moschino</h1> */}
              <a target="blank" href="https://www.wowthemes.net/">&copy; Zelda & Tê Tê</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LayoutBlog
