
module.exports.primeSieve = function(n) {

//code here.
	var primeArr=[];
	for(var k=0; k<=n; k++)
	{
		primeArr.push(1);
	}
	if(n>1)
	{
		primeArr[0]=0;
		primeArr[1]=0;
	}
	for(var i=2; i*i<=n; i++)
	{
		for(var j=i; i*j<=n; j++)
		{
			primeArr[i*j]=0;
		}
		//
		// for(var j=2; j*j<=i; j++)
		// {
		// 	if(i%j==0)
		// 	{
		// 		primeArr[i]=0;
		// 		break;
		// 	}
		// }
	}
	//console.log(primeArr);
	return primeArr;
}


module.exports.nthPrime = function(n, primeSieveSize) {

//code here;
	var m=primeSieveSize;
	var primeArray = module.exports.primeSieve(m);

	var temp=0;

	for(var j=0; j<=m; j++)
	{
		if(primeArray[j]==1)
		{
			temp++;
		}
		if(temp==n)
		{
			//console.log(j);
			return j;
			//break;
		}
	}
}



module.exports.sumOfPrime = function(n, primeSieveSize) {

	var m=primeSieveSize;
	var primeArray = module.exports.primeSieve(m);

	var sum=0;

	for(var j=0; j<n; j++)
	{
		if(primeArray[j]==1)
		{
			sum = sum + j;
		}
	}
	return sum;
	console.log(sum);
}
