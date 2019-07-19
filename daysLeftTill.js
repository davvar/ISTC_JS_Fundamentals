
function daysLeftTill(month, day = 1,year = new Date().getFullYear()){//  day-ը default 1 եմ դրել որ եթե բան չգրենք ամսի մեկով հաշվվի
  
    let   oneDayMilliseconds =  86400000;
    const TodaysDate = new Date().getDate();
    const CurrentMonth = new Date().getMonth() + 1; //+1 որտեվ Date.parse մեթոդում ամիսներ 1-իցա սկսում
    const CurrentYear =  new Date().getFullYear();
    let   today = Date.parse(CurrentYear + "-" + CurrentMonth + "-" + TodaysDate);
    let   date = Date.parse(month + ' ' + day + ',' + year);
    let   result = Math.abs((date - today ) / oneDayMilliseconds);//Math.abs գրելեվ որ մինուսով թիվ չբերի 
    
    
    return `Days left till ${month[0].toUpperCase()+month.slice(1)} ${day} ${year}: ${result}`
  }
  


  console.log(daysLeftTill('december',5));
  console.log(daysLeftTill('april',1,2020));
  console.log(daysLeftTill('april',1,2021));
  console.log(daysLeftTill('january',1,2020));
  
