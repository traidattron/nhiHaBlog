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
export {
	BlogsCover,
	HomeCover
}