import { currentUser } from '@clerk/nextjs/server';
import { getUserByClerkId } from '@/lib/actions/user-actions';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const user = await currentUser();
  
  if (!user) {
    redirect('/sign-in');
  }

  const dbUser = await getUserByClerkId(user.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {dbUser?.name || user.fullName}!
              </h1>
              <p className="text-foreground/70">
                Your AI Recruiter dashboard is ready. Start screening candidates with AI-powered interviews.
              </p>
            </div>
            {user.imageUrl && (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                <img 
                  src={user.imageUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Total Candidates</h3>
                  <p className="text-3xl font-bold text-primary">0</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Interviews</h3>
                  <p className="text-3xl font-bold text-green-500">0</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Analysis</h3>
                  <p className="text-3xl font-bold text-blue-500">0</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-card to-muted rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-border hover:from-primary/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Import Candidates</span>
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">Upload resumes and candidate profiles</p>
                </button>
                
                <button className="w-full text-left p-4 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-lg border border-border hover:from-green-500/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Schedule Interviews</span>
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">Set up AI-powered interviews</p>
                </button>
                
                <button className="w-full text-left p-4 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-lg border border-border hover:from-blue-500/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">View Analytics</span>
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">Review interview insights and metrics</p>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card to-muted rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/5 to-primary/3 rounded-lg">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Welcome to AI Recruiter!</p>
                    <p className="text-sm text-foreground/60">Get started by importing your first batch of candidates</p>
                  </div>
                </div>
                <div className="text-center text-foreground/60 text-sm">
                  No recent activity yet. Start by importing candidates or scheduling interviews.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}