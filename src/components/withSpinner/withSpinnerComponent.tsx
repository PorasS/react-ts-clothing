import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

//Higher order component
const withSpinner = (WrappedComponent: any) => {
    const spinner = ({ isLoding, ...otherProps }) => {
        return isLoding ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return spinner;
}

export default withSpinner;