"use strict";
// Variables
var carArray = [];
var formCar;
var formWheel;
var inputPlate;
var inputBrand;
var inputColor;
var errorPlate;
var errorBrand;
var errorColor;
var inputWheel1;
var inputWheel2;
var inputWheel3;
var inputWheel4;
var inputWheelD1;
var inputWheelD2;
var inputWheelD3;
var inputWheelD4;
var errorWheel1Brand;
var errorWheel2Brand;
var errorWheel3Brand;
var errorWheel4Brand;
var errorWheel1;
var errorWheel2;
var errorWheel3;
var errorWheel4;
var botonWheels;
window.onload = function () {
    formCar = document.querySelector('#myForm');
    formWheel = document.querySelector('#myForm2');
    if (formWheel != null) {
        formWheel.style.display = "none";
    }
    formCar === null || formCar === void 0 ? void 0 : formCar.addEventListener("click", validaCar);
    botonWheels = document.querySelector('#creaWheel');
    botonWheels === null || botonWheels === void 0 ? void 0 : botonWheels.addEventListener("click", validaCar);
};
function validaCar() {
    errorPlate = document.getElementById("errorPlate");
    errorBrand = document.getElementById("errorBrand");
    errorColor = document.getElementById("errorColor");
    var acumErrores = 0;
    if (formCar != null) {
        formCar.classList.remove('is-invalid');
    }
    inputPlate = document.getElementById('inputPlate');
    inputBrand = document.getElementById('inputBrand');
    inputColor = document.getElementById('inputColor');
    if (inputPlate.value == "") {
        inputPlate.classList.add("is-invalid");
        if (errorPlate != null) {
            errorPlate.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else if (!validar_car(inputPlate.value)) {
        inputPlate.classList.add("is-invalid");
        if (errorPlate != null) {
            errorPlate.innerText = "Debe tener 4 números y 3 letras";
        }
        acumErrores++;
    }
    else {
        if (formCar != null) {
            formCar.classList.remove('is-invalid');
        }
    }
    if (inputBrand.value == "") {
        inputBrand.classList.add("is-invalid");
        if (errorBrand != null) {
            errorBrand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        if (formCar != null) {
            formCar.classList.remove('is-invalid');
        }
    }
    if (inputColor.value == "") {
        inputColor.classList.add("is-invalid");
        if (errorColor != null) {
            errorColor.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        if (formCar != null) {
            formCar.classList.remove('is-invalid');
        }
    }
    formCar === null || formCar === void 0 ? void 0 : formCar.addEventListener('blur', function (event) {
        if (event.target.value != '')
            event.target.classList.remove('is-invalid');
    }, true);
    if (acumErrores === 0) {
        validaWheel(inputPlate.value, inputBrand.value, inputColor.value);
        if (formCar != null) {
            formCar.style.display = "none";
        }
        if (formWheel != null) {
            formWheel.style.display = "";
        }
        if (botonWheels != null) {
            botonWheels.style.display = "";
        }
    }
}
function validaWheel(plate, brand, color) {
    var whealsArray = [];
    var botonNuevoCar = document.querySelector("#nuevoCar");
    if (botonNuevoCar != null) {
        botonNuevoCar.style.display = "none";
    }
    errorWheel1 = document.getElementById("errorWheel1");
    errorWheel2 = document.getElementById("errorWheel2");
    errorWheel3 = document.getElementById("errorWheel3");
    errorWheel4 = document.getElementById("errorWheel4");
    errorWheel1Brand = document.getElementById("errorWheel1Brand");
    errorWheel2Brand = document.getElementById("errorWheel2Brand");
    errorWheel3Brand = document.getElementById("errorWheel3Brand");
    errorWheel4Brand = document.getElementById("errorWheel4Brand");
    var acumErrores = 0;
    if (formWheel != null) {
        formWheel.classList.remove('is-invalid');
    }
    inputWheel1 = document.getElementById('inputWheel1');
    inputWheel2 = document.getElementById('inputWheel2');
    inputWheel3 = document.getElementById('inputWheel3');
    inputWheel4 = document.getElementById('inputWheel4');
    inputWheelD1 = document.getElementById('inputWheelD1');
    inputWheelD2 = document.getElementById('inputWheelD2');
    inputWheelD3 = document.getElementById('inputWheelD3');
    inputWheelD4 = document.getElementById('inputWheelD4');
    if (inputWheel1.value == "") {
        inputWheel1.classList.add("is-invalid");
        if (errorWheel1Brand != null) {
            errorWheel1Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(1, 0, inputWheel1.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheelD1.value === "") {
        inputWheelD1.classList.add("is-invalid");
        if (errorWheel1 != null) {
            errorWheel1.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }
    else if (parseFloat(inputWheelD1.value) < 0.4 || parseFloat(inputWheelD1.value) > 2) {
        inputWheelD1.classList.add("is-invalid");
        if (errorWheel1 != null) {
            errorWheel1.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(0, 0, inputWheelD1.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheel2.value == "") {
        inputWheel2.classList.add("is-invalid");
        if (errorWheel2Brand != null) {
            errorWheel2Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(3, 0, inputWheel2.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheelD2.value === "") {
        inputWheelD2.classList.add("is-invalid");
        if (errorWheel2 != null) {
            errorWheel2.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }
    else if (parseFloat(inputWheelD2.value) < 0.4 || parseFloat(inputWheelD2.value) > 2) {
        inputWheelD2.classList.add("is-invalid");
        if (errorWheel2 != null) {
            errorWheel2.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(2, 0, inputWheelD2.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheel3.value == "") {
        inputWheel3.classList.add("is-invalid");
        if (errorWheel3Brand != null) {
            errorWheel3Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(5, 0, inputWheel3.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheelD3.value === "") {
        inputWheelD3.classList.add("is-invalid");
        if (errorWheel3 != null) {
            errorWheel3.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }
    else if (parseFloat(inputWheelD3.value) < 0.4 || parseFloat(inputWheelD3.value) > 2) {
        inputWheelD3.classList.add("is-invalid");
        if (errorWheel3 != null) {
            errorWheel3.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(4, 0, inputWheelD3.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheel4.value == "") {
        inputWheel4.classList.add("is-invalid");
        if (errorWheel4Brand != null) {
            errorWheel4Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(7, 0, inputWheel4.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    if (inputWheelD4.value === "") {
        inputWheelD4.classList.add("is-invalid");
        if (errorWheel4 != null) {
            errorWheel4.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }
    else if (parseFloat(inputWheelD4.value) < 0.4 || parseFloat(inputWheelD4.value) > 2) {
        inputWheelD4.classList.add("is-invalid");
        if (errorWheel4 != null) {
            errorWheel4.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    }
    else {
        whealsArray.splice(6, 0, inputWheelD4.value);
        if (formWheel != null) {
            formWheel.classList.remove('is-invalid');
        }
    }
    formWheel === null || formWheel === void 0 ? void 0 : formWheel.addEventListener('blur', function (event) {
        if (event.target.value != '')
            event.target.classList.remove('is-invalid');
    }, true);
    if (acumErrores === 0) {
        createCar(plate, brand, color, whealsArray);
        if (botonNuevoCar != null) {
            botonNuevoCar.style.display = "";
        }
        if (botonWheels != null) {
            botonWheels.disabled = true;
        }
        botonNuevoCar === null || botonNuevoCar === void 0 ? void 0 : botonNuevoCar.addEventListener("click", nuevoCar);
    }
}
function createCar(plate, brand, color, whealsArray) {
    var car = new Car(plate, color, brand);
    for (var i = 0; i < whealsArray.length; i += 2) {
        car.addWheel(new Wheel(parseFloat(whealsArray[i]), whealsArray[i + 1]));
    }
    // Almacenamos coche  creado en el array(carArray)
    carArray.push(car);
    // Muestra la información del car creado.
    document.body.insertAdjacentHTML('beforeend', "<div class=\"container mb-3\">\n        <div class=\"row\">\n        <div class=\"col-12\">Car:</div>\n        <div class=\"col-sm border\">PLATE: " + car.plate + "</div>\n        <div class=\"col-sm border\">BRAND: " + brand + "</div>\n        <div class=\"col-sm border\">COLOR: " + car.color + "</div>\n        </div>\n        <div class=\"row border\">\n        <div class=\"col-12\">Wheels:</div>\n        <div class=\"col-3\">\n        <div class=\"\">Wheel 1:</div>\n        <div class=\"\">Brand: " + car.wheels[0].brand + "</div>\n        <div class=\"\">Diameter: " + car.wheels[0].diameter + "</div>\n        </div>\n        <div class=\"col-3\">\n        <div class=\"\">Wheel 2:</div>\n        <div class=\"\">Brand: " + car.wheels[1].brand + "</div>\n        <div class=\"\">Diameter: " + car.wheels[1].diameter + "</div>\n        </div>\n        <div class=\"col-3\">\n        <div class=\"\">Wheel 3:</div>\n        <div class=\"\">Brand: " + car.wheels[2].brand + "</div>\n        <div class=\"\">Diameter: " + car.wheels[2].diameter + "</div>\n        </div>\n        <div class=\"col-3\">\n        <div class=\"\">Wheel 4:</div>\n        <div class=\"\">Brand: " + car.wheels[3].brand + "</div>\n        <div class=\"\">Diameter: " + car.wheels[3].diameter + "</div>\n        </div>\n        </div>\n        </div>");
}
function nuevoCar() {
    formWheel === null || formWheel === void 0 ? void 0 : formWheel.reset();
    formCar === null || formCar === void 0 ? void 0 : formCar.reset();
    if (botonWheels != null) {
        botonWheels.disabled = false;
    }
    if (formWheel != null) {
        formWheel.style.display = "none";
    }
    if (formCar != null) {
        formCar.style.display = "";
    }
    validaCar();
}
function validar_car(plate) {
    var regex = /^(\d{4})+([A-Z]{3})$/g;
    return regex.test(plate) ? true : false;
}
