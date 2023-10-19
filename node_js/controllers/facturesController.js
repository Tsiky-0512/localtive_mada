const facturesService = require("../services/facturesService");


const saveFacture = async (req, res) => {
    try {
        const bien = await facturesService.saveFacture(req.body, req.userId);
        res.status(200).json({
            data: bien,
            status: 200
        })
    } catch (error) {
        res.status(500).json({
            data: error,
            status: 400
        })
    }
}

module.exports = { saveFacture };
