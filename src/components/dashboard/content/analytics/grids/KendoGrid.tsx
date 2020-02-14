import React, { useState } from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import './kendoGridStyles.css';
import { Grid, GridColumn, GridDataStateChangeEvent } from "@progress/kendo-react-grid";
import { DropDownList, DropDownListChangeEvent } from "@progress/kendo-react-dropdowns";
import { process, State } from "@progress/kendo-data-query";
import { Window } from '@progress/kendo-react-dialogs';
import products from './kendoGridProducts.json';
import categories from './kendoGridCategories.json';
import KendoCheckboxColumn from './KendoCheckboxColumn';

interface IKendoGrid {
    title: string
}

type TGridPage = { skip: number, take: number }
type TGridDataState = State & {
    page: TGridPage
}

const useStyles = makeStyles((theme: Theme) => ({
    cell: {
        // padding: 50,
        '@media (min-width: 1024px)': {
            // padding: 50,
        }
    },
}));

const KendoGrid: React.FC<IKendoGrid> = ({ title }) => {

    const classes = useStyles();

    const [dropDownListCategory, setDropDownListCategory] = useState<string | null>(null);
    const [gridDataState, setGridDataState] = useState<Partial<TGridDataState>>({
        sort: [
            { field: "ProductName", dir: "asc" }
        ],
        page: { skip: 0, take: 10 }
    });

    const handleDropDownChange = (e: DropDownListChangeEvent) => {
        let newDataState = { ...gridDataState };
        if (e.value.CategoryID !== null) {
            newDataState.filter = {
                logic: 'and',
                filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
            }
            newDataState.skip = 0
        } else {
            newDataState.filter = undefined;
            newDataState.skip = 0
        }

        setDropDownListCategory(e.target.value.CategoryID);
        setGridDataState(newDataState);
    }

    const handleGridDataStateChange = (e: GridDataStateChangeEvent) => {
        setGridDataState(e.data);
    }


    return (
        <>
            <h2>{title}</h2>
            <p>
                <DropDownList
                    data={categories}
                    dataItemKey="CategoryID"
                    textField="CategoryName"
                    defaultItem={{ CategoryID: null, CategoryName: "Product categories" }}
                    onChange={handleDropDownChange}
                />
                &nbsp; Selected category ID: <strong>{dropDownListCategory}</strong>
            </p>

            <Grid
                data={process(products, gridDataState)}
                pageable={true}
                // resizable={true}
                sortable={true}
                {...gridDataState}
                onDataStateChange={handleGridDataStateChange}
                style={{ height: "400px" }}>
                <GridColumn
                    field="ProductName"
                    title="Product Name"
                    className={clsx(classes.cell)}
                />
                <GridColumn
                    field="UnitPrice"
                    title="Price"
                    format="{0:c}"
                />
                <GridColumn
                    field="UnitsInStock"
                    title="Units in Stock"
                />
                <GridColumn
                    field="Discontinued"
                    cell={KendoCheckboxColumn}
                />
            </Grid>
        </>
    );
};

export default KendoGrid;
