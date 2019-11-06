import React from 'react';

const withClass = (WrapedComponent,className) => {
    return props => (
        <div className={className}>
            <WrapedComponent />
        </div>
    );
};

export default withClass;