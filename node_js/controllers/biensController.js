const biensService = require("../services/biensService");


const getBiens = async (req, res) => {
    try {
        const biens = await biensService.getBiens(req.userId);
        res.status(200).json({
            data: biens,
            status: 200
        })
    } catch (error) {
        res.status(500).json({
            data: error,
            status: 400
        })
    }
}


const getBiensPaginate = async (req, res) => {

    try {
        const biens = await biensService.getBiensPaginate(req.params.page, req.params.limit,req.userId);
        res.status(200).json({
            data: biens,
            status: 200
        })
    } catch (error) {
        res.status(500).json({
            data: error,
            status: 400
        })
    }
}

const getBienById = async (req, res) => {
    try {
        const bien = await biensService.getBienById(req.params.id, req.userId,);
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

const saveBien = async (req, res) => {
    try {
        const bien = await biensService.saveBien(req.body, req.userId);
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


const updateBien = async (req, res) => {
    try {
        const bien = await biensService.updateBiens(req.body._id, req.body ,req.userId);
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

const deleteBien = async (req, res) => {
    try {
        const bien = await biensService.deleteBien(req.params.id);
        res.status(200).json({
            data: bien,
            status: 200
        })
    } catch (error) {
        res.status(400).json({
            data: error,
            status: 500
        })
    }
}





module.exports = { getBiens, getBienById, saveBien, updateBien, deleteBien, getBiensPaginate };
