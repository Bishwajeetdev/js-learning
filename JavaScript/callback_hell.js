//zomate order process

const orderDetails={
    order_id:12345,
    cost:620,
    isPaymentDone:false,
    customerName:"suraj",
    customerLocation:"jaipur",
    resturentLocation:"pratap Nagar",
    orderItems:["pizza","biryani","Coke"]
}

function placedOder(orderDetails,callback){
    console.log(`Your payment is in process of ${orderDetails.cost}`)

    setTimeout (()=>{
        console.log(`your payemnt is done of ${orderDetails.cost}`)
        orderDetails.isPaymentDone=true;
        callback(orderDetails);
    },3000)
    
}

function orderPreparation(orderDetails,callback){
    console.log(`we are preparing your order of ${orderDetails.orderItems}`)

    setTimeout(() => {
        console.log(`Your order is prepared now! ${orderDetails.order_id}`)
        callback(orderDetails)
    }, 3000);
}

function pickup(orderDetails,callback){
    console.log(`Delivery boy is on the way to resturent ${orderDetails.resturentLocation} `)

    setTimeout(()=>{
        console.log("Delivery boy has picked up your order")
        callback(orderDetails);
    },3000)
}

function orderDelivery(orderDetails){
    console.log(`I am on the way to deliver order to ${orderDetails.customerLocation}`);

    setTimeout(() => {
        console.log(`Order delivered successfully to ${orderDetails.customerName}`)
    }, 3000);
}

//this is callback hell
placedOder(orderDetails,(orderDetails)=>{
    orderPreparation(orderDetails,(orderDetails)=>{
        pickup(orderDetails,(orderDetails)=>{
            orderDelivery(orderDetails);
        });
    })
})
