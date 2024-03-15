export interface Cart {
    numOfCartItems:number
    data:Data
}

interface Data{
    _id:string
    totalCartPrice:number
    products:Product[]
}

interface Product{
    count:number
    price:number
    product:SubProduct
}

interface SubProduct{
    id:string
    title:string
    imageCover:string
    ratingsAverage:number
    category:Category
}

interface Category{
    name:string 

}

