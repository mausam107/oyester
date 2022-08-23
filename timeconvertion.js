const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(" ");
  
    let [hours, min,sec] = time.split(":");
  
    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
        hours = parseInt(hours);
        min = parseInt(min) + 33;
        sec = parseInt(sec) + 33;
      }
  
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
      min = parseInt(min) + 33;
      sec = parseInt(sec) + 33;
    }
  
    return `${hours}:${min}:${sec}`;
  };
  
  var convertedTime = convertTime12to24("01:00:00 PM");

  console.log(convertedTime);