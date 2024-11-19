function Veiculo(tipo, marca, modelo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    
    this.exibirDetalhes = function() {
        return `Veículo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    };
}

function Carro(marca, modelo, portas) {
    Veiculo.call(this, "Carro", marca, modelo);
    this.portas = portas;
    
    this.exibirDetalhes = function() {
        return `Carro: ${this.marca} ${this.modelo} com ${this.portas} portas.`;
    };
}

function Moto(marca, modelo, cilindradas) {
    Veiculo.call(this, "Moto", marca, modelo);
    this.cilindradas = cilindradas;
    
    this.exibirDetalhes = function() {
        return `Moto: ${this.marca} ${this.modelo} com ${this.cilindradas}cc.`;
    };
}

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 2);
const moto1 = new Moto("Yamaha", "MT-07", 689);

console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes());
console.log(moto1.exibirDetalhes()); 