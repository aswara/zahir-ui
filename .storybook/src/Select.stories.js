import React, { useState } from "react";
import {
  Select,
  ListItem
} from 'zahir-ui';


export default {
  component: Select,
  title: 'Components/Select',
};


export const simple = () => {
  const [ value, setValue ] = useState(null);

  const formatLabel = (options) => {
    return options.map(option => ({
      value: option.value,
      label: 
        <ListItem
          primary={option.label}
          selected={value && option.value === value.value}
          isSelect
        />
    }))
  }

  const options = [
    {
      value: 'Active',
      label: 'Active'
    }, {
      value: 'Inactive',
      label: 'Inactive'
    }
  ];

  const handleChange = (val) => {
    setValue(val);
  }

  
  return (
  <Select
    options={formatLabel(options)}
    value={value}
    onChange={handleChange}
    fullWidth
  />
)};

export const label = () => {
  const [ value, setValue ] = useState(null);

  const formatLabel = (options) => {
    return options.map(option => ({
      value: option.value,
      label: 
        <ListItem
          primary={option.label}
          selected={value && option.value === value.value}
          isSelect
        />
    }))
  }

  const options = [
    {
      value: 'Active',
      label: 'Active'
    }, {
      value: 'Inactive',
      label: 'Inactive'
    }
  ];

  const handleChange = (val) => {
    setValue(val);
  }

  
  return (
  <Select
    label="Status"
    options={formatLabel(options)}
    value={value}
    onChange={handleChange}
    fullWidth
  />
)};

export const creatableMulti = () => {
  const [ value, setValue ] = useState(null);
  const [ inputValue, setInputValue ] = useState('');

  const [ menuIsOpen, setMenuIsOpen ] = useState(null);


  const formatLabel = (options) => {
    return options.map(option => ({
      value: option.value,
      label: 
        <ListItem
          primary={option.label}
          selected={value && option.value === value.value}
          description={option.description}
          isSelect
        />
    }))
  }

  const options = [
    {
      value: '{CODE}',
      label: '{CODE}',
      description: 'value: SI'
    }, {
      value: '{NUMBER}',
      label: '{NUMBER}',
      description: 'value: 0001'
    }
  ];

  
  const handleInputChange = (value) => {
    console.log(value)
    setInputValue(value);
  }

  const createOption = (label) => ({
    label: <span style={{ color: 'red' }}>{label}</span>,
    value: label,
    type: 'input'
  });

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        const newValue = value || [];
        setValue([...newValue, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };

  const handleChange = (v) => {
    const newValue = v.map(item => {
      return {
        ...item,
        label: item.type === 'input' ? item.label : item.value
      }
    });
    setValue(newValue);
  }

  const handleCreate = (val) => {
    const newValue = value || [];
    setValue([...newValue, createOption(val)]);
  }

  const formatCreateLabel = (val) => {
    return `Enter to add value: ${val}`
  }

  return (
    <Select
      options={formatLabel(options)}
      value={value}
      inputValue={inputValue}
      fullWidth
      isMulti
      creatable
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onCreateOption={handleCreate}
      formatCreateLabel={formatCreateLabel}
      placeholder="Input your format"
    />
)};

