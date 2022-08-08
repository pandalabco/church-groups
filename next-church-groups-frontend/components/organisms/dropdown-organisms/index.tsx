import React, { Fragment } from "react"

import Select from "react-select"

const SearchOrganism = ({ options, onChange }) => {
  return (
    <Fragment>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isClearable
        isSearchable
        name="color"
        options={options}
        onChange={onChange}
      />
    </Fragment>
  )
}

export default SearchOrganism
