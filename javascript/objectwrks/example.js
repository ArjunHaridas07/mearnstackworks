var data = [
    { districtname: "thrissur", weather: 29 },
    { districtname: "ekm", weather: 32 },
    { districtname: "ktm", weather: 29 },
    { districtname: "idk", weather: 18 },
    { districtname: "thrissur", weather: 32 },
    { districtname: "ekm", weather: 30 },
    { districtname: "ktm", weather: 30 },
    { districtname: "idk", weather: 35 },


]
//{thrissur:32,ekm:32,ktm:30,idk:20}
var weatherOut = {}
for (let record of data) {
    let districtName = record["districtname"]//tsr
    let curTemp = record["weather"]//29
    if (districtName in weatherOut) {
        let oldTemp = weatherOut[districtName]
        if (curTemp > oldTemp) {
            weatherOut[districtName] = curTemp
        }
    }
    else {
        weatherOut[districtName] = curTemp
    }
}
console.log(weatherOut);
//print district with highest temp
console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]));