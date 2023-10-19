const locatairesService = require("../services/locatairesService");


const getLocataires = async (req, res) => {
    try {
        const locataires = await locatairesService.getLocataires(req.userId);
        res.status(200).json({
            data:locataires,
            status:200
        })
    } catch (error) {
        res.status(500).json({
            data: error,
            status:400
        })
    }
}

const getLocataireById = async (req, res) => {
    try {
        const locataire = await locatairesService.getLocataireById(req.params.id,req.userId);
        res.status(200).json({
            data:locataire,
            status:200
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            status:400
        })
    }
}

const getLocatairesPaginate = async (req, res) => {

    try {
        const locataires = await locatairesService.getLocatairesPaginate(req.params.page, req.params.limit,req.userId);
        res.status(200).json({
            data: locataires,
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

const saveLocataire = async (req, res) => {
    try {
        const locataire = await locatairesService.saveLocataire(req.body,req.userId);
        res.status(200).json({
            data:locataire,
            status:200
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            status:400
        })
    }
}


const updateLocataire = async (req, res) => {
    try {
        const locataire = await locatairesService.updateLocataires(req.body._id,req.body,req.userId);
        res.status(200).json({
            data:locataire,
            status:200
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            status:400
        })
    }
}

const deleteLocataire = async (req,res) => {
    try {
        const locataire = await locatairesService.deleteLocataire(req.params.id);
        res.status(200).json({
            data:locataire,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:500
        })
    }
}





module.exports = { getLocataires ,getLocataireById, saveLocataire, updateLocataire, deleteLocataire ,getLocatairesPaginate   };
