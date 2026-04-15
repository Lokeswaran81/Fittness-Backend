const mongoose = require("mongoose");

const statSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
      trim: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const whyCardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false },
);

const homeContentSchema = new mongoose.Schema(
  {
    hero: {
      heading: {
        type: String,
        default: "Complete Fitness for Body, Mind & Energy",
        trim: true,
      },
      description: {
        type: String,
        default:
          "Gym training, yoga, zumba dance programs designed to help you achieve strength, flexibility and confidence.",
        trim: true,
      },
      primaryButtonText: {
        type: String,
        default: "Start 7-Day Free Trial",
        trim: true,
      },
      secondaryButtonText: {
        type: String,
        default: "View Programs",
        trim: true,
      },
      backgroundImage: {
        type: String,
        default: "",
        trim: true,
      },
    },

    stats: {
      type: [statSchema],
      default: [
        { number: "4.9 Star", label: "Google Rating" },
        { number: "500+", label: "Active Members" },
        { number: "10+", label: "Certified Trainers" },
      ],
    },

    whyChooseUs: {
      heading: {
        type: String,
        default: "Why Choose Us",
        trim: true,
      },
      cards: {
        type: [whyCardSchema],
        default: [
          {
            title: "Certified Trainers",
            description: "Professional trainers to guide your fitness journey.",
            icon: "fa-dumbbell",
          },
          {
            title: "Nutrition Guidance",
            description: "Personalized diet plans for better results.",
            icon: "fa-apple-whole",
          },
          {
            title: "Progress Tracking",
            description: "Track your workouts and transformation.",
            icon: "fa-chart-line",
          },
        ],
      },
    },

    cta: {
      heading: {
        type: String,
        default: "Start Your Fitness Journey Today",
        trim: true,
      },
      subHeading: {
        type: String,
        default: "Join 500+ Members Transforming Their Lives",
        trim: true,
      },
      description: {
        type: String,
        default:
          "Take the first step towards a healthier, stronger you. Book Your Free Consultation",
        trim: true,
      },
      primaryButtonText: {
        type: String,
        default: "Start 7-Day Free Trial",
        trim: true,
      },
      secondaryButtonText: {
        type: String,
        default: "Book Your Free Consultation",
        trim: true,
      },
    },
  },
  { timestamps: true },
);

const HomeContent = mongoose.model("HomeContent", homeContentSchema);

module.exports = HomeContent;
