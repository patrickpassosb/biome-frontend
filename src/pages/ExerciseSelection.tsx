import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const POPULAR_EXERCISES = [
  { id: "squat", name: "Squat", icon: "🏋️", color: "primary" },
  { id: "pushup", name: "Push-up", icon: "💪", color: "accent" },
  { id: "deadlift", name: "Deadlift", icon: "⚡", color: "success" },
  { id: "plank", name: "Plank", icon: "🧘", color: "primary" },
  { id: "lunge", name: "Lunge", icon: "🦵", color: "accent" },
  { id: "pullup", name: "Pull-up", icon: "🔝", color: "success" },
];

const EXERCISE_CATEGORIES = {
  "Upper Body": [
    "Bench Press",
    "Overhead Press",
    "Bicep Curl",
    "Tricep Dip",
    "Shoulder Press",
    "Lateral Raise",
  ],
  "Lower Body": [
    "Squat",
    "Deadlift",
    "Lunge",
    "Calf Raise",
    "Box Jump",
    "Bulgarian Split Squat",
  ],
  Core: [
    "Plank",
    "Crunch",
    "Russian Twist",
    "Leg Raise",
    "Mountain Climber",
    "Bicycle Crunch",
  ],
  Other: [
    "Burpee",
    "Jump Rope",
    "Mountain Climber",
    "High Knees",
    "Jumping Jacks",
    "Bear Crawl",
  ],
};

export default function ExerciseSelection() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Upper Body");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedExercise) {
      localStorage.setItem("selectedExercise", selectedExercise);
      navigate("/upload");
    }
  };

  const filteredExercises =
    EXERCISE_CATEGORIES[
      selectedCategory as keyof typeof EXERCISE_CATEGORIES
    ]?.filter((exercise) =>
      exercise.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">
            What exercise are you doing?
          </h1>
          <p className="text-xl text-text-secondary">
            Choose from our supported exercises or enter your own
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search exercises..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass border border-white/10 rounded-lg px-4 py-3 text-text placeholder-text-secondary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
            />
          </div>
        </div>

        {/* Popular Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">Popular</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {POPULAR_EXERCISES.map((ex) => {
              const isSelected = selectedExercise === ex.name;
              const colorClasses = {
                primary: isSelected ? "border-primary-500 bg-primary-500/20" : "",
                accent: isSelected ? "border-accent-500 bg-accent-500/20" : "",
                success: isSelected ? "border-success bg-success/20" : "",
              };
              const bgColorClasses = {
                primary: "bg-primary-500",
                accent: "bg-accent-500",
                success: "bg-success",
              };
              const glowColorClasses = {
                primary: "bg-primary-500/10",
                accent: "bg-accent-500/10",
                success: "bg-success/10",
              };
              return (
                <button
                  key={ex.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 glass-hover relative overflow-hidden ${
                    isSelected
                      ? `${colorClasses[ex.color as keyof typeof colorClasses]} glass-strong`
                      : "border-white/10 glass hover:border-white/20"
                  }`}
                  onClick={() => setSelectedExercise(ex.name)}
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 ${glowColorClasses[ex.color as keyof typeof glowColorClasses]} rounded-full blur-2xl ${isSelected ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
                  <div className={`text-3xl mb-2 relative z-10 ${isSelected ? 'scale-110' : ''} transition-transform`}>{ex.icon}</div>
                  <div className="text-text font-medium text-sm relative z-10">{ex.name}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* All Exercises by Category */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">
            All Exercises
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(EXERCISE_CATEGORIES).map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                    : "glass text-text-secondary hover:text-text border border-white/10 hover:border-white/20"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Exercise List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredExercises.map((exercise, index) => (
              <button
                key={index}
                className={`p-3 rounded-lg text-left transition-all duration-200 glass-hover relative overflow-hidden ${
                  selectedExercise === exercise
                    ? "border-primary-500 bg-primary-500/20 border-2 glass-strong"
                    : "border border-white/10 glass hover:border-white/20"
                }`}
                onClick={() => setSelectedExercise(exercise)}
              >
                <div className="text-text font-medium text-sm">{exercise}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Custom Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">
            Or type your own
          </h2>
          <input
            type="text"
            placeholder="e.g., Downward Dog, Turkish Get-up, Handstand"
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="w-full glass border border-white/10 rounded-lg px-4 py-3 text-text placeholder-text-secondary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
          />
        </section>

        {/* Selected Exercise Display */}
        {selectedExercise && (
          <div className="mb-8 p-4 glass border-2 border-primary-500/50 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-text-secondary text-sm">
                  Selected Exercise:
                </p>
                <p className="text-text font-semibold text-lg">
                  {selectedExercise}
                </p>
              </div>
              <button
                onClick={() => setSelectedExercise("")}
                className="w-8 h-8 rounded-full glass-light hover:bg-red-500/20 text-text-secondary hover:text-text transition-all flex items-center justify-center"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="text-center">
          <button
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
              selectedExercise
                ? "bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                : "glass text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedExercise}
            onClick={handleContinue}
          >
            Continue to Upload
          </button>
        </div>
      </div>
    </div>
  );
}
