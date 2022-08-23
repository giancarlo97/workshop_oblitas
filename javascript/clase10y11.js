const operaciones = [   { id: 1, producto: "TransferenciaA", precio: 100000},
                        { id: 2, producto: "TransferenciaB", precio: 150000},
                        { id: 3, producto: "TransferenciaC", precio: 200000},
                        { id: 4, producto: "TransferenciaD", precio: 550000} ];

const local = (clave, valor) => { localStorage.setItem(clave, valor)};

for (const producto of operaciones) {
    local(producto.id, JSON.stringify(producto));
}

local("listaOperaciones", JSON.stringify(operaciones));