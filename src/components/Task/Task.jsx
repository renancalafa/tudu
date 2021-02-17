import React from 'react';
import './Task.css';
// import 'antd/dist/antd.css';
// import { Collapse } from 'antd';

const Task = ({ item }) => (
  <li>
    <h3>{item.task}</h3>
    <p>{item.description}</p>
  </li>
);

// const { Panel } = Collapse;

// const Task = (item) => (
//   <div>
//     <Collapse defaultActiveKey={['0']}>
//       <Panel header={item.task} key="1">
//         <p>{item.description}</p>
//       </Panel>
//     </Collapse>
//   </div>
// );

export default Task;
