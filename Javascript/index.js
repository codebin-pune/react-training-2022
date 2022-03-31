console.log("gopa patidar");
console.log("radhe radhe");

const employeeList = [{
        id: 111,
        name: "gopal",
        age: 23
    },
    {
        id: 122,
        name: "vishal",
        age: 24
    },
    {
        id: 133,
        name: "ram",
        age: 34
    }

];

const employeeAdd = (employeeList, newOne) => {
    return employeeList.push(newOne);
}

const employeeTraminate = (employeeList, tarminateId) => {
    // const first=employeeList.slice(0,2);
    // const second=employeeList.slice(3);
    // console.log(first);
    // console.log(second);
    // const a=[...first,...second];
    // console.log( a);
    const newUser = employeeList.findIndex((item) => item.id === tarminateId);
    if (newUser === -1) {
        console.log("not found");
        return;
    }
    return [...employeeList.slice(0, newUser), ...employeeList.slice(newUser + 1)];
}

const employeeUpdate = (employeeList, newData) => {
    const Id = newData.id;
    const newUser = employeeList.findIndex((item) => item.id === Id);
    employeeList[newUser] = newData;
    return employeeList;
}


// updated employee
const newData = {
    id: 111,
    name: "gopal",
    title: "patidar",
    age: 22
};
const updateEmployee = employeeUpdate(employeeList, newData);
console.log(updateEmployee);

// add employeee
const newUser = {
    id: 144,
    name: "rahul",
    age: 56
};
employeeAdd(employeeList, newUser);
console.log(employeeList);

//employee tarminated
const tarminateId = 155;
const tarUser = employeeTraminate(employeeList, tarminateId);
console.log(tarUser);

//search employee