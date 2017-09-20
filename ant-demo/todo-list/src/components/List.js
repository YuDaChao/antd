/**
 * Created by apple on 2017/9/4.
 */
import React from 'react'
import { Table, Popconfirm, Button } from 'antd'

const List = ({ onDelete, lists }) => {
  console.log(lists)
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ]
  return (
    <Table
      dataSource={lists}
      columns={columns}
      pagination={{pageSize: 6}}
    />
  )
}

export default List









