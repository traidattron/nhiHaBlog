import React from 'react'
import { HeaderBlock, HeaderContentCover, NavigatorCover, TitleBlock, OnlyCenter } from '../components/Block/HeaderBlock'
import MyNavigation from '../components/Navigation/Navigation'
import SearchCustom from '../components/Search/Search'
import {Title, TextLarge, TextSmall} from '../components/Text/Text'
import { Image } from 'antd';
import { LineOutlined } from '@ant-design/icons'
import LastedBlogBlock from '../components/Block/LastedBlogBlock'
import Footer from '../components/Footer/Footer'
import BlogsBlock from '../components/Block/BlogsBlock'


const Home = () => {
   return (
      <>
         <HeaderBlock>
            <NavigatorCover>
               <Image
                  width={200}
                  src='mylogo.svg'
                  preview={{
                     src: 'mylogo.svg'
                  }}
               />
               <MyNavigation id='my-navigator' />
            </NavigatorCover>
            <HeaderContentCover>
               <SearchCustom />
               <div>
                  <Title>
                     HAI NGƯỜI ĐI
                     KHẮP THẾ GIAN
                  </Title>
                  <TextSmall>
                     THE ONLY TRIP YOU WILL REGRET
                     IS THE ONE YOU DON’T TAKE
                   </TextSmall>
               </div>

            </HeaderContentCover>

         </HeaderBlock>
         <TitleBlock>
            <div style={{ lineHeight: '0' }}>
               <TextLarge style={{ color: 'black' }}>LASTED BLOG</TextLarge>
               <OnlyCenter>

                  <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
               </OnlyCenter>
            </div>


         </TitleBlock>
         <LastedBlogBlock />

         <TitleBlock>
            <div style={{ lineHeight: '0' }}>
               <TextLarge style={{ color: 'black' }}>OUR BLOGS</TextLarge>
               <OnlyCenter>

                  <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
               </OnlyCenter>
            </div>


         </TitleBlock>
         <BlogsBlock />
         <Footer />
      </>
   )
}

export default Home