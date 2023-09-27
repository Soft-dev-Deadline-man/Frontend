export interface IBlog {
    title: string;
    catagory : string;
    entrancePrice : object;
    address : string;
    rating: string;
    separateRating : any;
    reviews : Array<object>; //change to IComment after
    latitude : string;
    longtitude : string;
    forbidden : object;
    contact : object;
    image: string[];
  }
  