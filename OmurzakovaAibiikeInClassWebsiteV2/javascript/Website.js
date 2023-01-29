
function getMonthName(month)
{
	switch(month)
	{
		case 1:  mName="January"; break;
		case 2:  mName="February"; break;	
		case 3:  mName="March"; break;
		case 4:  mName="April"; break;
		case 5:  mName="May"; break;
		case 6:  mName="June"; break;
		case 7:  mName="July"; break;
		case 8:  mName="August"; break;	
		case 9:  mName="September"; break;
		case 10: mName="October"; break;	
		case 11: mName="November"; break;	
		case 12: mName="December"; break;				
	}
	return(mName);
}// To call the function, use 
//    monthName= getMonthName(monthNumber);

//switch(week)
{
	case 1: weekDay = "Monday"; break;
	case 2:  weekDay = "Tuesday"; break;
	case 3: weekDay = "Wednesday"; break;
}


function todaysDate()
{
     var rightNow2 =  new Date();
	 var monthNumber = 0, todaysDate = "";  
	 monthNumber = rightNow2.getMonth() + 1;
     monthName= getMonthName(monthNumber);
	 todaysDate = monthName + ' ' + rightNow2.getDate() 
                + ', ' + rightNow2.getFullYear();
	 document.getElementById("showDate").innerHTML = todaysDate;

}


function changeTable()
{
    document.getElementById("tables").style.color = "green";
    document.getElementById("tables").style.borderWidth = "0.3em";
    document.getElementById("tables").style.borderStyle = "dotted";
    document.getElementById("tables").style.borderColor = "yellow";
}


//switch(week)
{
	case 1: weekDay = "Monday"; break;
	case 2:  weekDay = "Tuesday"; break;
	case 3: weekDay = "Wednesday"; break;
}