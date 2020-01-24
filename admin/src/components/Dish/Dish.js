import React from 'react';
import Button from '../UI/Button/Button';

import { MdEdit, MdDeleteForever } from 'react-icons/md';

const Dish = props => (
  <div className="d-flex border border-dark rounded  m-1 align-items-center">
    <div className="col-3 p-3" >
      <img className="border" src={props.img} alt={props.title} width="100px"/>
    </div>
    <div className="col-4">
      <h5>{props.title}</h5>
    </div>
    <div className="col-3 text-center">
      <p className="m-0">KGS {props.price}</p>
    </div>
    <div className="col-2 d-flex justify-content-center">
      <Button
        style={{fontSize: '40px'}}
        click={props.edit}
        label={<MdEdit/>}
        addClass='close'
      />
      <Button
        style={{fontSize: '40px'}}
        click={props.remove}
        label={<MdDeleteForever/>}
        addClass='close'
      />
    </div>
  </div>
);

export default Dish;