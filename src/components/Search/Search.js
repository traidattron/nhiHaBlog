import { Input } from 'antd'
import styled from 'styled-components'
const { Search } = Input

const SearchCover = styled.div`
    padding: 0 95px 0 95px;   
    width: 50%;     
`
const RoundSearch = styled(Input.Search)`
  .ant-input {
    border-radius: 25px;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
  
    border-radius: 0 25px 25px 0 !important;
}
`;
const SearchCustom = () => {
    return (
        <SearchCover>
            <RoundSearch placeholder="input search text" enterButton="Search" size="large" />
        </SearchCover>

    )

}


export default SearchCustom