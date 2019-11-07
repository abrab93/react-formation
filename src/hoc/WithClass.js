import React from 'react';

const withClass = (WrapedComponent,className) => {
    return props => (
        <div className={className} >
            <WrapedComponent {...props}/>
        </div>
    );
};

export default withClass;