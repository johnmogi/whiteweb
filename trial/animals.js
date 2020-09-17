let contacts = [
  {
    id: 1,
    name: "john",
    mail: "anguru@gmail.com",
    phone: "050-9382456",
    address: "ph",
  },
  {
    id: 2,
    name: "as",
    mail: "s",
    phone: "s",
    address: "s",
  },  {
    id: 6,
    name: "as",
    mail: "s",
    phone: "s",
    address: "s",
  },
];

function sortByName(obj) {
  obj.sort(function (a, b) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return obj;
}
function sortById(obj) {
    return obj.sort(function(b, a){
        return a.id - b.id;
    });
       
    }

let sortedName = sortByName(contacts);
let sortedId = sortById(contacts);

console.log(sortedId);
