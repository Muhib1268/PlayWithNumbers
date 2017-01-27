module.exports.numberFormat = function(num)
{
	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ',
			'thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
	var wordNum="";
	var arrNb=('0000'+num).split("");
	var len=arrNb.length;
	//console.log(len);
	if (num > 9999)
	{
	  return 'overflow';
	}
	var numt=parseInt(arrNb[len-2]+arrNb[len-1]);
	wordNum += parseInt(arrNb[len-4])!= 0 ? a[arrNb[len-4]]+'thousand ':'';
	wordNum += parseInt(arrNb[len-3])!= 0 ? a[arrNb[len-3]]+'hundred ':'';
	wordNum += (numt < 20) ? a[numt]:b[parseInt(arrNb[len-2])]+' '+a[parseInt(arrNb[len-1])];
	return wordNum;
};
