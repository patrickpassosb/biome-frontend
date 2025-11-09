import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
              Your AI Fitness Coach
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Get real-time form coaching for any exercise. No equipment. No
              subscription. Just better movement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => navigate("/analyze")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Start Analyzing
              </button>
              <button
                onClick={() => navigate("/how-it-works")}
                className="border border-gray-600 hover:border-gray-500 text-text px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                See How It Works
              </button>
            </div>

            <div className="text-text-secondary">
              <p>✨ Powered by Google Gemini & MediaPipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Why Choose Biome?
            </h2>
            <p className="text-xl text-text-secondary">
              Three powerful features that make perfect form accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-bg rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-text mb-4">
                Universal
              </h3>
              <p className="text-text-secondary">
                Works for any exercise - from squats to yoga poses. Our AI
                understands 100+ movements.
              </p>
            </div>

            <div className="text-center p-8 bg-bg rounded-xl">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-semibold text-text mb-4">
                Real-time
              </h3>
              <p className="text-text-secondary">
                Sees your form instantly using advanced computer vision. No
                delays, just immediate feedback.
              </p>
            </div>

            <div className="text-center p-8 bg-bg rounded-xl">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-semibold text-text mb-4">
                Expert AI
              </h3>
              <p className="text-text-secondary">
                Coaching powered by Gemini's reasoning engine. Get insights that
                rival personal trainers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Exercises */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Supported Exercises
            </h2>
            <p className="text-xl text-text-secondary">
              From basic movements to advanced techniques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {["Squat", "Push-up", "Deadlift", "Plank", "Lunge", "Pull-up"].map(
              (exercise) => (
                <div
                  key={exercise}
                  className="bg-surface p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-2xl mb-2">
                    {exercise === "Squat"
                      ? "🏋️"
                      : exercise === "Push-up"
                      ? "💪"
                      : exercise === "Deadlift"
                      ? "⚡"
                      : exercise === "Plank"
                      ? "🧘"
                      : exercise === "Lunge"
                      ? "🦵"
                      : "🔝"}
                  </div>
                  <p className="text-text font-medium">{exercise}</p>
                </div>
              )
            )}
          </div>

          <div className="text-center">
            <p className="text-text-secondary text-lg">
              + 100 more exercises supported
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to improve your form?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who've already perfected their movement with
            Biome
          </p>
          <button
            onClick={() => navigate("/analyze")}
            className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Analyze My Form Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
