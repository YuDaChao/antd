/**
 * Created by apple on 2017/9/4.
 */
import React, { Component } from 'react'
import { connect } from 'dva'


const count = ({props}) => (
  <div>
    <h2>{ props.count }</h2>
    <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
    <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
  </div>
)

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.count,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(count)
