import { Input } from 'antd';
import styled from 'styled-components';
const { Search } = Input;

const SearchCover = styled.div`
    padding: 0 95px;
    width: 70%;
`;

const SearchCustom = () => {
    return (
        <SearchCover>
            <Search
                prefix={<img width={25} alt='search-icon' src='/search-icon.svg'></img>}
                placeholder='Typing'
                allowClear
                enterButton='Search'
                size='large'
                onSearch={() => console.log('search function here')}
            />
        </SearchCover>
    );
};

export default SearchCustom;
