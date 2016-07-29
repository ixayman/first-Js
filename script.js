var name1="adsgz";
var name2="dasaz";
var count=0;
var i=0;
while(count<2&&i<5)
{
	if (name1.substring(i,i+1)==name2.substring(i,i+1))
	{
		count++;	
	}
	i++;
	
}
if(count>=2)
{
	alert(true);
}
else
{
	alert(false);
}

