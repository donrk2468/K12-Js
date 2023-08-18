let peopleArray = [ 
    { name: "John Doe", age: 30, address: "123 Main St, City", hobbies: ["Đọc sách", "Du lịch"] }, 
    { name: "Jane Smith", age: 25, address: "456 Park Ave, Town", hobbies: ["Nấu ăn", "Chơi piano"] }, 
    { name: "Bob Johnson", age: 40, address: "789 Broadway, Village", hobbies: ["Đi bộ", "Xem phim"] } 
    ];

let table = document.querySelector("table");

function renderHTML() {
    let tableHTML = `
    <thead>
    <th>Name</th>
    <th>Age</th>
    <th>Address</th>
    <th>Hobbies</th>
    <th>Active</th>
    </thead>
    <tbody>
    ${peopleArray
    .map(function (item, index) {
        return `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.address}</td>
        <td>${item.hobbies.join(", ")}</td>
        <td>
        <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onclick="openEdit(${index})"
        >
            Edit
        </button>
        <button onclick="deleteFunction(${index})">Delete</button>
        </td>
    </tr>
    `;
    })
    .join("")}
    </tbody>
    `;
    table.innerHTML = tableHTML;
}

let name = document.getElementById("name-add");
let age = document.getElementById("age-add");
let address = document.getElementById("address-add");
let hobbies = document.getElementById("hobbies-add");
let indexEdit;

function addFunction() {
    let data = {
    name: name.value,
    age: age.value,
    address: address.value,
    hobbies: [hobbies.value],
    };
    if (indexEdit === 0 || indexEdit) {
        peopleArray[indexEdit] = data;
    } else {
        peopleArray.push(data);
    }
    renderHTML();
    let close = document.getElementById("close-modal-add");
    close.click();
}

function openAdd() {
    indexEdit = "";
    name.value = "";
    age.value = "";
    address.value = "";
    hobbies.value = "";
}

function openEdit(index) {
    indexEdit = index;
    name.value = peopleArray[index].name;
    age.value = peopleArray[index].age;
    address.value = peopleArray[index].address;
    hobbies.value = peopleArray[index].hobbies.join(", ");
}

function deleteFunction(index) {
    peopleArray.splice(index, 1);
    renderHTML();
}

renderHTML();