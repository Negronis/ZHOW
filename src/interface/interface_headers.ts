interface HeaderListInterface{
   name?:string,
   link?:string,
   select?:string,
   parent?:boolean,
   linkname?:string,
   children?:HeaderListInterface[]
}
export default HeaderListInterface;