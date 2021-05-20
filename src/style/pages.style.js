import styled from 'styled-components'

const BlogsCover = styled.div`
	display: flex!important;
	flex-direction: row!important;
	flex-wrap: wrap!important;
`
const HomeCover = styled.div`
	background-image: url('homebg.JPG');
	background-repeat: no-repeat;
	height: 75vh;
	text-align: center;
	padding-top: 180px;
	margin-bottom: 20px;
`
const ImgAboutCover = styled.p`
	text-align: center;
	img{
			border:10px solid #f4f5f6;
		border-radius: 50%;
		width: 150px;
		height: 150px;
	}
	
`
const AuthorBlock = styled.div`
  	width: 50%;
    padding-right: 20px;
	&:hover {
		/* border: 10px solid black; */
		/* font-size: 16px; */
		cursor: pointer;
	}
`
export {
	BlogsCover,
	HomeCover,
	ImgAboutCover,
	AuthorBlock
}