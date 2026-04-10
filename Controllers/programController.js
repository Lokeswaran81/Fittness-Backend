let programData = {}; // temporary

// GET
const getPrograms = (req, res) => {
  res.json(programData);
};

// POST
const savePrograms = (req, res) => {
  programData = req.body;
  res.json({ message: "Saved successfully" });
};

module.exports = { getPrograms, savePrograms };
