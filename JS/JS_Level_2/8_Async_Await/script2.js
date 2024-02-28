function fetchStudent() {
  let url = `http://localhost:3000/students`;

  axios
    .get(url)
    .then((response) => {
      console.log("The response is ", response);
    })
    .catch((error) => {
      console.log("This is error object", error);
    });
}

function postStudentData() {
  let url = `http://localhost:3000/students`;

  let requiredStudentData = {
    first_name: "Rakesh",
    last_name: "Verma",
    class: "Class 5",
  };

  axios
    .post(url, requiredStudentData)
    .then((response) => {
      console.log("The response is ", response);
    })
    .catch((error) => {
      console.log("The error object is ", error);
    });
}

function deleteStudentData() {
  let requiredIdValue = 3;

  let url = `http://localhost:3000/students/${requiredIdValue}`;
  console.log("The delete function has been clicked.");

  axios
    .delete(url)
    .then((response) => {
      console.log("The response is ", response);
    })
    .catch((error) => {
      console.log("The error object is ", error);
    });
}

function updateStudentData() {
  let requiredObject = {
    id: 4,
    first_name: "Rohit",
    last_name: "Sharma",
    class: "Class 5",
  };

  let url = `http://localhost:3000/students/4`;

  axios
    .put(url, requiredObject)
    .then((response) => {
      console.log("The reponse is ", response);
    })
    .catch((error) => {
      console.log("The error is ", error);
    });
}
