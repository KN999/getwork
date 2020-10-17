import React, { Fragment, useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import './Table.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'employee_name', headerName: 'Employee Name', width: 140 },
  { field: 'employee_salary', headerName: 'Employee Salary', width: 150 },
  { field: 'employee_age', headerName: 'Employee Age', width: 130 },
  { field: 'employee_age', headerName: 'Age', type: 'number', width: 90 }
];

function Table() {
    
    const [row, setRow] = useState({ data: []});
   
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://dummy.restapiexample.com/api/v1/employees');
        
        setRow(result.data);

      };
   
      fetchData();

    }, []);

    const [query, setQuery] = useState('');
    const onChange = () => {
      alert('onChange called');
    }

    const onClick = () => {
      alert('onClick called');
    }
    // const onClick = () => {
    //   let results = []
    //   for(let i=0; i<row.data.length; i++) {
    //     for(key in row.data[i]) {
    //       if(row.data[i][key].indexOf(query)!=-1) {
    //         results.push(row.data[i]);
    //       }
    //     }
    //   }
    // }
  
   return (
     <div style={{ height: 400, width: '100%' }}>
       <div className="margin-100">
         <input type='text' onChange={(e) => {onChange(e)}}/>
         <input type='submit' onClick={(e) => {onClick()}}/>
       </div>
       <div style={{ height: 400, width: '100%' }} >
        <DataGrid rows={row.data} columns={columns} pageSize={5} checkboxSelection />
      </div>
     </div>
   );
  }

export default Table;
