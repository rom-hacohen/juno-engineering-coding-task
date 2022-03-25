////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";
// 
////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

export const fetchAllOrders = async () => {
  const ids = allIds;
  const arr = [];
  for (let i of ids) {
    const data = await fetchOrderById(i);
    arr.push(data);
  }
  return arr;
  // .....
  //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
};

const bucketOrdersByUsers = async () => {
  const ordersByUsers = {};
  const data = await fetchAllOrders();
  data.map(
    (ele) =>
      (ordersByUsers[ele.userId] = data.filter(
        (order) => order.userId == ele.userId
      ))
  );
  return ordersByUsers;
  //   2. TODO: using the function from section 1 you should now bucket the orders by user.
  // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
};

export const getLast2WeeksOrders = async () => {
  const data = await fetchAllOrders();
  const twoWeeksTime = new Date(Date.now() - 12096e5);
  const timeStamp = twoWeeksTime.getTime();
  const time = data.filter((ele) => ele.timestamp > timeStamp);
  return time;
};

//   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
// };

export const bucketOrdersByDate = async () => {
  let ordersByDate = {};
  const data = await getLast2WeeksOrders();
  data.map(
    (ele) =>
      (ordersByDate[new Date(ele.timestamp)] = data.filter(
        (order) => order.timestamp == ele.timestamp
      ))
  );
  //   4. TODO: using the function from section 3 bucket the orders by date.
  // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
  return ordersByDate;
};

fetchAllOrders().then(console.log);

bucketOrdersByUsers().then(console.log);

getLast2WeeksOrders().then(console.log);

bucketOrdersByDate().then(console.log);

////////////////////////////////////////

