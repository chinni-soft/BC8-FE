import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const CustomSearchBar = (props) => {
    const {defaultIconClass, textFieldClass, inputClass, underlineClass, placeholder} = props;
    return (
        <TextField
            className={textFieldClass}
            id="search-field"
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" className={defaultIconClass}>
                        <SearchIcon/>
                    </InputAdornment>
                ),
                classes: {
                    input: inputClass,
                    underline: underlineClass
                }

            }}
        />
    )
}
export default CustomSearchBar;