import { Tooltip } from "@mui/material";
import React from "react";

const ToolTipWrapper = React.forwardRef(function ToolTipWrapper(props, ref) {
    //  Spread the props to the underlying DOM element.
    const { title, arrow, ariaLabel, ...rest } = props;
    return (
        <Tooltip {...props}>
            <div {...rest} ref={ref}>
                {props.children}
            </div>
        </Tooltip>
    );
});
export default ToolTipWrapper;
