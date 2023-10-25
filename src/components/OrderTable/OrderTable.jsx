import React from 'react';

const OrderTable = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Payment Id</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td><img className='h-10 w-14 rounded-md' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" /></td>

                            <td>Cy Ganderton</td>
                            <td>1kjasadg636va2bd7</td>
                            <td>Quality Control Specialist</td>

                            <td><p>Ordered: 21/02/24</p>
                            <p>Estimate: 25/02/24</p>
                            <p>Serviced: 24/02/24</p>
                            </td>

                            <td>Blue</td>
                            <td>5</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td><img className='h-10 w-14 rounded-md' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" /></td>
                            <td>Cy Ganderton</td>
                            <td>1kjasadg636va2bd7</td>
                            <td>Quality Control Specialist</td>
                            <td>27/12/23</td>
                            <td>Blue</td>
                            <td>5</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td><img className='h-10 w-14 rounded-md' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" /></td>
                            <td>Cy Ganderton</td>
                            <td>1kjasadg636va2bd7</td>
                            <td>Quality Control Specialist</td>
                            <td>27/12/23</td>
                            <td>Blue</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;