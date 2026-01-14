import { cn } from '../lib/utils';
import Avatar from 'react-avatar';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from './ui/sidebar';
import { Button } from './ui/button';
import { useSidebar } from './ui/sidebar';
import { LogOutIcon } from 'lucide-react';
import { Logo } from '../assets/Logo';

import { APP_SIDEBAR } from '../constants';

export const AppSidebar = () => {
  const { isMobile, openMobile } = useSidebar();
  return (
    <Sidebar
      variant='floating'
      collapsible='icon'
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className='mt-4 mb-2 flex gap-5'>
            <Logo variant={isMobile ? 'default' : 'icon'} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
};
