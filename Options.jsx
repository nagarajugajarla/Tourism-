import React, { Component } from 'react';

const list = [
    {
      firstname: 'Robin',
    },
    {
      firstname: 'Dave',
    }
  ];
  const Options = () => (
    <div>
      {list.map(item => (  <select key={item.firstname}></select>
      ))}
    </div>
  );

  export default Options;