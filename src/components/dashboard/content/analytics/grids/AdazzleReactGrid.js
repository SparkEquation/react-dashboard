import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import { ToolsPanel, Data, Draggable } from "react-data-grid-addons";

import "./styles.css";

const DraggableContainer = Draggable.Container;
const Toolbar = ToolsPanel.AdvancedToolbar;
const GroupedColumnsPanel = ToolsPanel.GroupedColumnsPanel;

const defaultColumnProperties = {
    width: 160,
    draggable: true
};

const columns = [
    {
        key: "id",
        name: "ID"
    },
    {
        key: "firstName",
        name: "First Name"
    },
    {
        key: "lastName",
        name: "Last Name"
    },
    {
        key: "jobTitle",
        name: "Job Title"
    },
    {
        key: "jobArea",
        name: "Job Area"
    },
    {
        key: "jobType",
        name: "Job Type"
    },
    {
        key: "email",
        name: "Email"
    },
    {
        key: "street",
        name: "Street"
    },
    {
        key: "zipCode",
        name: "ZipCode"
    },
    {
        key: "date",
        name: "Date"
    },
    {
        key: "catchPhrase",
        name: "Catch Phrase"
    }
].map(c => ({ ...c, ...defaultColumnProperties }));

const ROW_COUNT = 50;

const CustomToolbar = ({
    groupBy,
    onColumnGroupAdded,
    onColumnGroupDeleted
}) => {
    return (
        <Toolbar>
            <GroupedColumnsPanel
                groupBy={groupBy}
                onColumnGroupAdded={onColumnGroupAdded}
                onColumnGroupDeleted={onColumnGroupDeleted}
            />
        </Toolbar>
    );
};

const groupColumn = columnKey => groupBy => {
    const columnGroups = groupBy.slice(0);
    const activeColumn = columns.find(c => c.key === columnKey);
    const isNotInGroups =
        columnGroups.find(c => activeColumn.key === c.name) == null;
    if (isNotInGroups) {
        columnGroups.push({ key: activeColumn.key, name: activeColumn.name });
    }
    return columnGroups;
};

const ungroupColumn = columnKey => groupBy => {
    return groupBy.filter(g =>
        typeof g === "string" ? g !== columnKey : g.key !== columnKey
    );
};

function AdazzleReactGrid({ title, rows }) {
    const [groupBy, setGroupBy] = useState([]);
    const groupedRows = Data.Selectors.getRows({ rows, groupBy });
    return (
        <>
            <h2>{title}</h2>
            <DraggableContainer>
                <ReactDataGrid
                    columns={columns}
                    rowGetter={i => groupedRows[i]}
                    rowsCount={groupedRows.length}
                    minHeight={650}
                    enableDragAndDrop={true}
                    toolbar={
                        <CustomToolbar
                            groupBy={groupBy}
                            onColumnGroupAdded={columnKey => setGroupBy(groupColumn(columnKey))}
                            onColumnGroupDeleted={() => []}
                        />
                    }
                />
            </DraggableContainer>
        </>
    );
}

export default AdazzleReactGrid;
