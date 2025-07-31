import React, {useEffect, useState} from 'react';
import classes from '../style/SearchSidebar.module.css'

const SearchSidebar = (props) => {
    const [searchContent, setSearchContent] = useState('');

    const searchCard= (e)=>{
        const val = e.target.value
        setSearchContent(val)
        props.onSearch(val);
    }

    useEffect(() => {

    }, [searchContent]);

    return (
        <div className={classes.Container}>
            <input
                className={classes.Input}
                placeholder={'Search'}
                value={searchContent}
                onChange={searchCard}
            />

        </div>
    );
};

export default SearchSidebar;