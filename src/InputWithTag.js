import React, { useState, useImperativeHandle, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/es/input';
import Tag from 'antd/es/tag';
import message from 'antd/es/message';
import 'antd/es/input/style';
import 'antd/es/message/style';
import 'antd/es/tag/style';
import './index.css';

const InputWithTag = (props) => {
  const { value, onChange } = props;
  const [valueInput, setValueInput] = useState('')
  const inputRef = useRef(null);

  function pressEnter(e) {
    if (e.target.value) {
      onChange([...value, e.target.value]);
      setValueInput('');
    } else {
      message.error('No input text');
    }
  }

  function preventDefault(str, e) {
    e.preventDefault();
    onChange(value.filter(item => item !== str));
  }

  function focus() {
    inputRef.current && inputRef.current.focus()
  }

  function handleChange(e) {
    let elm = e.target;
    setValueInput(elm.value)
  }

  // 按下删除监听
  function keyDown(e) {
    if (e.keyCode === 8 && !valueInput) {
      setValue(value.filter(function (v, i, ar) {
        return i !== ar.length - 1
      }))
    }
  }
  
  return (
    <div>
      <div onClick={focus} className='wrap'>
        <ul className='ulClass'>
          {
            value && value.map((item, index) => (<li key={index} style={{ float: 'left', marginBottom: '8px' }}>
              <Tag closable onClose={(e) => preventDefault(item, e)}>
                {item}
              </Tag>
            </li>))
          }
          <li style={{ float: 'left' }}>
            <Input onKeyDown={keyDown} ref={inputRef} value={valueInput} className='inputClass' onPressEnter={pressEnter} onChange={handleChange} />
          </li>
        </ul>
      </div>
    </div>
  );
}

InputWithTag.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
};

export default InputWithTag;
