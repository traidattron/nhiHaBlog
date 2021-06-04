import React from 'react'
import { HeaderBlock, HeaderContentCover, NavigatorCover } from '../components/Block/HeaderBlock'
import MyNavigation from '../components/Navigation/Navigation'
import SearchCustom from '../components/Search/Search'
import { TextLarge, TextSmall } from '../components/Text/Text'
import { Image } from 'antd';



const Home = () => {

   return (
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
               <TextLarge>
                  HAI NGƯỜI ĐI
                  KHẮP THẾ GIAN
            </TextLarge>
               <TextSmall>
                  THE ONLY TRIP YOU WILL REGRET

                  IS THE ONE YOU DON’T TAKE
                  Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (About this soundlisten) bə-RAHK hoo-SAYN oh-BAH-mə;[1] born August 4, 1961) is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, Obama was the first African-American president of the United States. He previously served as a U.S. senator from Illinois from 2005 to 2008 and as an Illinois state senator from 1997 to 2004.

                  Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black president of the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. Turning to elective politics, he represented the 13th district in the Illinois Senate from 1997 until 2004, when he ran for the U.S. Senate. Obama received national attention in 2004 with his March Senate primary win, his well-received July Democratic National Convention keynote address, and his landslide November election to the Senate. In 2008, he was nominated by the Democratic Party for president a year after beginning his campaign, and after a close primary campaign against Hillary Clinton. Obama was elected over Republican nominee John McCain in the general election and was inaugurated alongside his running mate, Joe Biden, on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate.

                  Obama signed many landmark bills into law during his first two years in office. The main reforms that were passed include the Affordable Care Act (commonly referred to as ACA or "Obamacare"), although without a public health insurance option, the Dodd–Frank Wall Street Reform and Consumer Protection Act, and the Don't Ask, Don't Tell Repeal Act of 2010. The American Recovery and Reinvestment Act of 2009 and Tax Relief, Unemployment Insurance Reauthorization, and Job Creation Act of 2010 served as economic stimuli amidst the Great Recession. After a lengthy debate over the national debt limit, he signed the Budget Control and the American Taxpayer Relief Acts. In foreign policy, he increased U.S. troop levels in Afghanistan, reduced nuclear weapons with the United States–Russia New START treaty, and ended military involvement in the Iraq War. He ordered military involvement in Libya for the implementation of the UN Security Council Resolution 1973, contributing to the overthrow of Muammar Gaddafi. He also ordered the military operation that resulted in the killing of Osama bin Laden.

                  After winning re-election by defeating Republican opponent Mitt Romney, Obama was sworn in for a second term in 2013. During this term, he promoted inclusion for LGBT Americans. His administration filed briefs that urged the Supreme Court to strike down same-sex marriage bans as unconstitutional (United States v. Windsor and Obergefell v. Hodges); same-sex marriage was legalized nationwide in 2015 after the Court ruled so in Obergefell. He advocated for gun control in response to the Sandy Hook Elementary School shooting, indicating support for a ban on assault weapons, and issued wide-ranging executive actions concerning global warming and immigration. In foreign policy, he ordered successful military interventions in Iraq and Syria in response to gains made by ISIL after the 2011 withdrawal from Iraq, continued the process of ending U.S. combat operations in Afghanistan in 2016, promoted discussions that led to the 2015 Paris Agreement on global climate change, initiated sanctions against Russia following the invasion in Ukraine and again after interference in the 2016 U.S. elections, brokered the JCPOA nuclear deal with Iran, and normalized U.S. relations with Cuba. Obama nominated three justices to the Supreme Court: Sonia Sotomayor and Elena Kagan were confirmed as justices, while Merrick Garland faced partisan obstruction from the Republican-led Senate led by Mitch McConnell, which never held hearings or a vote on the nomination. Obama left office i
               </TextSmall>


            </div>

         </HeaderContentCover>

      </HeaderBlock>
   )
}

export default Home