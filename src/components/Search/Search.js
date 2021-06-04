import { Input } from 'antd'
import styled from 'styled-components'
const { Search } = Input

const SearchCover = styled.div`
    padding: 0 95px 0 95px;        
`
const SearchCustom = () => {
    return (
        <SearchCover>
            <Search placeholder="input search text" enterButton="Search" size="large" />
        </SearchCover>

    )

}


export default SearchCustom