import React from 'react';
import { connect } from 'dva';
import Add from '../components/Add'
import List from '../components/List'
import styles from './List.css';

const Lists = ({ dispatch, lists, inputs }) => {
  console.log(lists)
  console.log("inputs : ",inputs)
  function handleDelete(id) {
    console.log("id : ", id)
    dispatch({
      type: 'lists/delete',
      payload: id
    })
  }
  function handleAdd() {
    console.log("----> handleAdd")
    dispatch({
      type: 'lists/add',
      payload: inputs.input
    })
  }
  function handleChange(e){
    console.log("handleChange----> ",e.target.value)
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    })
  }
  return (
    <div className={styles.normal}>
      <Add onAdd={handleAdd} onChange={handleChange} input={inputs.input}/>
      <br/><hr/>
      <h2>List of Products</h2>
      <List onDelete={handleDelete} lists={lists}/>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state)
  return {
    inputs: state.inputs,
    lists: state.lists
  };
}

export default connect(mapStateToProps)(Lists);
