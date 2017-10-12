console.log(customers);
console.log(customers.results);
console.log(customers.results[0].cell)

const people = document.querySelector("body");

let individuals = '';

function getinfo() {
    for(let i = 0 ; i < customers.results.length ; i++) {
         individuals += `
<div class="main">
        <img src="${customers.results[i].picture.large}"> 
        <h4 class="name"> ${customers.results[i].name.first} ${customers.results[0].name.last} </h4>
        <h6 class="email"> ${customers.results[i].email} </h6>
        <h6 class="address"> ${customers.results[i].location.street} <br>
         ${customers.results[i].location.city} ${customers.results[0].location.postcode} </h6>
</div>
`
    }
return individuals;
}

people.innerHTML = `<h1 id = "header"> Customer Database </h1>` + getinfo();
