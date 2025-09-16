import React, {useState} from 'react';
import classes from '../style/SearchBar.module.css'

const SearchBar = (props) => {
    const [searchContent, setSearchContent] = useState('');

    const searchCard = (e) => {
        const val = e.target.value
        setSearchContent(val)
        props.onSearch(val);
    }
    return (
        <div className={classes.Container}>
            <input
                className={classes.Input}
                placeholder={'Search...'}
                value={searchContent}
                onChange={searchCard}
            />
        </div>
    );
};

export default SearchBar;
