export const getErrorMessageByPropertyName = (obj: Record<string,any>, propertyPath: string) =>  {
  // const propertyPath = 'admin.name.firstName' ie
  
  const properties = propertyPath.split('.');
  // after splitting => ['admin', 'name', 'firstName'] ie
  let value = obj

  for(let prop of properties){
    if(value[prop]){
      value = value[prop]
    }else{
      return undefined
    }
  }

  return value.message
}