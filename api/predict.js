// api/predict.js
module.exports = (req, res) => {
    const { gender, race, gpa, satScore, actScore, college, major } = req.body;
    
    // Process the data and calculate chances (mock example)
    const chance = Math.random(); // Replace with actual model logic

    res.status(200).json({ chance });
};
