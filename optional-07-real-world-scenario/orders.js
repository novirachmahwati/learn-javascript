// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0); 

  const data = { 
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(data);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);

  order.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const order = orders.filter(order => order.status === 'Selesai');
  
  const totalRevenue = order.reduce((sum, order) => {
    return sum + order.items.reduce((acc, item) => acc + item.price, 0);
  }, 0);

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  orders.splice(index, 1);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
