const db = require("./db");
const validate = require("./validation");

exports.getAll = async(req, res) => {
    const result = await db.query("SELECT * FROM pilots");
    res.json(result.rows);
};

exports.getOne = async(req, res) => {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM pilots WHERE id=$1", [id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json(result.rows[0]);
};

exports.create = async(req, res) => {
    const error = validate(req.body);
    if (error) return res.status(400).json({ error });

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await db.query(
        `INSERT INTO pilots (campo1, campo2, campo3, campo4, campo5, campo6)
         VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [campo1, campo2, campo3, campo4, campo5, campo6]
    );

    res.status(201).json(result.rows[0]);
};

exports.update = async(req, res) => {
    const { id } = req.params;

    const error = validate(req.body);
    if (error) return res.status(400).json({ error });

    const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

    const result = await db.query(
        `UPDATE pilots 
         SET campo1=$1, campo2=$2, campo3=$3, campo4=$4, campo5=$5, campo6=$6
         WHERE id=$7 RETURNING *`, [campo1, campo2, campo3, campo4, campo5, campo6, id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json(result.rows[0]);
};

exports.remove = async(req, res) => {
    const { id } = req.params;

    const result = await db.query(
        "DELETE FROM pilots WHERE id=$1 RETURNING *", [id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json({ message: "Deleted" });
};