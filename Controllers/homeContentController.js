const HomeContent = require("../models/homeContentModel");


const getHomeContent = async (req, res) => {
  try {
    let content = await HomeContent.findOne();

    if (!content) {
      content = await HomeContent.create({});
    }

    return res.status(200).json({
      success: true,
      message: "Home content fetched successfully",
      data: content,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching home content",
      error: error.message,
    });
  }
};


const updateHomeContent = async (req, res) => {
  try {
    const { hero, stats, whyChooseUs, cta } = req.body;
    let content = await HomeContent.findOne();
    console.log(content);

    if (!content) {
      content = await HomeContent.create({
        hero,
        stats,
        whyChooseUs,
        cta,
      });
    } else {
      content.hero = hero || content.hero;
      content.stats = stats || content.stats;
      content.whyChooseUs = whyChooseUs || content.whyChooseUs;
      content.cta = cta || content.cta;
      await content.save();
    }

    return res.status(200).json({
      success: true,
      message: "Home content updated successfully",
      data: content,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating home content",
      error: error.message,
    });
  }
};

module.exports = {
  getHomeContent,
  updateHomeContent,
};
