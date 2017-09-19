import React from 'react';
import { Table } from 'antd';
import { apiGet } from '../api/request';
// Promise
import request from '../utils/request';

class TableCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
      total: 0,
      current: 1,
    };
  }
  componentDidMount() {
    this.initialRemarks();
  }
  initialRemarks = async () => {
    this.refresh();
    this.setState({
      columns: [{
        title: '序号',
        width: 100,
        dataIndex: 'id',
      }, {
        title: '所属楼宇',
        dataIndex: 'buildName',
      }, {
        title: '房间编号',
        dataIndex: 'roomNumber',
      }, {
        title: '客户名称',
        dataIndex: 'clientSubletName',
      }, {
        title: '本期水费周期',
        dataIndex: 'cycle',
      }, {
        title: '本次总水量',
        dataIndex: 'totalWater',
      }, {
        title: ' 本次应收',
        dataIndex: 'receivableMoney',
      }, {
        title: ' 交费期限',
        dataIndex: 'overdueDate',
      }, {
        title: ' 操作',
        width: 200,
        dataIndex: 'opt',
        render() {
          return (
            <span>
              <a>操作</a>
            </span>
          );
        },
      },
      ],
    });
  }
  refresh = async (pagination, filters, sorter) => {
    console.log(pagination);
    console.log(filters);
    console.log(sorter);
    console.log('刷新方法');
    console.log('请求开始');
    const data = await apiGet(
      'test.json',
    );
    const datatwo = request('test.json');
    console.log(datatwo);
    console.log('请求结束了');
    console.log(data);
    this.setState({
      dataSource: data.data.rows,
    });
  }
  render() {
    return (
      <div>
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          onChange={this.refresh}
          bordered
          pagination={{ total: this.state.total,
            showSizeChanger: true,
            showQuickJumper: true,
            current: this.state.current,
            pageSizeOptions: ['15', '30', '45'],
            defaultPageSize: 30 }}
        />
      </div>
    );
  }
}

export default TableCom;
