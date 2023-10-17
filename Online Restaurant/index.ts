import { FoodKart } from "./foodKart";

const main = () => {
    const foodKart: FoodKart = new FoodKart();

    console.log("Main Created!");

    foodKart.registerUser("Pralove", 'M', 'ph1', 'HSR');
    foodKart.registerUser("Nitesh", 'M', 'ph2', 'BTM');
    foodKart.registerUser('Vatsal', 'M', 'ph3', 'BTM');

    foodKart.loginUser('ph1');

    foodKart.registerRestaurant('Food Court-1', 'BTM/HSR', 'NI Thali', 100, 5);
    foodKart.registerRestaurant('Food Court-2', 'BTM', 'Burger', 120, 3);

    foodKart.loginUser('ph2');

    foodKart.registerRestaurant('Food Court-3', 'HSR', 'SI Thali', 150, 1);

    foodKart.loginUser('ph3');

    foodKart.showRestaurant('price');
    foodKart.placeOrder('Food Court-1', 2);

    foodKart.placeOrder('Food Court-2', 7);

    foodKart.createReview('Food Court-2', 3, 'Good Food');
    foodKart.createReview('Food Court-1', 5, 'Nice Food');

    foodKart.showRestaurant('rating');


}

main();