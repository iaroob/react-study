import * as React from "react";

export const RadioGroup = ({ onChange, selected, children}) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, { 
      onChange,
      checked: child.props.value === selected,
    });
  });
  return <div>{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return <div>
    <input id={value} type="radio" name={value} value={value} checked={value} onChange={(e) => {onChange(e.target.value);
    }}
    />
    <label htmlFor={value}>{children}</label>
  </div>
};

<RadioGroup onChange={setSelected} selected={selected}> 
 <RadioOption value="social_media">Social Media</RadioOption> 
 <RadioOption value="friends">Friends</RadioOption> 
 <RadioOption value="advertising">Advertising</RadioOption> 
 <RadioOption value="other">Other</RadioOption>
</RadioGroup> 