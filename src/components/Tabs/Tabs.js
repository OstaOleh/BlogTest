import React from 'react';

const Tabs = ({category, currentCategory, tabClickHandler}) => {
        return(  
        <div className="ui attached tabular menu">
            {category.map((cat, i) => <a href="/" key={i} className={`item ${cat === currentCategory ? 'active': ''}`} onClick={(e) => {
                e.preventDefault();
                tabClickHandler(cat);
            }}>{cat}</a>)}
        </div>
        )
}

export default Tabs;