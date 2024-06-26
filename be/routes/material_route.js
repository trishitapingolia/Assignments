// Import required modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MaterialModel = mongoose.model('MaterialModel');

// Route to create multiple materials
router.post('/materials', async (req, res) => {
    const materials = req.body;

    if (!Array.isArray(materials) || materials.length === 0) {
        return res.status(400).json({ Error: "Please provide an array of material objects" });
    }

    try {
        const newMaterials = await Promise.all(materials.map(async (material) => {
            const { name, technology, colors, pricePerGram, applicationTypes, imageUrl } = material;

            if (!name || !technology || !colors || !pricePerGram || !applicationTypes || !imageUrl) {
                throw new Error("Please fill all the mandatory fields for each material");
            }

            const materialObj = new MaterialModel({
                name: name,
                technology: technology,
                colors: colors,
                pricePerGram: pricePerGram,
                applicationTypes: applicationTypes,
                imageUrl: imageUrl
            });

            return await materialObj.save();
        }));

        res.status(201).json({ Materials: newMaterials });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err.message });
    }
});

// Route to get all materials
router.get('/materials', async (req, res) => {
    try {
        const materials = await MaterialModel.find()
        res.status(200).json({ materials: materials });
    }
    catch (err) {
        console.log(err);
    };
})

// Route to get a single material by ID
router.get('/materials/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const material = await MaterialModel.find({ _id: id })

        res.status(200).json({ material: material });
    } catch (err) {
        console.log(err);
    };
})


// Route to delete a material by ID
router.delete('/materials/:id', async (req, res) => {
    try {
        const materialFound = await MaterialModel.findOne({ _id: req.params.id })
            .populate('author', '_id')
        if (!materialFound) {
            return res.status(404).json({ Error: "Material not found" });
        }else{
            await materialFound.deleteOne();
            return res.status(200).json({ result: "Material deleted successfully" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: "Internal server error" });
    }
});

// Route to update a material by ID
router.put('/materials/:id',  async (req, res) => {
    try {
        const { name, technology, colors, pricePerGram, applicationTypes, imageUrl } = req.body;
        const id = req.params.id;
        const updatedmaterial = {
            name, technology, colors, pricePerGram, applicationTypes, imageUrl
        };
        const result = await MaterialModel.findOneAndUpdate(
            { _id: id },
            updatedmaterial,
            { new: true }
        );
        return res.status(200).json({ updatedMaterial: result });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Internal server error' });
    }
})


module.exports = router;