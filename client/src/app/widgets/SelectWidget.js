import React from "react";
import Select from "react-select";

export default function SelectWidget(props) {
  const { options, onChange } = props;
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Select
        options={options.enumOptions}
        onChange={e => {
          onChange(e.value);
        }}
      />
    </div>
  );
}
