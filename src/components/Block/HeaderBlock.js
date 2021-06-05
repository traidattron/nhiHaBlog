import styled from 'styled-components'
import colors from '../../theme/colors'

export const HeaderBlock = styled.div`
    background-image: url('home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    
`
export const HeaderContentCover = styled.div`
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    display: flex!important;
    padding: 200px 0 150px;
    webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
`
export const NavigatorCover = styled.div`
    -webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
`
export const TitleBlock = styled.div`
    background-color: ${colors.background};
    min-height: 217px;
    padding: 0 !important;
    display: flex!important;
    padding: 200px 0 150px;
    webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
`

export const OnlyCenter = styled.div`
    webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
`
export const FlexJustify = styled.div`
   
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-box-pack: start!important;
    -ms-flex-pack: start!important;
    justify-content: flex-start!important;
`

export const FlexVertical = styled.div`
    background-color: ${colors.background};
    align-items: center;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-box-orient: vertical!important;
    -webkit-box-direction: normal!important;
    -ms-flex-direction: column!important;
    flex-direction: column!important;
`