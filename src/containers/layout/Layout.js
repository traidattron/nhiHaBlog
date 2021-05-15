import React from 'react'

const LayoutBlog = (props) => {
  const { children } = props
  return (
    <div id='page'>
      <div class="container">
        <header id="masthead" class="site-header">
          <div class="site-branding">
            <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
            <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
          </div>
          <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle">Menu</button>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div class="menu-menu-1-container">
                <ul id="menu-menu-1" class="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </div>
          </nav>
      
        </header>
        {children}
        <footer id="colophon" class="site-footer">
                <div class="container">
                    <div class="site-info">
                        {/* <h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">Moschino</h1> */}
                        <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
                    </div>
                </div>
        </footer>
      </div>
    </div>
  )
}

export default LayoutBlog
