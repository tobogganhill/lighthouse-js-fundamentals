const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];
  
let names = [];

function chooseStations(_stations) {
    let capacity = 20;
    for (goodStation of stations) {
        if (goodStation[1] >= capacity) {
            if (goodStation[2] == 'school' || goodStation[2] == 'community centre') {
                names.push(goodStation[0]);
            }
        }
    }
}
chooseStations(stations);
console.log(names);
