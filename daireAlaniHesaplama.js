let alanHesapla = (R) => {
	return Math.PI * (R ** 2)
}

const arg = process.argv.slice(2)
let R = arg[0]

//You must write numbers for to find out the area of ​​the circle
if(R && R>0) {
	console.log(`Yarıçapı ${R} olan dairenin alanı: ${alanHesapla(R)}`)
} 