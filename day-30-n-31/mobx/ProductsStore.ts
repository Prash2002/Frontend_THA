import { makeAutoObservable } from "mobx";

export interface Product {
  id: number;
  title: string;
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
      rate: number,
      count: number
  },
}

class Store {
  products: Product[] = [];
  //  wishlist: Map<number, number> = new Map().set(1,1);
  wishlist: Map<number, number> = !(process.browser)? new Map() : new Map<number, number>(JSON.parse(window.localStorage.getItem("wishlist") || "[]")) ;

  constructor() {
    if (process.browser) {
      const map =new Map<number, number>(JSON.parse(window.localStorage.getItem("wishlist") || "[]"));
    console.log(map);
    this.wishlist =  map;
  }
  else{
    console.log("uwu");
    this.wishlist = new Map();
  } 

    makeAutoObservable(this);
  }
  addProduct(data: Product[]) {
      for(var i=0; i<data.length; i++)
    {this.products[i] =
      {
        id: data[i].id,
        title: data[i].title,
        price: data[i].price,
        description: data[i].description,
        category: data[i].category,
        image: data[i].image,
        rating: {
            rate: data[i].rating.rate,
            count: data[i].rating.count,
        },
      };}
      console.log(prodStore.wishlist);
      // console.log(this.products);
      
  }
}

const prodStore = new Store();
export default prodStore;