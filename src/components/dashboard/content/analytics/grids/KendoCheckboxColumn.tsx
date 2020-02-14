import React, { useState, SyntheticEvent } from "react";
import { GridCellProps } from "@progress/kendo-react-grid";


const KendoCheckboxColumn: React.FC<GridCellProps> = ({ dataItem, field }) => {
    return (
        <td>
            <input type="checkbox" checked={dataItem[field!]} disabled={true} />
        </td>
    );
}

export default KendoCheckboxColumn;
