import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

// tslint:disable-next-line: variable-name
export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule)
  },
];
