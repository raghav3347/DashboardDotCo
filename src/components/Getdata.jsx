import React, { useState } from 'react';

const mockData = [
  { id: 1, name: 'Amit Kumar', age: 32, occupation: 'Software Engineer', monthlyIncome: 60000, taxPaid: 50000 },
  { id: 2, name: 'Sonali Sharma', age: 28, occupation: 'Teacher', monthlyIncome: 25000, taxPaid: 20000 },
  { id: 3, name: 'Rohit Singh', age: 35, occupation: 'Doctor', monthlyIncome: 120000, taxPaid: 100000 },
  { id: 4, name: 'Priya Verma', age: 26, occupation: 'Designer', monthlyIncome: 40000, taxPaid: 30000 },
  { id: 5, name: 'Deepak Verma', age: 40, occupation: 'Business Analyst', monthlyIncome: 80000, taxPaid: 60000 },
  { id: 6, name: 'Neha Gupta', age: 30, occupation: 'Marketing Manager', monthlyIncome: 70000, taxPaid: 55000 },
  { id: 7, name: 'Vikram Patel', age: 29, occupation: 'Accountant', monthlyIncome: 35000, taxPaid: 28000 },
  { id: 8, name: 'Anjali Rao', age: 33, occupation: 'HR Manager', monthlyIncome: 65000, taxPaid: 50000 },
  { id: 9, name: 'Manish Kumar', age: 37, occupation: 'Architect', monthlyIncome: 90000, taxPaid: 75000 },
  { id: 10, name: 'Kiran Chauhan', age: 27, occupation: 'Content Writer', monthlyIncome: 30000, taxPaid: 25000 },
];

function GetData() {
  const [data, setData] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filter data by name or occupation
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting function
  const sortData = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...filteredData].sort((a, b) => {
      if (typeof a[field] === 'string') {
        if (a[field].toLowerCase() < b[field].toLowerCase()) return order === 'asc' ? -1 : 1;
        if (a[field].toLowerCase() > b[field].toLowerCase()) return order === 'asc' ? 1 : -1;
        return 0;
      } else {
        return order === 'asc' ? a[field] - b[field] : b[field] - a[field];
      }
    });
    setSortField(field);
    setSortOrder(order);
    setData(sorted);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="getdata-container">
      <h2>Data Table</h2>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by name or occupation"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
        <div className="sort-buttons">
          <button onClick={() => sortData('name')}>
            Sort Name {sortField === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button onClick={() => sortData('age')}>
            Sort Age {sortField === 'age' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button onClick={() => sortData('monthlyIncome')}>
            Sort Income {sortField === 'monthlyIncome' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </button>
          <button onClick={() => sortData('taxPaid')}>
            Sort Tax {sortField === 'taxPaid' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Monthly Income</th>
            <th>Tax Paid</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
              <td>{item.monthlyIncome}</td>
              <td>{item.taxPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >Next</button>
      </div>
    </div>
  );
}

export default GetData;
