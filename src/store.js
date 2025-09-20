import { configureStore, createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {
    cakes: [
      { id: 1, Name: "Chocolate Cake", price: 300, imageurl: "/images/chocolatecake.jpg" },
      { id: 2, Name: "Strawberry Cake", price: 350, imageurl: "/images/strawberrycake.jpg" },
      { id: 3, Name: "Vanilla Cake", price: 280, imageurl: "/images/vannilacake.jpg" },
      { id: 4, Name: "Red Velvet", price: 400, imageurl: "/images/redvelvetcake.jpg" },
      { id: 5, Name: "Black Forest", price: 450, imageurl: "/images/blackforest.jpg" },
      { id: 6, Name: "Butterscotch Cake", price: 320, imageurl: "/images/butterscotch.jpeg" },
      { id: 7, Name: "Pineapple Cake", price: 300, imageurl: "/images/pineapplecake.jpeg" },
      { id: 8, Name: "Coffee Cake", price: 350, imageurl: "/images/coffeecake.jpg" },
      { id: 9, Name: "Oreo Cake", price: 400, imageurl: "/images/oreocake.jpg" },
      { id: 10, Name: "Mango Cake", price: 380, imageurl: "/images/mangocake.jpg" },
      { id: 11, Name: "Blueberry Cake", price: 420, imageurl: "/images/blueberrycake.jpeg" },
      { id: 12, Name: "Pistachio Cake", price: 450, imageurl: "/images/pistachiocake.jpg" },
  { id: 13, Name: "Lemon Cake", price: 300, imageurl: "/images/lemoncake.jpg" },
  { id: 14, Name: "Carrot Cake", price: 360, imageurl: "/images/carrotcake.jpg" },
  { id: 15, Name: "Raspberry Cake", price: 400, imageurl: "/images/raspberrycake.jpg" },
  { id: 16, Name: "Almond Cake", price: 380, imageurl: "/images/almondcake.jpg" },
  { id: 17, Name: "Cheesecake", price: 500, imageurl: "/images/cheesecake.jpg" },
  { id: 18, Name: "Coconut Cake", price: 350, imageurl: "/images/coconutcake.jpeg" },
  { id: 19, Name: "Banana Cake", price: 300, imageurl: "/images/bananacake.jpeg" },
  { id: 20, Name: "Matcha Green Cake", price: 480, imageurl: "/images/matchacake.jpg" }
    ],
   snacks: [
      { id: 11, Name: "Veg Cutlet", price: 45, imageurl: "/images/vegcutlet.jpg" },
  { id: 12, Name: "Chicken Cutlet", price: 70, imageurl: "/images/chickencutlet.jpeg" },
  { id: 13, Name: "Masala Sandwich", price: 90, imageurl: "/images/masalasandwich.jpeg" },
  { id: 14, Name: "Corn Sandwich", price: 85, imageurl: "/images/cornsandwich.jpeg" },
  { id: 15, Name: "Cheese Garlic Toast", price: 95, imageurl: "/images/cheesegarlictoast.jpeg" },
  { id: 16, Name: "Veg Roll", price: 60, imageurl: "/images/vegroll.jpeg" },
  { id: 17, Name: "Chicken Nuggets", price: 100, imageurl: "/images/chickennuggets.jpeg" },
  { id: 18, Name: "Cheese Ball", price: 80, imageurl: "/images/cheeseball.jpeg" },
  { id: 19, Name: "Paneer Tikka", price: 110, imageurl: "/images/paneertikka.jpeg" },
  { id: 20, Name: "Veg Spring Roll", price: 70, imageurl: "/images/vegspringroll.jpeg" },
  { id: 1, Name: "Veg Puff", price: 40, imageurl: "/images/vegpuff.jpg" },
  { id: 2, Name: "Paneer Roll", price: 60, imageurl: "/images/paneerroll.jpg" },
  { id: 3, Name: "Chicken Puff", price: 70, imageurl: "/images/chickenpuff.jpg" },
  { id: 4, Name: "Cheese Sandwich", price: 90, imageurl: "/images/cheesesandwich.jpg" },
  { id: 5, Name: "Garlic Bread", price: 100, imageurl: "/images/garlicbread.jpg" },
  { id: 6, Name: "Veg Sandwich", price: 80, imageurl: "/images/vegsandwich.jpeg" },
  { id: 7, Name: "Chicken Roll", price: 75, imageurl: "/images/chickenroll.jpeg" },
  { id: 8, Name: "Cheese Roll", price: 85, imageurl: "/images/cheeseroll.jpg" },
  { id: 9, Name: "Paneer Puff", price: 65, imageurl: "/images/paneerpuff.jpeg" },
  { id: 10, Name: "French Fries", price: 50, imageurl: "/images/frenchfries.jpg" },

],

   chocolates: [
  { id: 1, Name: "Dairy Milk", price: 200, imageurl: "/images/DairyMilk.jpeg" },
  { id: 2, Name: "Hersheys", price: 300, imageurl: "/images/Hersheys.jpg" },
  { id: 3, Name: "Snickers", price: 95, imageurl: "/images/Snickers.jpg" },
  { id: 4, Name: "Kit-Kat", price: 150, imageurl: "/images/Kit-Kat.jpg" },
  { id: 5, Name: "Ferrero Rocher", price: 500, imageurl: "/images/FerreroRocher.jpg" },
  { id: 6, Name: "Perk", price: 120, imageurl: "/images/Perk.jpeg" },
  { id: 7, Name: "Munch", price: 100, imageurl: "/images/Munch.jpeg" },
  { id: 8, Name: "5 Star", price: 90, imageurl: "/images/5Star.jpeg" },
  { id: 9, Name: "Bournville", price: 250, imageurl: "/images/Bournville.jpeg" },
  { id: 10, Name: "Mars", price: 180, imageurl: "/images/Mars.jpeg" },
  { id: 11, Name: "Toblerone", price: 400, imageurl: "/images/Toblerone.jpeg" },
  { id: 12, Name: "Galaxy", price: 220, imageurl: "/images/Galaxy.jpeg" },
  { id: 13, Name: "Amul Chocolate", price: 150, imageurl: "/images/AmulDarkChocolate.jpeg" },
  { id: 14, Name: "Cadbury Gems", price: 120, imageurl: "/images/CadburyGems.jpeg" },
  { id: 15, Name: "Nestle Lotte", price: 140, imageurl: "/images/NestleLotte.jpeg" },
  { id: 16, Name: "Choco Pie", price: 200, imageurl: "/images/ChocoPie.jpeg" },
  { id: 17, Name: "Milky Bar", price: 130, imageurl: "/images/MilkyBar.jpeg" },
  { id: 18, Name: "Kit-Kat White", price: 160, imageurl: "/images/KitKatWhite.jpeg" },
  { id: 19, Name: "Dairy Milk Silk", price: 250, imageurl: "/images/DairyMilkSilk.jpeg" },
  { id: 20, Name: "Godiva", price: 550, imageurl: "/images/Godiva.jpeg" }
],
    sweets: [
  { id: 1, Name: "Gulab Jamun", price: 120, imageurl: "/images/gulab-jamun.jpg" },
  { id: 2, Name: "Rasgulla", price: 150, imageurl: "/images/Rasgulla.jpg" },
  { id: 3, Name: "Kaju Katli", price: 250, imageurl: "/images/KajuKatli.jpg" },
  { id: 4, Name: "Ladoo", price: 100, imageurl: "/images/Ladoo.jpg" },
  { id: 5, Name: "Jalebi", price: 80, imageurl: "/images/Jalebi.jpg" },
  { id: 6, Name: "Barfi", price: 130, imageurl: "/images/Barfi.jpeg" },
  { id: 7, Name: "Rasmalai", price: 160, imageurl: "/images/Rasmalai.jpeg" },
  { id: 8, Name: "Peda", price: 110, imageurl: "/images/Peda.jpeg" },
  { id: 9, Name: "Balushahi", price: 120, imageurl: "/images/Balushahi.jpeg" },
  { id: 10, Name: "Cham Cham", price: 140, imageurl: "/images/ChamCham.jpeg" },
  { id: 11, Name: "Soan Papdi", price: 90, imageurl: "/images/SoanPapdi.jpeg" },
  { id: 12, Name: "Motichoor Ladoo", price: 120, imageurl: "/images/MotichoorLadoo.jpeg" },
  { id: 13, Name: "Milk Cake", price: 150, imageurl: "/images/MilkCake.jpeg" },
  { id: 14, Name: "Gajar Halwa", price: 130, imageurl: "/images/GajarHalwa.jpeg" },
  { id: 15, Name: "Dry Fruit Roll", price: 200, imageurl: "/images/DryFruitRoll.jpeg" },
  { id: 16, Name: "Coconut Ladoo", price: 110, imageurl: "/images/CoconutLadoo.jpeg" },
  { id: 17, Name: "Kalakand", price: 140, imageurl: "/images/Kalakand.jpeg" },
  { id: 18, Name: "Mysore Pak", price: 180, imageurl: "/images/MysorePak.jpeg" },
  { id: 19, Name: "Chocolate Barfi", price: 160, imageurl: "/images/ChocolateBarfi.jpeg" },
  { id: 20, Name: "Anjeer Barfi", price: 220, imageurl: "/images/AnjeerBarfi.jpeg" }
]
,
   drinks: [
  { id: 1, Name: "Cold Coffee", price: 90, imageurl: "/images/ColdCoffee.jpg" },
  { id: 2, Name: "Oreo Shake", price: 120, imageurl: "/images/OreoShake.jpg" },
  { id: 3, Name: "Mango Lassi", price: 100, imageurl: "/images/MangoLassi.jpg" },
  { id: 4, Name: "Hot Chocolate", price: 150, imageurl: "/images/HotChocolate.jpg" },
  { id: 5, Name: "Strawberry Milkshake", price: 110, imageurl: "/images/StrawberryMilkshake.jpg" },
  { id: 6, Name: "Vanilla Milkshake", price: 100, imageurl: "/images/VanillaMilkshake.jpeg" },
  { id: 7, Name: "Cold Drink", price: 50, imageurl: "/images/Cola.jpeg" },
  { id: 8, Name: "Mojito Mocktail", price: 130, imageurl: "/images/Mojito.jpeg" },
  { id: 9, Name: "Lemonade", price: 80, imageurl: "/images/Lemonade.jpeg" },
  { id: 10, Name: "Banana Shake", price: 120, imageurl: "/images/BananaShake.jpeg" },
  { id: 11, Name: "Chocolate Shake", price: 130, imageurl: "/images/ChocolateShake.jpeg" },
  { id: 12, Name: "Strawberry Smoothie", price: 140, imageurl: "/images/StrawberrySmoothie.jpeg" },
  { id: 13, Name: "Mango Smoothie", price: 140, imageurl: "/images/MangoSmoothie.jpeg" },
  { id: 14, Name: "Coffee Latte", price: 150, imageurl: "/images/CoffeeLatte.jpeg" },
  { id: 15, Name: "Iced Coffee", price: 130, imageurl: "/images/IcedCoffee.jpeg" },
  { id: 16, Name: "Matcha Latte", price: 160, imageurl: "/images/MatchaLatte.jpeg" },
  { id: 17, Name: "Rose Milk", price: 110, imageurl: "/images/RoseMilk.jpeg" },
  { id: 18, Name: "Badam Milk", price: 140, imageurl: "/images/BadamMilk.jpeg" },
  { id: 19, Name: "Kiwi Smoothie", price: 150, imageurl: "/images/KiwiSmoothie.jpeg" },
  { id: 20, Name: "Blue Lagoon Mocktail", price: 90, imageurl: "/images/BlueLagoonMocktail.jpeg" }
]

  },
  reducers: { }
});
const cartSlice = createSlice({
  name: "cart",
initialState: JSON.parse(localStorage.getItem("cart")) || [], //previosly we take empty array
  reducers: {
    addtocart: (state, action) => {
      let item = state.find((item) => item.Name === action.payload.Name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      let itemIndex = state.findIndex(
        (item) => item.Name === action.payload.Name);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      let increitem = state.find((item) => item.Name === action.payload.Name);
      if (increitem) {
        increitem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      let item = state.find((i) => i.Name === action.payload.Name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.splice(state.indexOf(item), 1);
      }
    },
      clearCart: () => {
      return []; // ✅ empties cart after checkout
    }
  }
});
let OrdersSlice=createSlice({
  name:"orders",
  initialState:[],
  reducers:{
    addOrder:(state,action)=>{
      state.push(action.payload);
    },
  },
});



const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    loginUser: null,
    isAuth: false
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const foundUser = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (foundUser) {
        state.loginUser = foundUser;
        state.isAuth = true;
      }
    },
    logoutUser: (state) => {
      state.loginUser = null;
      state.isAuth = false;
    }
  }
});

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: OrdersSlice.reducer,
     auth: authSlice.reducer 
  },
 
});
store.subscribe(()=>{
  localStorage.setItem("cart",JSON.stringify(store.getState().cart));
})

export let { addtocart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart } =
  cartSlice.actions;
export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export let {addOrder}=OrdersSlice.actions;
export default store;
