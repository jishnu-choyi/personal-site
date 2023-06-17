import React from "react";

const ToolTipWrapper = React.forwardRef(function ToolTipWrapper(props, ref) {
    //  Spread the props to the underlying DOM element.
    return (
        <div {...props} ref={ref}>
            {props.children}
        </div>
    );
});
export default ToolTipWrapper;
