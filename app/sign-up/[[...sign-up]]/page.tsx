import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              card: "bg-card border-border shadow-lg",
              headerTitle: "text-2xl font-bold text-foreground",
              headerSubtitle: "text-foreground/70",
              formButtonPrimary: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/60",
              formFieldInput: "bg-input border-border focus:border-primary focus:ring-primary/20",
              footerActionLink: "text-primary hover:text-primary/80",
            }
          }}
        />
      </div>
    </div>
  );
}