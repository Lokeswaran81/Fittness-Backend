let programData = {}; 


const getPrograms = (req, res) => {
  res.json(programData);
};


const savePrograms = (req, res) => {
  programData = req.body;
  res.json({ message: "Saved successfully" });
};

module.exports = { getPrograms, savePrograms };
console.log("hello");
