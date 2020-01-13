import React from 'react';

const Pisces = React.memo(() => {
    return (
        <React.Fragment>
            <div> Pisces Component </div>
        </React.Fragment>
    );
});

export default Pisces;
Pisces.displayName = 'Pisces';
