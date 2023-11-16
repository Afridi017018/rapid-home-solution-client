import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAllOrders, updateOrderStatus } from '../../apiCalls/orders';
import Loading from '../../pages/Loading/Loading';
import moment from 'moment'

const Orders = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([]);



  const getAllOrderData = async () => {
    // setIsLoading(true);
    const data = await getAllOrders();
    // console.log(data.orders);
    setOrders(data.orders)
    // setIsLoading(false)
  }

  useEffect(() => {
    getAllOrderData();
  }, [])



  // if(isLoading)
  // {
  //   return <Loading />
  // }


  const currentStatus = [
    "pending",
    "reviewing",
    "on the way",
    "serviced",
    "canceled",
    "failed"
  ]



  const handleChangedStatus = async (orderId, status)=>{

    // console.log(orderId,status);
    const data = await updateOrderStatus({orderId, status});
    // console.log(data);

    getAllOrderData();
    

  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 overflow-x-auto">
      <strong className="text-gray-700 font-medium">View Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="py-2">Order ID</th>
              <th className="py-2">Service Name</th>
              <th className="py-2">Order Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td className="py-2">{order._id}</td>
                <td className="py-2">{order.serviceId.title}</td>
                <td className="py-2">{moment(order.createdAt).format('DD/MM/YYYY, hh:mm A')}</td>
                <td className="py-2">${order.amount}</td>
                <td className="py-2">
                  <span
                    className={`inline-block py-1 px-2 rounded capitalize w-24 text-center ${order.status === 'reviewing' ? 'bg-pink-700 text-white' : order.status === 'on the way' ? 'bg-yellow-700 text-white' : order.status === 'serviced' ? 'bg-green-700 text-white' : order.status === 'canceled' ? 'text-gray-600 font-bold italic' : order.status === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-700 text-white'}`}
                    
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2">

                  <select
                  name='status'
                  defaultValue={order.status}
                  className="w-full border p-2 rounded capitalize"
                  onChange={(e)=>handleChangedStatus(order._id, e.target.value)}
                  >
                 {
                  currentStatus.map((element)=>(
                    <option key={element} value={element} className="capitalize">{element}</option>
                  ))
                 }
                  </select>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;