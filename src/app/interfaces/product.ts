export interface Product {
    title:string
    price:number
    imageCover:string
    _id:string
    description:string
    category: Category
    ratingsAverage:number
    images:string[]
  
}
 interface Category{
    name:string

}
