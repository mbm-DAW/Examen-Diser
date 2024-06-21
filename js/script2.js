let domSelect = document.querySelector("#consumos");
let electrodomesticos = [
    ['Nevera', 0.350],
    ['Vitroceramica', 2],
    ['Microondas', 1.5],
    ['Horno', 2.2],
    ['Lavavajillas', 2.2],
    ['Lavadora', 2.2],
    ['Television', 0.4],
    ['Aire Acondicionado', 2],
    ['Calefaccion', 2.5]
];

for (i = 0; i < electrodomesticos.length; i++) {
    let domOpNew = document.createElement("option");
    domOpNew.textContent = electrodomesticos[i][0];
    domOpNew.setAttribute("id", electrodomesticos[i][0]);
    domOpNew.setAttribute("value", i);
    domSelect.appendChild(domOpNew);
}


let domBotonConsumos = document.querySelector("#boton-consumos");
let domMensajeConsumo = document.querySelector("#msg-consumos");



domBotonConsumos.addEventListener("click", function () {
    domMensajeConsumo.innerHTML = 'El electrodomestico: ' + electrodomesticos[domSelect.value][0] + ' consume ' + electrodomesticos[domSelect.value][1] + ' KW';
});





