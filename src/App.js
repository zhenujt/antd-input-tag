/*
 * @Author: Hong.Zhang
 * @Date: 2023-03-21 13:27:31
 * @Description: 
 */

import React, { useState } from "react";
import Main from './main';

export default () => {
  const [value, setValue] = useState([]);
  return (
    <Main
      value={value}
      onChange={setValue}
    />
  );
}