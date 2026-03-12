"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Especialidades
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
};
// Médicos
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};
// Pacientes
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};
const paciente3 = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};
const paciente4 = {
    id: 4,
    nome: "Juliana Rocha",
    cpf: "321.654.987-00",
    email: "juliana@email.com",
};
const paciente5 = {
    id: 5,
    nome: "Fernanda Lima",
    cpf: "741.852.963-00",
    email: "fernanda@email.com",
    telefone: "(11) 91234-5678",
};
// Função para criar consulta
function criarConsulta(id, medico, paciente, data, valor, observacoes) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
        observacoes,
    };
}
// Confirmar consulta
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
// Cancelar consulta
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
// Alterar status
function alterarStatusConsulta(consulta, novoStatus) {
    if (consulta.status === "realizada" && novoStatus === "cancelada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: novoStatus });
}
// Listar por status
function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
// Listar consultas futuras
function listarConsultasFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return consultas.filter((consulta) => consulta.data >= hoje);
}
// Exibir consulta
function exibirConsulta(consulta) {
    var _a;
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
Observações: ${(_a = consulta.observacoes) !== null && _a !== void 0 ? _a : "Nenhuma"}
`;
}
// Array de consultas
const consultas = [];
// Criando consultas
const consulta1 = criarConsulta(1, medico1, paciente1, new Date(2026, 1, 28), 350, "Retorno cardiológico");
const consulta2 = criarConsulta(2, medico2, paciente2, new Date(2026, 2, 10), 420);
const consulta3 = criarConsulta(3, medico3, paciente3, new Date(2026, 3, 5), 280);
const consulta4 = criarConsulta(4, medico1, paciente4, new Date(2026, 4, 12), 500);
const consulta5 = criarConsulta(5, medico2, paciente5, new Date(2026, 5, 20), 390);
// Alterando status
const consulta1Atualizada = confirmarConsulta(consulta1);
const consulta2Atualizada = alterarStatusConsulta(consulta2, "realizada");
const consulta3Atualizada = alterarStatusConsulta(consulta3, "cancelada");
const consulta4Atualizada = confirmarConsulta(consulta4);
const consulta5Atualizada = alterarStatusConsulta(consulta5, "agendada");
// Inserindo no array
consultas.push(consulta1Atualizada);
if (consulta2Atualizada)
    consultas.push(consulta2Atualizada);
if (consulta3Atualizada)
    consultas.push(consulta3Atualizada);
consultas.push(consulta4Atualizada);
if (consulta5Atualizada)
    consultas.push(consulta5Atualizada);
// Mostrar todas
console.log("=== TODAS AS CONSULTAS ===");
for (const consulta of consultas) {
    console.log(exibirConsulta(consulta));
}
// Consultas confirmadas
console.log("=== CONSULTAS CONFIRMADAS ===");
const confirmadas = listarConsultasPorStatus(consultas, "confirmada");
for (const consulta of confirmadas) {
    console.log(exibirConsulta(consulta));
}
// Consultas futuras
console.log("=== CONSULTAS FUTURAS ===");
const futuras = listarConsultasFuturas(consultas);
for (const consulta of futuras) {
    console.log(exibirConsulta(consulta));
}
