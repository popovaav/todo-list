import React from 'react';
import {useDispatch} from "react-redux";
import {setFilter, visibilityFilters} from "../../redux/visibility-reducer";


const FilterTasks = () => {
    const dispatch = useDispatch();

    const currentFilter = (filter) => {
        dispatch(setFilter(filter))
    };

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary"
                    onClick={() => currentFilter()}>All
            </button>
            <button type="button" className="btn btn-secondary"
                    onClick={() => currentFilter(visibilityFilters.SHOW_COMPLETED)}>Completed
            </button>
            <button type="button" className="btn btn-secondary"
                    onClick={() => currentFilter(visibilityFilters.SHOW_ACTIVE)}>Active
            </button>
        </div>
    )
};

export default FilterTasks;