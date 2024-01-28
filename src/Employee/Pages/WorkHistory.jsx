import React from 'react';

const WorkHistory = () => {
    return (
        <div>
           <div className='text-2xl font-bold text-center my-5'>
            History
           </div>
           <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Order ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Category</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
     
        <td>65a575087041f39663a26db6</td>
        <td>Zemlak, Daniel and Leannon</td>
        
        <td>01862409663</td>
        <td>Plumber</td>
        <td>Agrabad</td>
      </tr>
      
    </tbody>
   
    
  </table>
</div>
        </div>
        </div>
    );
};

export default WorkHistory;