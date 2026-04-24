'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mic, Users, Zap, Shield, Clock, Headphones, Play } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleStartFreeTrial = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };

  const handleSignIn = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };

  const handleSignUp = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-up');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <Headphones className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                RecruitAI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="outline" className="border-border hover:bg-muted">
                Contact Sales
              </Button>
              <Button 
                variant="outline" 
                className="border-border hover:bg-muted"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                  AI-Powered Recruitment
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Your Hiring with{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    AI Voice Interviews
                  </span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  RecruitAI automates candidate screening with intelligent voice interviews. 
                  Import candidate content, let our AI conduct initial screenings, and focus 
                  on the best matches while saving up to 80% of your recruitment time.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Save 80% Time</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Consistent Screening</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Scale Interviews</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Smart Matching</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60 text-lg px-8 py-6"
                  onClick={handleStartFreeTrial}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-muted text-lg px-8 py-6">
                  Request Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-foreground/60">
                <span>Trusted by 500+ companies</span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                  <span>(4.8/5 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border/50">
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full animate-bounce"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full animate-pulse"></div>

                {/* Main Content */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-foreground/80">Live Demo</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group"
                    >
                      {isPlaying ? 'Pause' : 'Play'} Demo
                      <Play className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>

                  {/* Mock Interview Interface */}
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">AI Interviewer</span>
                        <Mic className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-foreground/70">
                        "Hello! I'm RecruitAI. Let's start with some questions about your experience..."
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Candidate Response</span>
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm text-foreground/70">
                        "I have 5 years of experience in software development with expertise in React and Node.js..."
                      </p>
                    </div>

                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">AI Analysis</span>
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">✅ Experience Match</span>
                        <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded">✅ Communication</span>
                        <span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded">✅ Skills</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardDescription className="text-xs">Candidates Screened</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">10,000+</CardTitle>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardDescription className="text-xs">Interviews Conducted</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">5,000+</CardTitle>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardDescription className="text-xs">Hiring Success</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">92%</CardTitle>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
              Key Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Smarter Hiring
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our AI-powered platform transforms your recruitment process with intelligent automation 
              and data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">AI Voice Interviews</CardTitle>
                  <CardDescription>
                    Conduct natural, conversational interviews with candidates using advanced AI technology
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Multi-language support</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Smart Candidate Import</CardTitle>
                  <CardDescription>
                    Easily import candidate profiles, resumes, and applications for automated screening
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Resume parsing</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>LinkedIn integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>ATS compatibility</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Intelligent Analysis</CardTitle>
                  <CardDescription>
                    Get detailed insights and scoring for every candidate based on their responses
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Skill assessment</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Cultural fit scoring</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Communication analysis</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Automated Scheduling</CardTitle>
                  <CardDescription>
                    Let AI handle interview scheduling and coordination seamlessly
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Calendar integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Time zone detection</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Reminder system</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Compliance & Security</CardTitle>
                  <CardDescription>
                    Ensure data privacy and compliance with industry standards
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Audit trails</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Real-time Analytics</CardTitle>
                  <CardDescription>
                    Track performance metrics and make data-driven hiring decisions
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Hiring funnel insights</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Candidate scoring dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Time-to-hire metrics</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              How RecruitAI{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Transform your hiring process in just 3 simple steps
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2"></div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative lg:flex items-center gap-12">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background shadow-lg">
                    1
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pr-8">
                  <Card className="border-border hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Import Candidate Content</CardTitle>
                          <CardDescription>
                            Upload resumes, LinkedIn profiles, or application data
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Resume parsing</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">LinkedIn integration</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">Bulk upload</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">ATS sync</span>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-border">
                        <p className="text-sm text-foreground/80">
                          <strong>Pro Tip:</strong> Our AI automatically extracts key information 
                          from resumes and profiles to create comprehensive candidate profiles.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 lg:pl-8 lg:text-right">
                  <div className="bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/60">Sample Resume</span>
                        <span className="text-xs text-foreground/50">PDF • 2 pages</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Name:</span>
                            <span className="font-medium">John Doe</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Email:</span>
                            <span className="font-medium">john@example.com</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Phone:</span>
                            <span className="font-medium">+1 (555) 123-4567</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Experience:</span>
                            <span className="font-medium">5 years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Skills:</span>
                            <span className="font-medium">React, Node.js, Python</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Location:</span>
                            <span className="font-medium">San Francisco, CA</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <span className="text-xs text-foreground/50">Status: Parsed Successfully</span>
                        <div className="flex space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-sm">Ready for Interview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative lg:flex items-center gap-12">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background shadow-lg">
                    2
                  </div>
                </div>

                <div className="lg:w-1/2 lg:order-2 lg:pl-8">
                  <Card className="border-border hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">AI Conducts Screening Interview</CardTitle>
                          <CardDescription>
                            Our intelligent agent calls candidates and conducts personalized interviews
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm">Voice calls</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm">Smart questions</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm">Real-time analysis</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm">Multi-language</span>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg border border-border">
                        <p className="text-sm text-foreground/80">
                          <strong>Smart Matching:</strong> Our AI asks relevant questions based on 
                          the candidate's profile and your job requirements.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 lg:order-1 lg:pr-8">
                  <div className="bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/60">Live Interview</span>
                        <div className="flex items-center space-x-2">
                          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-xs text-foreground/50">In Progress</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-primary/5 rounded-lg p-3 border border-border">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-foreground/60">AI Interviewer</span>
                            <span className="text-xs text-foreground/50">02:34</span>
                          </div>
                          <p className="text-sm">"Tell me about your experience with React and how you've used it in previous projects."</p>
                        </div>
                        
                        <div className="bg-muted rounded-lg p-3 border border-border">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-foreground/60">Candidate</span>
                            <span className="text-xs text-foreground/50">03:12</span>
                          </div>
                          <p className="text-sm">"I've been working with React for 3 years, primarily building user interfaces for e-commerce platforms..."</p>
                        </div>

                        <div className="bg-primary/5 rounded-lg p-3 border border-border">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-foreground/60">AI Interviewer</span>
                            <span className="text-xs text-foreground/50">03:45</span>
                          </div>
                          <p className="text-sm">"Great! How do you handle state management in your React applications?"</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div className="flex space-x-4 text-xs text-foreground/50">
                          <span>🎤 Voice Analysis</span>
                          <span>🧠 AI Scoring</span>
                          <span>📊 Real-time</span>
                        </div>
                        <span className="text-xs">Next: Analysis & Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative lg:flex items-center gap-12">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-background shadow-lg">
                    3
                  </div>
                </div>

                <div className="lg:w-1/2 lg:pr-8">
                  <Card className="border-border hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Review Results & Schedule</CardTitle>
                          <CardDescription>
                            Get detailed insights and seamlessly schedule follow-up interviews
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">Detailed reports</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">Candidate scoring</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">Smart scheduling</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-card rounded-lg border border-border">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">Team collaboration</span>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg border border-border">
                        <p className="text-sm text-foreground/80">
                          <strong>Decision Ready:</strong> All candidates are scored and ranked, 
                          making it easy to identify your top matches.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 lg:pl-8 lg:text-right">
                  <div className="bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/60">Candidate Analysis</span>
                        <span className="text-xs text-foreground/50">Completed</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-500">8.5/10</div>
                          <div className="text-xs text-foreground/60">Overall Score</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-500">9/10</div>
                          <div className="text-xs text-foreground/60">Technical Skills</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-500">8/10</div>
                          <div className="text-xs text-foreground/60">Communication</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/60">Experience Match</span>
                          <span className="font-medium">✅ 95%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-95%"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/60">Cultural Fit</span>
                          <span className="font-medium">✅ 85%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-85%"></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <Button className="bg-gradient-to-r from-primary to-primary/80">
                          Schedule Interview
                        </Button>
                        <span className="text-xs text-foreground/50">Ready for next step</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
              Proven Results
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Experience the{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their hiring process with RecruitAI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Benefit 1 */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Save 80% Time on Screening</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Automate initial candidate screening and focus your time on the most promising matches. 
                    What used to take hours now happens in minutes.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-foreground/60">
                    <span className="font-medium">Before: 2-3 hours per candidate</span>
                    <span className="text-foreground/40">→</span>
                    <span className="font-medium text-green-500">After: 15 minutes</span>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Improve Hiring Quality</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Our AI analyzes thousands of data points to identify the best candidates, 
                    reducing bias and improving the quality of your hires.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-foreground/60">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>92% hiring success rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>40% reduction in turnover</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Scale Your Recruitment</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Handle hundreds of candidates simultaneously without compromising on quality. 
                    Perfect for high-volume hiring needs.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-foreground/60">
                    <span className="font-medium">Scale from 10 to 1000+ candidates</span>
                    <span className="text-foreground/40">•</span>
                    <span className="font-medium">Consistent experience</span>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ensure Compliance</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    All interviews are recorded, analyzed, and stored securely with full audit trails. 
                    Stay compliant with hiring regulations.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-foreground/60">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>GDPR compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>End-to-end encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Visualization */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-center">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">80%</div>
                    <div className="text-sm text-foreground/60">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">92%</div>
                    <div className="text-sm text-foreground/60">Hiring Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-500 mb-2">40%</div>
                    <div className="text-sm text-foreground/60">Reduced Turnover</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-500 mb-2">10x</div>
                    <div className="text-sm text-foreground/60">Faster Hiring</div>
                  </div>
                </div>
              </div>

              {/* ROI Calculator Preview */}
              <div className="bg-gradient-to-br from-card to-muted rounded-2xl p-6 border border-border">
                <h4 className="font-semibold mb-4">ROI Calculator</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Current screening time per candidate:</span>
                    <span className="font-medium">3 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">RecruitAI screening time:</span>
                    <span className="font-medium text-green-500">15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Time saved per candidate:</span>
                    <span className="font-medium text-green-500">2.75 hours</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-medium">Monthly savings (100 candidates):</span>
                    <span className="font-bold text-green-500">$16,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              What Our{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Hear from companies that have transformed their hiring with RecruitAI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/60 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SJ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>HR Director, TechCorp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "RecruitAI has completely transformed our hiring process. We're now able to screen 
                  10x more candidates with the same team, and the quality of our hires has never been better."
                </p>
                <div className="text-sm text-foreground/60">
                  <span className="font-medium">Results:</span> 75% faster hiring, 95% candidate satisfaction
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Rodriguez</CardTitle>
                    <CardDescription>Talent Acquisition Lead, StartupXYZ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "The AI interviews are incredibly natural and provide insights we never got from 
                  traditional screening. Our new hires are a much better cultural fit."
                </p>
                <div className="text-sm text-foreground/60">
                  <span className="font-medium">Results:</span> 40% reduction in turnover, 90% hiring manager satisfaction
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">EA</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Emily Anderson</CardTitle>
                    <CardDescription>Recruitment Manager, EnterpriseCo</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">
                  "We handle thousands of applications monthly. RecruitAI lets us maintain quality 
                  while scaling our recruitment efforts. The analytics dashboard is a game-changer."
                </p>
                <div className="text-sm text-foreground/60">
                  <span className="font-medium">Results:</span> 200% increase in candidate throughput, 95% compliance score
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Logos */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-8">Trusted by leading companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-all duration-300">
              <div className="text-4xl font-bold text-foreground/40">TechCorp</div>
              <div className="text-4xl font-bold text-foreground/40">StartupXYZ</div>
              <div className="text-4xl font-bold text-foreground/40">EnterpriseCo</div>
              <div className="text-4xl font-bold text-foreground/40">GrowthInc</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
              Flexible Plans
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Plan
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Start with a free trial and scale as your hiring needs grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <CardDescription>Ideal for small teams</CardDescription>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-foreground/60">/month</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/3"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Up to 50 candidates/month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">AI voice interviews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Resume parsing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Basic analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Email support</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60">
                  Start Free Trial
                </Button>
                <div className="text-center text-xs text-foreground/60">
                  14-day free trial • No credit card required
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-primary/2 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/60 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription>Perfect for growing teams</CardDescription>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-bold">$799</span>
                  <span className="text-foreground/60">/month</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-2/3"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Up to 250 candidates/month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">AI voice interviews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Resume parsing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Smart scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Priority support</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60">
                  Start Free Trial
                </Button>
                <div className="text-center text-xs text-foreground/60">
                  14-day free trial • No credit card required
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-foreground/60">/month</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-full"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Unlimited candidates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">AI voice interviews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Resume parsing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Smart scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">24/7 premium support</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-border hover:bg-muted">
                  Contact Sales
                </Button>
                <div className="text-center text-xs text-foreground/60">
                  Custom pricing based on your needs
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="mt-16 bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-3">Features</th>
                    <th className="text-center pb-3">Basic</th>
                    <th className="text-center pb-3">Pro</th>
                    <th className="text-center pb-3">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-border/50">
                    <td className="py-3">Candidates per month</td>
                    <td className="py-3 text-center">50</td>
                    <td className="py-3 text-center">250</td>
                    <td className="py-3 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">AI Voice Interviews</td>
                    <td className="py-3 text-center">✓</td>
                    <td className="py-3 text-center">✓</td>
                    <td className="py-3 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">Smart Scheduling</td>
                    <td className="py-3 text-center">-</td>
                    <td className="py-3 text-center">✓</td>
                    <td className="py-3 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">Team Collaboration</td>
                    <td className="py-3 text-center">-</td>
                    <td className="py-3 text-center">✓</td>
                    <td className="py-3 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3">Priority Support</td>
                    <td className="py-3 text-center">Email</td>
                    <td className="py-3 text-center">Priority</td>
                    <td className="py-3 text-center">24/7 Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 border border-border text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="secondary" className="text-sm font-medium px-3 py-1 mx-auto">
                Ready to Transform Your Hiring?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Start Your{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Free Trial Today
                </span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Join 500+ companies that have already transformed their hiring process. 
                No credit card required, cancel anytime.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">14 Days</div>
                  <div className="text-sm text-foreground/60">Free Trial</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-500">No Card</div>
                  <div className="text-sm text-foreground/60">Required</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-500">Cancel</div>
                  <div className="text-sm text-foreground/60">Anytime</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60 text-lg px-10 py-6"
                  onClick={handleStartFreeTrial}
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-muted text-lg px-10 py-6">
                  Schedule Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-foreground/60">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-background via-background to-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  RecruitAI
                </span>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Transforming recruitment with AI-powered voice interviews and intelligent candidate screening.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground">
                  Facebook
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-foreground/60">
                <a href="#" className="hover:text-foreground transition-colors">Features</a>
                <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="hover:text-foreground transition-colors">Integrations</a>
                <a href="#" className="hover:text-foreground transition-colors">API</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-foreground/60">
                <a href="#" className="hover:text-foreground transition-colors">About Us</a>
                <a href="#" className="hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="hover:text-foreground transition-colors">Blog</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-foreground/60">
                <a href="#" className="hover:text-foreground transition-colors">Help Center</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Security</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © 2024 RecruitAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-foreground/60">
              <span>Trusted by 500+ companies</span>
              <span>4.8/5 stars from 200+ reviews</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
