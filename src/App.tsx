import { ThemeProvider } from './components/ThemeProvider';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { Header } from '@/components/Header';

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
