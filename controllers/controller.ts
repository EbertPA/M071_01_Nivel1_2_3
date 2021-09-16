// Variables
let carArray: Car[] = [];

let formCar: HTMLFormElement | null;
let formWheel: HTMLFormElement | null;

let inputPlate: HTMLInputElement;
let inputBrand: HTMLInputElement;
let inputColor: HTMLInputElement;

let errorPlate: HTMLElement | null;
let errorBrand: HTMLElement | null;
let errorColor: HTMLElement | null;

let inputWheel1: HTMLInputElement;
let inputWheel2: HTMLInputElement;
let inputWheel3: HTMLInputElement;
let inputWheel4: HTMLInputElement;
let inputWheelD1: HTMLInputElement;
let inputWheelD2: HTMLInputElement;
let inputWheelD3: HTMLInputElement;
let inputWheelD4: HTMLInputElement;

let errorWheel1Brand: HTMLElement | null;
let errorWheel2Brand: HTMLElement | null;
let errorWheel3Brand: HTMLElement | null;
let errorWheel4Brand: HTMLElement | null;
let errorWheel1: HTMLElement | null;
let errorWheel2: HTMLElement | null;
let errorWheel3: HTMLElement | null;
let errorWheel4: HTMLElement | null;

let botonWheels: HTMLButtonElement | null;

window.onload = () => {
    formCar = document.querySelector('#myForm');
    formWheel = document.querySelector('#myForm2');
    if (formWheel != null){
        formWheel.style.display = "none";
    }
    formCar?.addEventListener("click", validaCar);
    botonWheels = document.querySelector('#creaWheel');
    botonWheels?.addEventListener("click", validaCar);
};

