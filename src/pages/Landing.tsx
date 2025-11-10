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
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6 animate-slide-up delay-100">
              Your AI Fitness Coach
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
              Get real-time form coaching for any exercise. No equipment. No
              subscription. Just better movement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up delay-300">
              <button
                onClick={() => navigate("/analyze")}
                className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Analyzing
              </button>
              <button
                onClick={() => navigate("/how-it-works")}
                className="glass border border-white/10 hover:border-white/20 text-text px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                See How It Works
              </button>
            </div>

            <div className="text-text-secondary animate-fade-in delay-400">
              <p>✨ Powered by Google Gemini & MediaPipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <div className="text-center p-8 glass rounded-xl glass-hover relative overflow-hidden animate-slide-up delay-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-gentle-pulse"></div>
              <div className="text-5xl mb-4 relative z-10 animate-float">🎯</div>
              <h3 className="text-2xl font-semibold text-text mb-4 relative z-10">
                Universal
              </h3>
              <p className="text-text-secondary relative z-10">
                Works for any exercise - from squats to yoga poses. Our AI
                understands 100+ movements.
              </p>
            </div>

            <div className="text-center p-8 glass rounded-xl glass-hover relative overflow-hidden animate-slide-up delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="text-5xl mb-4 relative z-10 animate-float" style={{ animationDelay: '0.5s' }}>👁️</div>
              <h3 className="text-2xl font-semibold text-text mb-4 relative z-10">
                Real-time
              </h3>
              <p className="text-text-secondary relative z-10">
                Sees your form instantly using advanced computer vision. No
                delays, just immediate feedback.
              </p>
            </div>

            <div className="text-center p-8 glass rounded-xl glass-hover relative overflow-hidden animate-slide-up delay-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="text-5xl mb-4 relative z-10 animate-float" style={{ animationDelay: '1s' }}>💪</div>
              <h3 className="text-2xl font-semibold text-text mb-4 relative z-10">
                Expert AI
              </h3>
              <p className="text-text-secondary relative z-10">
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
              (exercise, index) => {
                const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : index === 3 ? 'delay-400' : index === 4 ? 'delay-500' : 'delay-100';
                return (
                <div
                  key={exercise}
                  className={`glass p-4 rounded-lg text-center glass-hover relative overflow-hidden animate-slide-up ${delayClass}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>
                  <div className="text-2xl mb-2 relative z-10">
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
                  <p className="text-text font-medium relative z-10">{exercise}</p>
                </div>
                );
              }
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass-strong rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-text mb-6">
              Ready to improve your form?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join thousands of users who've already perfected their movement with
              Biome
            </p>
            <button
              onClick={() => navigate("/analyze")}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Analyze My Form Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
