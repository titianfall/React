import React, {memo, useMemo} from 'react';

function computeExpensiveValue(a, b) {
}
function UseMemo(props) {
    const memoizedValue = useMemo(
        () => computeExpensiveValue(a, b)
    );
}


