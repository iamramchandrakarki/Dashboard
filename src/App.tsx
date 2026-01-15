import { ThemeProvider } from './components/ThemeProvider';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { Header } from '@/components/Header';
import { Page, PageHeader } from '@/components/Page';
import { DashboardCard } from '@/components/DashboardCard';

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main>
            <Page>
              <PageHeader />
              <div className=''>
                <DashboardCard
                  title='Dashboard'
                  description='Keep Track and Security ratings'
                  buttonText='View Full Report'
                >
                  {' '}
                </DashboardCard>
              </div>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
