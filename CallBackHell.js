//Topic -- Callback Hell
//zomato application 

const OrderDetail = {
    orderId : 1234,
    food : ["Sahi Paneer","Naan","Rayata"],
    cost : 530,
    customer_name : "Ankush",
    customer_location : "Janakpuri",
    restaurant_location : "new delhi"


}

function placeOrder(OrderDetail, Callback){
    console.log(` Rs ${OrderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is Received and Order is get placed ");
        OrderDetail.status = true ;
        Callback(OrderDetail);
    },3000)
}

function PreparingOrder(OrderDetail,Callback){
    console.log(`Your food preparation has started of ${OrderDetail.food}.`);

    setTimeout(()=>{
       console.log("Your order is now prepared ");
       OrderDetail.token = 132;
       Callback(OrderDetail);
    },3000)
}

function pickupOrder(OrderDetail, Callback){
    console.log(`Delivery boy is on a way to pickup your order from ${OrderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("Delivery boy has picked up your order");
        OrderDetail.received = true ;
        Callback(OrderDetail);
    },3000)
}

function DeliverOrder(OrderDetail){
    console.log("He is on way to deliver the order to your Place");

    setTimeout(()=>{
        console.log("Your order is delivered successfully");
        OrderDetail.delivery = true ;
    },3000)
}


placeOrder(OrderDetail, (OrderDetail)=>{
    PreparingOrder(OrderDetail, (OrderDetail)=>{
        pickupOrder(OrderDetail, (OrderDetail )=>{
            DeliverOrder(OrderDetail);
        });
    });
});

//learnings 
// 1 Code readability becomes so complex.
// 2 For fixing error we have to change things at multiple places.
// 3 it will be very difficukt to study the codes for new Developers.