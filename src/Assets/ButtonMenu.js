import React , { Component } from 'react';

function ButtonMenu (prop) {
    return (
        <button type="button" class="btn btn-light w-100 my-1">{prop.name}</button>
        )   
}
export default ButtonMenu;