function prepareData(data) {
    console.log("perpareData");
    var map = new Map();
    var mapResult = new Map();
    
    for (var i = 0; i < data.length; i++) {
        var wonValue = data[i].won;
        var countryValue = data[i].country;
        var value = map.get(countryValue);
        if (value == null) {
            map.set(countryValue, wonValue);
        } else {
            var newValue = value + wonValue;
            map.set(countryValue, newValue);
        }
    }

    map.forEach((value, key, map) => {
        mapResult.set(key, value)
    });
    return new Map([...mapResult.entries()].sort((a, b) => b[1] - a[1]));
}