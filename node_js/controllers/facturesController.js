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

const generateFacture = async (req,res) => {
    try {
        const bien = await facturesService.generateFacture(req.body, req.userId);
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

const getFacturesPaginate = async (req, res) => {

    try {
        const factures = await facturesService.getFacturesPaginate(req.params.page, req.params.limit,req.userId);
        res.status(200).json({
            data: factures,
            status: 200
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: error,
            status: 400
        })
    }
}


const sendFacture = async (req, res) => {
    try {
        console.log("ATOOOOO");
        const factures = await facturesService.sendFacture(req.params.id);
        res.status(200).json({
            data: factures,
            status: 200
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: error,
            status: 400
        })
    }
}

module.exports = { saveFacture , generateFacture,getFacturesPaginate,sendFacture };
