import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ProcessStepProps {
  number: number;
  title: string;
  icon: string;
  description: string;
  details: string[];
  visual?: React.ReactNode;
}

function ProcessStep({
  number,
  title,
  icon,
  description,
  details,
  visual,
}: ProcessStepProps) {
  return (
    <div className="mb-16 animate-slide-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="glass rounded-2xl p-8 relative overflow-hidden animate-slide-in-left">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl animate-gentle-pulse"></div>
          <div className="flex items-center mb-6 relative z-10">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg animate-gentle-pulse">
              {number}
            </div>
            <h3 className="text-3xl font-bold text-text">{title}</h3>
          </div>

          <p className="text-xl text-text-secondary mb-6 relative z-10">{description}</p>

          <ul className="space-y-3 relative z-10">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 animate-gentle-pulse" style={{ animationDelay: `${(index + 1) * 0.2}s` }}></div>
                <span className="text-text-secondary">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          {visual || (
            <div className="glass p-8 rounded-xl glass-hover relative overflow-hidden animate-slide-in-right">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-gentle-pulse"></div>
              <div className="text-6xl mb-4 text-center relative z-10 animate-float">{icon}</div>
              <div className="text-center text-text-secondary relative z-10">
                Visualization
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkeletonVisualization() {
  return (
    <div className="glass p-6 rounded-xl glass-hover relative overflow-hidden animate-slide-in-right">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl animate-gentle-pulse"></div>
      <div className="text-center mb-4 relative z-10">
        <div className="text-4xl mb-2 relative z-10 animate-float">🦴</div>
        <h4 className="text-lg font-semibold text-text">Body Landmarks</h4>
      </div>
      <div className="space-y-2 text-sm text-text-secondary relative z-10">
        {["• 33 key points detected", "• Joint angles calculated", "• Symmetry analysis", "• Movement tracking"].map((item, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.15}s` }}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function GeminiPromptDemo() {
  return (
    <div className="glass p-6 rounded-xl glass-hover relative overflow-hidden animate-slide-in-right">
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl animate-gentle-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="text-center mb-4 relative z-10">
        <div className="text-4xl mb-2 relative z-10 animate-float" style={{ animationDelay: '0.5s' }}>🧠</div>
        <h4 className="text-lg font-semibold text-text">AI Analysis</h4>
      </div>
      <div className="glass-light p-4 rounded-lg text-sm relative z-10 animate-fade-in delay-200">
        <div className="text-primary-400 mb-2">Input:</div>
        <div className="text-text-secondary mb-4">
          "Squat analysis: knee angle 87°, hip angle 92°, back rounding 15°"
        </div>
        <div className="text-success mb-2">Output:</div>
        <div className="text-text-secondary">
          "Focus on pushing knees out to reduce valgus. Maintain chest up
          position."
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold text-text mb-6">How Biome Works</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            AI-powered form coaching in three simple steps
          </p>
        </section>

        {/* Process Steps */}
        <section className="mb-20">
          <ProcessStep
            number={1}
            title="Vision Agent Analyzes"
            icon="👁️"
            description="MediaPipe extracts 33 body landmarks and calculates biomechanics"
            details={[
              "Joint angles (knee, hip, elbow)",
              "Left/right symmetry",
              "Movement stability",
              "Posture alignment",
            ]}
            visual={<SkeletonVisualization />}
          />

          <ProcessStep
            number={2}
            title="Coaching Agent Reasons"
            icon="🧠"
            description="Gemini interprets your biomechanics and generates coaching"
            details={[
              "Understands 100+ exercises",
              "Context-aware feedback",
              "Safety-first recommendations",
            ]}
            visual={<GeminiPromptDemo />}
          />

          <ProcessStep
            number={3}
            title="You Improve"
            icon="💪"
            description="Get instant, actionable feedback to perfect your form"
            details={[
              "Real-time corrections",
              "Track progress over time",
              "Build better habits",
            ]}
          />
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">
              The Technology Behind Biome
            </h2>
            <p className="text-xl text-text-secondary">
              Powered by cutting-edge AI and computer vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl text-center glass-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="text-4xl mb-4 relative z-10">🤖</div>
              <h3 className="text-xl font-semibold text-text mb-2 relative z-10">
                Google ADK
              </h3>
              <p className="text-text-secondary relative z-10">Agentic AI Architecture</p>
            </div>

            <div className="glass p-8 rounded-xl text-center glass-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
              <div className="text-4xl mb-4 relative z-10">👁️</div>
              <h3 className="text-xl font-semibold text-text mb-2 relative z-10">
                MediaPipe
              </h3>
              <p className="text-text-secondary relative z-10">Pose Detection</p>
            </div>

            <div className="glass p-8 rounded-xl text-center glass-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl"></div>
              <div className="text-4xl mb-4 relative z-10">🧠</div>
              <h3 className="text-xl font-semibold text-text mb-2 relative z-10">
                Gemini 2.0
              </h3>
              <p className="text-text-secondary relative z-10">Reasoning Engine</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-text mb-6">
            Ready to try it?
          </h2>
          <button
            onClick={() => navigate("/analyze")}
            className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Analyze Your Form
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