function validaCar(){
    errorPlate = document.getElementById("errorPlate");
    errorBrand = document.getElementById("errorBrand");
    errorColor = document.getElementById("errorColor");

    var acumErrores: number = 0;
    if (formCar != null){
        formCar.classList.remove('is-invalid');
    }

    inputPlate = document.getElementById('inputPlate') as HTMLInputElement;
    inputBrand = document.getElementById('inputBrand') as HTMLInputElement;
    inputColor = document.getElementById('inputColor') as HTMLInputElement;

    if (inputPlate.value == "") {
        inputPlate.classList.add("is-invalid");
        if(errorPlate != null){
            errorPlate.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else if (!validar_car(inputPlate.value)) {
        inputPlate.classList.add("is-invalid");
        if(errorPlate != null){
            errorPlate.innerText = "Debe tener 4 números y 3 letras";
        }
        acumErrores++;
    } else {
        if (formCar != null){
            formCar.classList.remove('is-invalid');
        }    
    }

    if (inputBrand.value == "") {
        inputBrand.classList.add("is-invalid");
        if(errorBrand != null){
            errorBrand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        if (formCar != null){
            formCar.classList.remove('is-invalid');
        }    
    }
    if (inputColor.value == "") {
        inputColor.classList.add("is-invalid");
        if(errorColor != null){
            errorColor.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        if (formCar != null){
            formCar.classList.remove('is-invalid');
        }    
    }
    
    formCar?.addEventListener('blur', (event: any) => {
        if(event.target.value!='') event.target.classList.remove('is-invalid');
    }, true);

    if(acumErrores === 0){
        validaWheel(inputPlate.value,inputBrand.value,inputColor.value);
        if (formCar != null){
            formCar.style.display = "none";
        }
        if (formWheel != null){
            formWheel.style.display = "";
        }
        if (botonWheels != null){
            botonWheels.style.display= "";
        }

    }
}

function validaWheel(plate:string,brand:string,color:string){
    let whealsArray: (string)[]=[];
    let botonNuevoCar: HTMLElement | null = document.querySelector("#nuevoCar");
    if (botonNuevoCar != null){
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

    var acumErrores: number = 0;
    if (formWheel != null){
        formWheel.classList.remove('is-invalid');
    }

    inputWheel1 = document.getElementById('inputWheel1') as HTMLInputElement;
    inputWheel2 = document.getElementById('inputWheel2') as HTMLInputElement;
    inputWheel3 = document.getElementById('inputWheel3') as HTMLInputElement;
    inputWheel4 = document.getElementById('inputWheel4') as HTMLInputElement;
    inputWheelD1 = document.getElementById('inputWheelD1') as HTMLInputElement;
    inputWheelD2 = document.getElementById('inputWheelD2') as HTMLInputElement;
    inputWheelD3 = document.getElementById('inputWheelD3') as HTMLInputElement;
    inputWheelD4 = document.getElementById('inputWheelD4') as HTMLInputElement;

    if (inputWheel1.value == "") {
        inputWheel1.classList.add("is-invalid");
        if(errorWheel1Brand != null){
            errorWheel1Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        whealsArray.splice(1, 0, inputWheel1.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if(inputWheelD1.value === ""){
        inputWheelD1.classList.add("is-invalid");
        if(errorWheel1 != null){
            errorWheel1.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }else if (parseFloat(inputWheelD1.value) < 0.4 || parseFloat(inputWheelD1.value) >2) {
        inputWheelD1.classList.add("is-invalid");
        if(errorWheel1 != null){
            errorWheel1.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    } else {
        whealsArray.splice(0, 0, inputWheelD1.value);

        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if (inputWheel2.value == "") {
        inputWheel2.classList.add("is-invalid");
        if(errorWheel2Brand != null){
            errorWheel2Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        whealsArray.splice(3, 0, inputWheel2.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if(inputWheelD2.value === ""){
        inputWheelD2.classList.add("is-invalid");
        if(errorWheel2 != null){
            errorWheel2.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }else if (parseFloat(inputWheelD2.value) < 0.4 || parseFloat(inputWheelD2.value) >2) {
        inputWheelD2.classList.add("is-invalid");
        if(errorWheel2 != null){
            errorWheel2.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    } else {
        whealsArray.splice(2, 0, inputWheelD2.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if (inputWheel3.value == "") {
        inputWheel3.classList.add("is-invalid");
        if(errorWheel3Brand != null){
            errorWheel3Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        whealsArray.splice(5, 0, inputWheel3.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if(inputWheelD3.value === ""){
        inputWheelD3.classList.add("is-invalid");
        if(errorWheel3 != null){
            errorWheel3.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }else if (parseFloat(inputWheelD3.value) < 0.4 || parseFloat(inputWheelD3.value) >2) {
        inputWheelD3.classList.add("is-invalid");
        if(errorWheel3 != null){
            errorWheel3.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    } else {
        whealsArray.splice(4, 0, inputWheelD3.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if (inputWheel4.value == "") {
        inputWheel4.classList.add("is-invalid");
        if(errorWheel4Brand != null){
            errorWheel4Brand.innerText = "Es campo es obligatorio";
        }
        acumErrores++;
    } else {
        whealsArray.splice(7, 0, inputWheel4.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    if(inputWheelD4.value === ""){
        inputWheelD4.classList.add("is-invalid");
        if(errorWheel4 != null){
            errorWheel4.innerText = "Es campo obligatorio";
        }
        acumErrores++;
    }else if (parseFloat(inputWheelD4.value) < 0.4 || parseFloat(inputWheelD4.value) >2) {
        inputWheelD4.classList.add("is-invalid");
        if(errorWheel4 != null){
            errorWheel4.innerText = "El diámetro no de correcto";
        }
        acumErrores++;
    } else {
        whealsArray.splice(6, 0, inputWheelD4.value);
        if (formWheel != null){
            formWheel.classList.remove('is-invalid');
        }    
    }

    formWheel?.addEventListener('blur', (event: any) => {
        if(event.target.value!='') event.target.classList.remove('is-invalid');
    }, true);
    
    if(acumErrores === 0){
        createCar(plate, brand, color, whealsArray);
        if (botonNuevoCar != null){
            botonNuevoCar.style.display = "";
        }
        if(botonWheels != null){
            botonWheels.disabled=true;
        }
        botonNuevoCar?.addEventListener("click", nuevoCar);
    }
}

function createCar(plate:string,brand:string,color:string, whealsArray:(string)[]){
    let car: Car = new Car(plate,color,brand);

    for(let i=0; i<whealsArray.length; i+=2){
        car.addWheel(new Wheel(parseFloat(whealsArray[i]),whealsArray[i+1]))
    }
    // Almacenamos coche  creado en el array(carArray)
    carArray.push(car);
    
    // Muestra la información del car creado.
    document.body.insertAdjacentHTML('beforeend',
        `<div class="container mb-3">
        <div class="row">
        <div class="col-12">Car:</div>
        <div class="col-sm border">PLATE: ${car.plate}</div>
        <div class="col-sm border">BRAND: ${brand}</div>
        <div class="col-sm border">COLOR: ${car.color}</div>
        </div>
        <div class="row border">
        <div class="col-12">Wheels:</div>
        <div class="col-3">
        <div class="">Wheel 1:</div>
        <div class="">Brand: ${car.wheels[0].brand}</div>
        <div class="">Diameter: ${car.wheels[0].diameter}</div>
        </div>
        <div class="col-3">
        <div class="">Wheel 2:</div>
        <div class="">Brand: ${car.wheels[1].brand}</div>
        <div class="">Diameter: ${car.wheels[1].diameter}</div>
        </div>
        <div class="col-3">
        <div class="">Wheel 3:</div>
        <div class="">Brand: ${car.wheels[2].brand}</div>
        <div class="">Diameter: ${car.wheels[2].diameter}</div>
        </div>
        <div class="col-3">
        <div class="">Wheel 4:</div>
        <div class="">Brand: ${car.wheels[3].brand}</div>
        <div class="">Diameter: ${car.wheels[3].diameter}</div>
        </div>
        </div>
        </div>`);
}

function nuevoCar() {
    formWheel?.reset();
    formCar?.reset();
    if(botonWheels != null){
        botonWheels.disabled = false;
    }
    if (formWheel != null){
        formWheel.style.display = "none";
    }

    if (formCar != null){
        formCar.style.display ="";
    }
    validaCar();
}

function validar_car(plate: any) {
    var regex = /^(\d{4})+([A-Z]{3})$/g;
    return regex.test(plate) ? true : false;
}