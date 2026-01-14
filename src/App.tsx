import { ThemeProvider } from './components/ThemeProvider';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset></SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
