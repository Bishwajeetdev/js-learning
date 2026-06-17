console.log("program start from here")

// promises has three state pending , fullfilled and rejected 
//by defualt it already in pending


// const p1 = fetch("https://api.github.com/users")

// const p2= p1.then((response)=>{
//     return response.json();
// })
// p2.then((response)=>{
//     console.log(response)
// })


// promise chaining

// fetch("https://api.github.com/users")
// .then((response)=>{
//     if(!response.ok){
//         throw new error("data is not present in server")
//     }
//     return response.json(); //javascript object notation
// })
// .then((data)=>{
//     // console.log(data);
//     const parent = document.getElementById('parent')

//     for(let i=0;i<data.length;i++){
//         const name =document.createElement('p');
//     const image = document.createElement('img');
//         name.textContent=data[i].login;
//         name.style.color='white'
//     image.src=data[i].avatar_url;
//     image.style.height="50px"
//     image.style.width="50px"
//     parent.append(image,name);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById('parent')
//     parent.textContent=error.message;
// })



//json formate

// const jsonFormate=`{
// "name":"rohit Raj",
// "age":"24",
// "address":"loahardaga"
// }`

// now converting this java script Object

// const jsObject = JSON.parse(jsonFormate);
// console.log(jsObject)




//creating new promises
// const p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name:"rohit",
//         age:"30"
//     })
// })
// p1.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


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

//this is callback hell
// placedOder(orderDetails,(orderDetails)=>{
//     orderPreparation(orderDetails,(orderDetails)=>{
//         pickup(orderDetails,(orderDetails)=>{
//             orderDelivery(orderDetails);
//         });
//     })
// })


//callback hell solved here
placedOder(orderDetails)
.then((orderDetails)=>orderPreparation(orderDetails))
.then((orderDetails)=>pickup(orderDetails))
.then((orderDetails)=>orderDelivery(orderDetails))
.then((orderDetails)=>{
    console.log(orderDetails);
})
.catch((error)=>{
console.log(`Error: ${error}`);
}).
finally(()=>{
    console.log("i am doing cleanup")
})








console.log("program end here")