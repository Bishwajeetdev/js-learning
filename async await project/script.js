// zomate order process

const orderDetails={
    order_id:12345,
    cost:620,
    isPaymentDone:false,
    customerName:"suraj",
    customerLocation:"jaipur",
    resturentLocation:"pratap Nagar",
    orderItems:["pizza","biryani","Coke"]
}

function placedOder(orderDetails){
    console.log(`Your payment is in process of ${orderDetails.cost}`)

    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
        console.log(`your payemnt is done of ${orderDetails.cost}`);
        orderDetails.isPaymentDone=true;
        resolve(orderDetails);
    },3000)
    })

   
    
}

function orderPreparation(orderDetails){
    console.log(`we are preparing your order of ${orderDetails.orderItems}`)

  return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(`Your order is prepared now! ${orderDetails.order_id}`)
       resolve(orderDetails);
    }, 3000);
  })
}

function pickup(orderDetails){
    console.log(`Delivery boy is on the way to resturent ${orderDetails.resturentLocation} `)
return new Promise((resolve,reject)=>{
setTimeout(()=>{
        console.log("Delivery boy has picked up your order")
        resolve(orderDetails);
    },3000)
})
    
}

function orderDelivery(orderDetails){
    console.log(`I am on the way to deliver order to ${orderDetails.customerLocation}`);

    return new Promise((resolve,reject)=>{
setTimeout(() => {
        console.log(`Order delivered successfully to ${orderDetails.customerName}`)
       orderDetails.delivery= true;
        resolve(orderDetails);
    }, 3000);
    })
}

async function ordering() {
    try {
        const response1 =await placedOder(orderDetails);
    const response2 =await orderPreparation(response1);
    const response3 =await pickup(response2);
    const response4 =await orderDelivery(response3);
console.log(response4);
    } catch (error) {
        console.log(error)
    }
}

ordering()


async function social() {
    const [commit,photo,chat] =await Promise.all[ fetch("commit"), fetch('photo'),fetch('chat')]
}