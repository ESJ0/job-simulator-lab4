function validate(body) {
    const { campo1, campo2, campo3, campo4, campo5, campo6 } = body;

    if (
        campo1 === undefined ||
        campo2 === undefined ||
        campo3 === undefined ||
        campo4 === undefined ||
        campo5 === undefined ||
        campo6 === undefined
    ) {
        return "Todos los campos son requeridos";
    }

    if (typeof campo1 !== "string") return "campo1 debe ser string";
    if (typeof campo2 !== "string") return "campo2 debe ser string";
    if (typeof campo3 !== "string") return "campo3 debe ser string";
    if (!Number.isInteger(campo4)) return "campo4 debe ser integer";
    if (typeof campo5 !== "number") return "campo5 debe ser float";
    if (typeof campo6 !== "boolean") return "campo6 debe ser boolean";

    return null;
}

module.exports = validate;