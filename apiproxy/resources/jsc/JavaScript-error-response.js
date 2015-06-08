



  if(context.proxyResponse.status == 400){
   body = context.proxyResponse.content;

   
  
    obj = JSON.parse(body);
      if(obj.oops){
        obj.error = obj.oops;
        obj.error.message = obj.oops.details;
        delete obj.error.problem;
        delete obj.error.details;
        delete obj.oops;
      }
     
       context.proxyResponse.content = JSON.stringify(obj);
  

    
    
    
  }
     
