/**
 * Created by apple on 2017/9/4.
 */
import React from 'react'
import { Input, Icon, Button } from 'antd'

const Add = ({ onAdd, onChange, input }) => (
  <div>
    <Input
      placeholder="Enter your userName"
      prefix={<Icon type="user" />}
      value={input}
      onChange={onChange}
    />
    <Button type="primary" onClick={ onAdd }>添加</Button>
  </div>
)

export default Add








