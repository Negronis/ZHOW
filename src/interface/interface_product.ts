interface ProductList{
   name?:string
   html?:string
   banner?:string
   title?:string
   content?:string
   time?:string
	index?:number
	link?:string
	leftList?:ProductList[]
	rightList?:ProductList[]
	list?:ProductList[]
}
export default ProductList;