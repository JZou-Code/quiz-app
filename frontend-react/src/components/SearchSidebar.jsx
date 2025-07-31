import React, {useEffect, useState} from 'react';
import classes from '../style/SearchSidebar.module.css'

const SearchSidebar = () => {
    const [searchContent, setSearchContent] = useState('');

    const onSearch = (e) => {
        setSearchContent(e.target.value);
    }

    useEffect(() => {

    }, [searchContent]);

    return (
        <div className={classes.Container}>
            <input
                className={classes.Input}
                placeholder={'Search'}
                value={searchContent}
                onChange={onSearch}
            />

        </div>
    );
};

export default SearchSidebar;