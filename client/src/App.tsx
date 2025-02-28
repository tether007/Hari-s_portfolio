import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ProjectsPage from "@/pages/projects";
import ComponentsPage from "@/pages/components";
import ActivityPage from "@/pages/activity";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/activity" component={ActivityPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;